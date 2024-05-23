import React, { useEffect, useState, useContext } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import listOverImage from '../assets/images/pages/image-1.jpg';
import { ArrowDownUp, ChevronsRight, DoorClosed, FileBarChart, PanelsLeftBottom, ShipWheel, Terminal, Thermometer, Wrench } from 'lucide-react';
import SettingsModal from '../components/SettingsModal';
import { TextSizeContext } from '../contexts/TextSizeContext';
import { TextSpaceContext } from '../contexts/TextSpaceContext';
import { BlackWhiteContext } from '../contexts/BlackWhiteContext';
import { ShowLinkContext } from '../contexts/ShowLinkContext';
import { NavLink } from 'react-router-dom';

const links = [
    { url: '/control-system', icon: <Wrench />, text: 'Control System' },
    { url: '/drive', icon: <ChevronsRight />, text: 'Drive' },
    { url: '/sensors', icon: <Thermometer />, text: 'Sensors' },
    { url: '/panels', icon: <PanelsLeftBottom />, text: 'Panels' },
    { url: '/doors', icon: <DoorClosed />, text: 'Doors' },
    { url: '/application', icon: <ShipWheel />, text: 'Application' },
    { url: '/io', icon: <ArrowDownUp />, text: 'I/O' },
    { url: '/advanced', icon: <FileBarChart />, text: 'Advanced' },
    { url: '/virtual-terminal', icon: <Terminal />, text: 'Virtual Terminal' },
];

const Settings = () => {
    const [expandAccordion, setExpandAccordion] = useState({ index1: false, index2: false, index3: false, index4: false, index5: false });

    const { updateTextSize } = useContext(TextSizeContext);
    const { updateTextSpace } = useContext(TextSpaceContext);
    const { updateBlackWhite } = useContext(BlackWhiteContext);
    const { updateShowLink } = useContext(ShowLinkContext);

    const onExpandAccordion = (index, status) => {
        setExpandAccordion(prevState => ({
            ...prevState,
            [index]: status
        }));
    }

    const textSizeStyle = {
        fontSize: `${updateTextSize * 16}px`,
        letterSpacing: `${updateTextSpace * 1}px`
    };

    return (
        <div className='page-row'>
            <div className="sidebar-wrapper">
                <Sidebar />
            </div>

            <div className="content-wrapper">
                <div className="header-wrapper">
                    <Navbar title='Settings'
                        updateTextSize={updateTextSize}
                        updateBlackWhite={updateBlackWhite}
                        updateShowLink={updateShowLink}
                        updateTextSpace={updateTextSpace}
                    />
                </div>
                <div className="main-content setings" style={{ backgroundColor: updateBlackWhite ? '#000' : '#595959' }}>
                    <div className="wrapper">
                        {
                            links.map((item, index) => (
                                <NavLink to={item.url} className="nav-card" style={{ backgroundColor: updateBlackWhite ? '#000' : '#353a40' }} key={index}>
                                    <div className="icon">{item.icon}</div>
                                    <div className="text" style={{ ...textSizeStyle, color: updateShowLink ? 'yellow' : '#fff', textDecoration: updateShowLink ? 'underline' : 'none' }}>{item.text}</div>
                                </NavLink>
                            ))
                        }
                    </div>
                </div>
            </div>


            <SettingsModal />
        </div>
    )
}

export default Settings