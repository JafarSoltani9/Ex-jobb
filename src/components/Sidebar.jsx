import React, { useContext, useEffect, useState } from 'react';
import logoImage from '../assets/images/logo/logo-image.png';
import logoTextWhite from '../assets/images/logo/logo-text-white.png';
import { ArrowDownUp, BarChart3, BookMarked, BriefcaseBusiness, BriefcaseMedical, ChevronsLeft, ChevronsRight, ClipboardList, FireExtinguisher, Home, LogOut, Phone, Pin, PinOff, ScrollText, Settings, SquarePower, Wifi } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { TextSizeContext } from '../contexts/TextSizeContext';
import { TextSpaceContext } from '../contexts/TextSpaceContext';
import { BlackWhiteContext } from '../contexts/BlackWhiteContext';
import { ShowLinkContext } from '../contexts/ShowLinkContext';

const primaryMenuItems = [
    { url: '/', icon: <Home className="icon" />, text: 'Home' },
    { url: '/rescue', icon: <FireExtinguisher className="icon" />, text: 'Rescue' },
    { url: '/operation', icon: <BriefcaseBusiness className="icon" />, text: 'Operation' },
    { url: '/commissioning', icon: <ClipboardList className="icon" />, text: 'Commissioning' },
    { url: '/settings', icon: <Settings className="icon" />, text: 'Settings' },
    { url: '/logs', icon: <ScrollText className="icon" />, text: 'Logs' },
    { url: '/statistics', icon: <BarChart3 className="icon" />, text: 'Statistics' },
    { url: '/documentations', icon: <BookMarked className="icon" />, text: 'Documentations' },
    { url: '/diagnostics', icon: <BriefcaseMedical className="icon" />, text: 'Diagnostics' },
];

const statusMenuItems = [
    { url: '/', icon: <Home className="icon" /> },
    { url: '/rescue', icon: <ArrowDownUp className="icon" /> },
];

const secondaryMenuItems = [
    { url: '/connect', icon: <Wifi className="icon" />, text: 'Connect with phone' },
    { url: '/contact-us', icon: <Phone className="icon" />, text: 'Contact us' },
    { url: '/logout', icon: <LogOut className="icon" />, text: 'Logout' },
];

const restartMenuItems = [
    { url: '/restart', icon: <SquarePower className="icon" />, text: 'Restart' },
];

const allNavLinks = [...primaryMenuItems, ...statusMenuItems, ...secondaryMenuItems, ...restartMenuItems];

const Sidebar = () => {
    const [expandSidebar, setExpandSidebar] = useState(true);

    const { updateTextSize } = useContext(TextSizeContext) || {};
    const { updateTextSpace } = useContext(TextSpaceContext) || {};
    const { updateBlackWhite } = useContext(BlackWhiteContext) || {};
    const { updateShowLink } = useContext(ShowLinkContext) || {};

    const [searchedValue, setSearchedValue] = useState(sessionStorage.getItem('searched'));
    const [pinnedLinks_, setPinnedLinks_] = useState([]);

    useEffect(() => {
        // Fetch pinned links from localStorage on component mount
        const storedPinnedLinks = localStorage.getItem('links');
        if (storedPinnedLinks) {
            const parsedPinnedLinks = JSON.parse(storedPinnedLinks);
            const matchedLinks = parsedPinnedLinks.map((linkText) => {
                return allNavLinks.find((link) => link.text === linkText);
            }).filter((link) => link); // filter out undefined values

            setPinnedLinks_(matchedLinks);
        }
    }, []);

    const textSizeStyle = {
        fontSize: `${updateTextSize * 16}px`,
        letterSpacing: `${updateTextSpace * 1}px`
    };

    const searchResult = searchedValue
        ? allNavLinks.filter(link => link.text && link.text.toLowerCase().startsWith(searchedValue.toLowerCase()))
        : [];

    const onPinLink = (linkText) => {
        let pinnedLinks = localStorage.getItem('links');
        pinnedLinks = pinnedLinks ? JSON.parse(pinnedLinks) : [];

        if (!pinnedLinks.includes(linkText)) {
            pinnedLinks.push(linkText);
            localStorage.setItem('links', JSON.stringify(pinnedLinks));
            setPinnedLinks_([...pinnedLinks_, allNavLinks.find((link) => link.text === linkText)]);
        }
    };

    const onUnPinLink = (linkText) => {
        let pinnedLinks = localStorage.getItem('links');
        pinnedLinks = pinnedLinks ? JSON.parse(pinnedLinks) : [];

        const updatedPinnedLinks = pinnedLinks.filter(link => link !== linkText);
        localStorage.setItem('links', JSON.stringify(updatedPinnedLinks));

        setPinnedLinks_(pinnedLinks_.filter(link => link.text !== linkText));
    };

    return (
        <div className='sidebar' style={{ width: expandSidebar ? '320px' : '75px', backgroundColor: updateBlackWhite ? '#000' : '#353a40' }}>
            <div className="top">
                {expandSidebar && (
                    <div className="logo">
                        <img src={logoImage} alt="logo" width={32} height={38} />
                        <img src={logoTextWhite} alt="logo" width={100} height={28} />
                    </div>
                )}
                <div className="toggle-icon" style={{ backgroundColor: updateBlackWhite ? '#fff' : '#85898c', color: updateBlackWhite ? '#000' : '#fff' }} onClick={() => setExpandSidebar(!expandSidebar)}>
                    {expandSidebar ? <ChevronsLeft className='icon' /> : <ChevronsRight className='icon' />}
                </div>
            </div>
            <div className="content">
                {expandSidebar && (
                    <div className="search">
                        <input type="text" style={textSizeStyle} value={searchedValue} placeholder='Search for menu' onChange={(e) => { setSearchedValue(e.target.value); sessionStorage.setItem('searched', e.target.value) }} />
                    </div>
                )}

                <h2 style={pinnedLinks_.length > 0 ? { display: 'block' } : { display: 'none' }}>Pinned Links</h2>

                {
                    pinnedLinks_.length > 0 &&
                    (
                        <div className="links">
                            {pinnedLinks_.map((item, index) => (
                                <div className='wrapper' key={index}>
                                    <NavLink className='link' to={item.url}>
                                        <span>{item.icon}</span>
                                        {expandSidebar && <span style={{ ...textSizeStyle, color: updateShowLink ? 'yellow' : '#fff', textDecoration: updateShowLink ? 'underline' : 'none' }}>{item.text}</span>}
                                    </NavLink>

                                    <div className='pin' style={expandSidebar ? { display: 'block' } : { display: 'none' }}><PinOff className='icon' onClick={() => onUnPinLink(item.text)} /></div>
                                </div>
                            ))}
                        </div>
                    )

                }

                <div style={pinnedLinks_.length > 0 ? { display: 'block' } : { display: 'none' }} className="seperator"></div>

                <h2 style={pinnedLinks_.length > 0 ? { display: 'block' } : { display: 'none' }}>Search Result</h2>

                {searchedValue ? (
                    <div className="links">
                        {searchResult.map((item, index) => (
                            <div className='wrapper' key={index}>
                                <NavLink className='link' to={item.url}>
                                    <span>{item.icon}</span>
                                    {expandSidebar && <span style={{ ...textSizeStyle, color: updateShowLink ? 'yellow' : '#fff', textDecoration: updateShowLink ? 'underline' : 'none' }}>{item.text}</span>}
                                </NavLink>

                                <div className='pin' style={expandSidebar ? { display: 'block' } : { display: 'none' }}><Pin className='icon' onClick={() => onPinLink(item.text)} /></div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <>
                        <div className="links">
                            {primaryMenuItems.map((item, index) => (
                                <div className="wrapper" key={index}>
                                    <NavLink className='link' to={item.url}>
                                        <span>{item.icon}</span>
                                        {expandSidebar && <span style={{ ...textSizeStyle, color: updateShowLink ? 'yellow' : '#fff', textDecoration: updateShowLink ? 'underline' : 'none' }}>{item.text}</span>}
                                    </NavLink>

                                    <div className='pin' style={expandSidebar ? { display: 'block' } : { display: 'none' }}><Pin className='icon' onClick={() => onPinLink(item.text)} /></div>
                                </div>
                            ))}
                        </div>

                        <div className="status" style={expandSidebar ? { flexDirection: 'row' } : { flexDirection: 'column', justifyContent: 'start', marginRight: '12px' }}>
                            {statusMenuItems.map((item, index) => (
                                <NavLink key={index} style={{ ...textSizeStyle, color: updateShowLink ? 'yellow' : '#fff', textDecoration: updateShowLink ? 'underline' : 'none' }} className='link' to={item.url}>{item.icon}</NavLink>
                            ))}
                        </div>

                        <div className="links">
                            {secondaryMenuItems.map((item, index) => (
                                <div className="wrapper" key={index}>
                                    <NavLink className='link' to={item.url}>
                                        <span>{item.icon}</span>
                                        {expandSidebar && <span style={{ ...textSizeStyle, color: updateShowLink ? 'yellow' : '#fff', textDecoration: updateShowLink ? 'underline' : 'none' }}>{item.text}</span>}
                                    </NavLink>

                                    <div className='pin' style={expandSidebar ? { display: 'block' } : { display: 'none' }}><Pin className='icon' onClick={() => onPinLink(item.text)} /></div>
                                </div>
                            ))}
                        </div>


                        <div className="links">
                            {restartMenuItems.map((item, index) => (
                                <div className="wrapper" key={index}>
                                    <NavLink className='link' to={item.url}>
                                        <span>{item.icon}</span>
                                        {expandSidebar && <span style={{ ...textSizeStyle, color: updateShowLink ? 'yellow' : '#fff', textDecoration: updateShowLink ? 'underline' : 'none' }}>{item.text}</span>}
                                    </NavLink>

                                    <div className='pin' style={expandSidebar ? { display: 'block' } : { display: 'none' }}><Pin className='icon' onClick={() => onPinLink(item.text)} /></div>
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>
            <div className="bottom"></div>
        </div >
    );
}

export default Sidebar;
