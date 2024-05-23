import React, { useEffect, useState, useContext } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import diagnosticImage from '../assets/images/pages/diagnostic-image.jpg';
import { Info, Minus, Plus, X } from 'lucide-react';
import { Tooltip } from 'react-tooltip';
import SettingsModal from '../components/SettingsModal';
import { TextSizeContext } from '../contexts/TextSizeContext';
import { TextSpaceContext } from '../contexts/TextSpaceContext';
import { BlackWhiteContext } from '../contexts/BlackWhiteContext';
import { ShowLinkContext } from '../contexts/ShowLinkContext';

const Diagnostics = () => {
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
                    <Navbar title='Diagnostics'
                        updateTextSize={updateTextSize}
                        updateBlackWhite={updateBlackWhite}
                        updateShowLink={updateShowLink}
                        updateTextSpace={updateTextSpace}
                    />
                </div>
                <div className="main-content diagnostics" style={{ backgroundColor: updateBlackWhite ? '#000' : '#595959' }}>
                    <div className="card" style={{ backgroundColor: '#f7f7f7' }}>
                        <div className="col">
                            <div className="accordion">
                                <div className="title" style={accordionTitleBGStyle}>
                                    <Tooltip id='infoTooltip' place='top' />
                                    <h2 style={{ ...textSizeStyle, ...accordionTitleStyle }}>Move lift <Info size={18} data-tooltip-id='infoTooltip' data-tooltip-content='Lift movement control section' /></h2>
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
                                    <p style={{...textSizeStyle}}>Move lift content here...</p>
                                </div>
                            </div>

                            <div className="accordion">
                                <div className="title" style={accordionTitleBGStyle}>
                                    <h2 style={{ ...textSizeStyle, ...accordionTitleStyle }}>Functions</h2>
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
                                    <p style={{...textSizeStyle}}>Function content here...</p>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="accordion">
                                <div className="title" style={accordionTitleBGStyle}>
                                    <h2 style={{ ...textSizeStyle, ...accordionTitleStyle }}>Manual Virtual Input</h2>
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
                                    <p style={{...textSizeStyle}}>Manual Virtual Input content here...</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card-expanded">
                        <div className="toggled-accordion">
                            <div className="header">
                                <div className="div">
                                    <select name="safety" style={{...textSizeStyle}}>
                                        <option value="Safety circuit">Safety circuit</option>
                                        <option value="Off circuits">Off circuits</option>
                                        <option value="On circuits">On circuits</option>
                                    </select>
                                </div>

                                <div><X className='icon' /></div>
                            </div>
                            <div className="content">
                                <img src={diagnosticImage} alt="diagnostic image" />
                            </div>
                        </div>


                        <button style={{...textSizeStyle}}>Add</button>
                    </div>
                </div>
            </div>


            <SettingsModal />
        </div>
    )
}

export default Diagnostics