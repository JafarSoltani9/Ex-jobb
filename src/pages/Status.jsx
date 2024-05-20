import React, { useEffect, useState, useContext } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import listOverImage from '../assets/images/pages/image-1.jpg';
import { ChevronDown, ChevronUp, ChevronsDown, ChevronsUp, Circle, Info, Minus, Plus } from 'lucide-react';
import { Tooltip } from 'react-tooltip';
import SettingsModal from '../components/SettingsModal';
import { TextSizeContext } from '../contexts/TextSizeContext';
import { TextSpaceContext } from '../contexts/TextSpaceContext';
import { BlackWhiteContext } from '../contexts/BlackWhiteContext';
import { ShowLinkContext } from '../contexts/ShowLinkContext';

const Status = () => {
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
    const accordionTitleBGStyle = {
        backgroundColor: updateBlackWhite ? '#000' : 'rgba(133, 137, 140, 0.3)',
    };

    const accordionTitleStyle = {
        color: updateBlackWhite ? '#fff' : '#000',
    };

    const accordionIconStyle = {
        color: updateBlackWhite ? '#fff' : '#000',
        borderColor: updateBlackWhite ? '#fff' : '#000',
    };

    return (
        <div className='page-row'>
            <div className="sidebar-wrapper">
                <Sidebar />
            </div>

            <div className="content-wrapper">
                <div className="header-wrapper">
                    <Navbar title='Status'
                        updateTextSize={updateTextSize}
                        updateBlackWhite={updateBlackWhite}
                        updateShowLink={updateShowLink}
                        updateTextSpace={updateTextSpace}
                    />
                </div>
                <div className="main-content" style={{ backgroundColor: updateBlackWhite ? '#000' : '#fff' }}>
                    <div className="card">
                        <div className="col">
                            <div className="accordion">
                                <div className="title" style={accordionTitleBGStyle}>
                                    <h2 style={{ ...textSizeStyle, ...accordionTitleStyle }}>List overview</h2>
                                    {
                                        (expandAccordion.index1 === true) ?
                                            (
                                                <Minus style={accordionIconStyle} className='icon' onClick={() => onExpandAccordion('index1', !expandAccordion.index1)} />
                                            )
                                            :
                                            (
                                                <Plus style={accordionIconStyle} className='icon' onClick={() => onExpandAccordion('index1', !expandAccordion.index1)} />
                                            )
                                    }
                                </div>
                                <div className="description" style={(expandAccordion.index1 === true) ? { height: 'fit-content', display: 'block' } : { height: '0px', display: 'none' }}>
                                    <img src={listOverImage} alt="list overview" />
                                </div>
                            </div>

                            <div className="accordion">
                                <div className="title" style={accordionTitleBGStyle}>
                                    <Tooltip id='infoTooltip' place='top' />
                                    <h2 style={{ ...textSizeStyle, ...accordionTitleStyle }}>Move lift <Info size={18} data-tooltip-id='infoTooltip' data-tooltip-content='Lift movement control section' /></h2>
                                    {
                                        (expandAccordion.index2 === true) ?
                                            (
                                                <Minus style={accordionIconStyle} className='icon' onClick={() => onExpandAccordion('index2', !expandAccordion.index2)} />
                                            )
                                            :
                                            (
                                                <Plus style={accordionIconStyle} className='icon' onClick={() => onExpandAccordion('index2', !expandAccordion.index2)} />
                                            )
                                    }
                                </div>
                                <div className="description" style={(expandAccordion.index2 === true) ? { height: 'fit-content', display: 'block' } : { height: '0px', display: 'none' }}>
                                    <div className="move-buttons">
                                        <Tooltip id='toppestTooltip' place='top' />
                                        <button style={accordionTitleBGStyle} data-tooltip-id='toppestTooltip' data-tooltip-content='Move to the toppest floor'><ChevronsUp /></button>

                                        <Tooltip id='upTooltip' place='top' />
                                        <button style={accordionTitleBGStyle} data-tooltip-id='upTooltip' data-tooltip-content='Move to the up floor'><ChevronUp /></button>

                                        <Tooltip id='downTooltip' place='top' />
                                        <button style={accordionTitleBGStyle} data-tooltip-id='downTooltip' data-tooltip-content='Move to the down floor'><ChevronDown /></button>

                                        <Tooltip id='firstTooltip' place='top' />
                                        <button style={accordionTitleBGStyle} data-tooltip-id='firstTooltip' data-tooltip-content='Move to the first floor'><ChevronsDown /></button>
                                    </div>

                                    <div className="select-floor">
                                        <label style={{ color: updateBlackWhite ? '#000' : '#85898c' }} htmlFor="floorNumber">Floor number</label>
                                        <div className="wrapper">
                                            <input name='floorNumber' type="number" placeholder='Enter floor number' />
                                            <button style={accordionTitleBGStyle}>Go</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion">
                                <div className="title" style={accordionTitleBGStyle}>
                                    <h2 style={{ ...textSizeStyle, ...accordionTitleStyle }}>System status information</h2>
                                    {
                                        (expandAccordion.index3 === true) ?
                                            (
                                                <Minus style={accordionIconStyle} className='icon' onClick={() => onExpandAccordion('index3', !expandAccordion.index3)} />
                                            )
                                            :
                                            (
                                                <Plus style={accordionIconStyle} className='icon' onClick={() => onExpandAccordion('index3', !expandAccordion.index3)} />
                                            )
                                    }
                                </div>
                                <div className="description" style={(expandAccordion.index3 === true) ? { height: 'fit-content', display: 'block' } : { height: '0px', display: 'none' }}>
                                    <p>System status information here...</p>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="accordion">
                                <div className="title" style={accordionTitleBGStyle}>
                                    <h2 style={{ ...textSizeStyle, ...accordionTitleStyle }}>Current status</h2>
                                    {
                                        (expandAccordion.index4 === true) ?
                                            (
                                                <Minus style={accordionIconStyle} className='icon' onClick={() => onExpandAccordion('index4', !expandAccordion.index4)} />
                                            )
                                            :
                                            (
                                                <Plus style={accordionIconStyle} className='icon' onClick={() => onExpandAccordion('index4', !expandAccordion.index4)} />
                                            )
                                    }
                                </div>
                                <div className="description" style={(expandAccordion.index4) ? { height: 'fit-content', display: 'block' } : { height: '0px', display: 'none' }}>
                                    <ul>
                                        <li>
                                            <span className='left' style={textSizeStyle}>Position</span>
                                            <span className='right' style={textSizeStyle}>Floor 1:0 mm</span>
                                        </li>

                                        <li>
                                            <span className='left' style={textSizeStyle}>Preasure</span>
                                            <span className='right' style={textSizeStyle}>23.50 bar</span>
                                        </li>

                                        <li>
                                            <span className='left' style={textSizeStyle}>Velocity</span>
                                            <span className='right' style={textSizeStyle}>0.00 m/s</span>
                                        </li>

                                        <li>
                                            <span className='left' style={textSizeStyle}>Oil tempreture</span>
                                            <span className='right' style={textSizeStyle}>21.0 C</span>
                                        </li>

                                        <li>
                                            <span className='left' style={textSizeStyle}>Machine room tempreture</span>
                                            <span className='right' style={textSizeStyle}>21.0 C</span>
                                        </li>

                                        <li>
                                            <span className='left' style={textSizeStyle}>CPU tempreture</span>
                                            <span className='right' style={textSizeStyle}>45.0 C</span>
                                        </li>

                                        <li>
                                            <span className='left' style={textSizeStyle}>Fan Speed</span>
                                            <span className='right' style={textSizeStyle}>20%</span>
                                        </li>

                                        <li>
                                            <span className='left' style={textSizeStyle}>Next destination</span>
                                            <span className='right' style={textSizeStyle}>-</span>
                                        </li>

                                        <li>
                                            <span className='left' style={textSizeStyle}>PSU</span>
                                            <span className='right' style={textSizeStyle}>Normal</span>
                                        </li>

                                        <li>
                                            <span className='left' style={textSizeStyle}>Drive unit</span>
                                            <span className='right' style={textSizeStyle}>Joile</span>
                                        </li>

                                        <li>
                                            <span className='left' style={textSizeStyle}>Mode operation</span>
                                            <span className='right' style={textSizeStyle}>Normal</span>
                                        </li>

                                        <li>
                                            <span className='left' style={textSizeStyle}>Inspection handle</span>
                                            <span className='right' style={textSizeStyle}>Off</span>
                                        </li>

                                        <div className="divider"></div>

                                        <li>
                                            <span className='left' style={textSizeStyle}>Door zone</span>
                                            <span className='right' style={textSizeStyle}><Circle size={16} className='icon empty-icon' /></span>
                                        </li>

                                        <li>
                                            <span className='left' style={textSizeStyle}>Safety circuit</span>
                                            <span className='right' style={textSizeStyle}><Circle size={16} className='icon filled-icon' /></span>
                                        </li>

                                        <li>
                                            <span className='left' style={textSizeStyle}>Light Curtain side A</span>
                                            <span className='right' style={textSizeStyle}><Circle size={16} className='icon filled-icon' /></span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="accordion">
                                <div className="title" style={accordionTitleBGStyle}>
                                    <h2 style={{ ...textSizeStyle, ...accordionTitleStyle }}>Site information</h2>
                                    {
                                        (expandAccordion.index5 === true) ?
                                            (
                                                <Minus style={accordionIconStyle} className='icon' onClick={() => onExpandAccordion('index5', !expandAccordion.index5)} />
                                            )
                                            :
                                            (
                                                <Plus style={accordionIconStyle} className='icon' onClick={() => onExpandAccordion('index5', !expandAccordion.index5)} />
                                            )
                                    }
                                </div>
                                <div className="description" style={(expandAccordion.index5 === true) ? { height: 'fit-content', display: 'block' } : { height: '0px', display: 'none' }}>
                                    <p>Site information here...</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


            <SettingsModal />
        </div>
    )
}

export default Status