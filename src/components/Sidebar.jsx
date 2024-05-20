import React, { useContext, useState } from 'react'
import logoImage from '../assets/images/logo/logo-image.png'
import logoTextWhite from '../assets/images/logo/logo-text-white.png'
import { ArrowDownUp, BarChart3, BookMarked, BriefcaseBusiness, BriefcaseMedical, ChevronsLeft, ChevronsRight, ClipboardList, FireExtinguisher, Home, LogOut, Phone, ScrollText, Settings, SquarePower, Wifi } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { TextSizeContext } from '../contexts/TextSizeContext';
import { TextSpaceContext } from '../contexts/TextSpaceContext';
import { BlackWhiteContext } from '../contexts/BlackWhiteContext';
import { ShowLinkContext } from '../contexts/ShowLinkContext';

const primaryMenuItems = [
    {
        url: '/',
        icon: <Home className="icon" />,
        text: 'Home'
    },
    {
        url: '/rescue',
        icon: <FireExtinguisher className="icon" />,
        text: 'Rescue'
    },
    {
        url: '/operation',
        icon: <BriefcaseBusiness className="icon" />,
        text: 'Operation'
    },
    {
        url: '/commissioning',
        icon: <ClipboardList className="icon" />,
        text: 'Commissioning'
    },
    {
        url: '/settings',
        icon: <Settings className="icon" />,
        text: 'Settings'
    },
    {
        url: '/logs',
        icon: <ScrollText className="icon" />,
        text: 'Logs'
    },
    {
        url: '/statistics',
        icon: <BarChart3 className="icon" />,
        text: 'Statistics'
    },
    {
        url: '/documentations',
        icon: <BookMarked className="icon" />,
        text: 'Documentations'
    },
    {
        url: '/diagnostics',
        icon: <BriefcaseMedical className="icon" />,
        text: 'Diagnostics'
    },
];

const SecondaryMenuItems = [
    {
        url: '/connect',
        icon: <Wifi className="icon" />,
        text: 'Connect with phone'
    },
    {
        url: '/contact-us',
        icon: <Phone className="icon" />,
        text: 'Contact us'
    },
    {
        url: '/logout',
        icon: <LogOut className="icon" />,
        text: 'Logout'
    },
];

const Sidebar = () => {
    const [expandSidebar, setExpandSidebar] = useState(true);

    const { updateTextSize } = useContext(TextSizeContext);
    const { updateTextSpace } = useContext(TextSpaceContext);
    const { updateBlackWhite } = useContext(BlackWhiteContext);
    const { updateShowLink } = useContext(ShowLinkContext);

    const textSizeStyle = {
        fontSize: `${updateTextSize * 16}px`,
        letterSpacing: `${updateTextSpace * 1}px`
    };

    return (
        <div className='sidebar' style={{ width: expandSidebar ? '260px' : '75px', backgroundColor: updateBlackWhite ? '#000' : '#353a40', }}>
            <div className="top">
                {
                    expandSidebar ?
                        (
                            <div className="logo">
                                <img src={logoImage} alt="logo" width={32} height={38} />
                                <img src={logoTextWhite} alt="logo" width={100} height={28} />

                            </div>
                        )
                        :
                        null
                }
                <div className="toggle-icon" style={{backgroundColor: updateBlackWhite ? '#fff' : '#85898c', color: updateBlackWhite ? '#000' : '#fff'}} onClick={() => setExpandSidebar(!expandSidebar)}>
                    {
                        expandSidebar ?
                            (
                                <ChevronsLeft className='icon' />
                            )
                            :
                            (
                                <ChevronsRight className='icon' />
                            )
                    }

                </div>
            </div>
            <div className="content">
                {
                    expandSidebar ?
                        (
                            <div className="search">
                                <input type="text" style={textSizeStyle} placeholder='Search for menu' />
                            </div>
                        )
                        :
                        <div style={{ marginBottom: '12px' }}></div>
                }

                <div className="links">
                    {
                        primaryMenuItems.map((item, index) => (
                            <NavLink key={index} className='link' to={item.url}>{item.icon} {expandSidebar ? (<span style={{ ...textSizeStyle, color: updateShowLink ? 'yellow' : '#fff', textDecoration: updateShowLink ? 'underline' : 'none' }}>{item.text}</span>) : null}</NavLink>
                        ))
                    }
                </div>

                <div className='status'>
                    <Home className='icon' />
                    <ArrowDownUp className='icon' />
                </div>

                <div className="links secondary-link">
                    {
                        SecondaryMenuItems.map((item, index) => (
                            <NavLink key={index} className='link' to={item.url}>{item.icon} {expandSidebar ? (<span style={{ ...textSizeStyle, color: updateShowLink ? 'yellow' : '#fff', textDecoration: updateShowLink ? 'underline' : 'none' }}>{item.text}</span>) : null}</NavLink>
                        ))
                    }
                </div>

                <div className="links reset-link">
                    <NavLink className='link' to={'/restart'}><SquarePower className='icon' /> {expandSidebar ? (<span style={{ ...textSizeStyle, color: updateShowLink ? 'yellow' : '#fff', textDecoration: updateShowLink ? 'underline' : 'none' }}>Restart</span>) : null}</NavLink>
                </div>
            </div>
            <div className="bottom"></div>
        </div>
    )
}

export default Sidebar