import React, { useState, useEffect } from 'react';
import { AArrowUp, CircleCheckBig, CircleX, Contrast, Link, ScanEye, WholeWord } from 'lucide-react';
import { useTextSize } from '../contexts/TextSizeContext';
import { useTextSpace } from '../contexts/TextSpaceContext';
import { useBlackWhite } from '../contexts/BlackWhiteContext';
import { useShowLink } from '../contexts/ShowLinkContext';
import { Tooltip } from 'react-tooltip';

const SettingsModal = () => {
    const { updateTextSize, setUpdateTextSize } = useTextSize();
    const { updateTextSpace, setUpdateTextSpace } = useTextSpace();
    const { updateBlackWhite, setUpdateBlackWhite } = useBlackWhite();
    const { updateShowLink, setUpdateShowLink } = useShowLink();

    const [showSettingsModal, setShowSettingsModal] = useState(false);

    useEffect(() => {
        const savedSettings = localStorage.getItem('settings');
        if (savedSettings) {
            const { textSize, textSpace, blackWhite, showLink } = JSON.parse(savedSettings);
            setUpdateTextSize(textSize);
            setUpdateTextSpace(textSpace);
            setUpdateBlackWhite(blackWhite);
            setUpdateShowLink(showLink);

        }
    }, []);

    const onSetTextSize = () => {
        if (updateTextSize >= 1.4) {
            setUpdateTextSize(1);

            const settings = {
                textSize: 1,
                textSpace: updateTextSpace,
                blackWhite: updateBlackWhite,
                showLink: updateShowLink
            };

            localStorage.setItem('settings', JSON.stringify(settings));
        } else {
            const settings = {
                textSize: updateTextSize + 0.2,
                textSpace: updateTextSpace,
                blackWhite: updateBlackWhite,
                showLink: updateShowLink
            };

            localStorage.setItem('settings', JSON.stringify(settings));

            setUpdateTextSize(updateTextSize + 0.2);
        }


    };

    const onSetTextSpace = () => {
        if (updateTextSpace >= 2.5) {
            setUpdateTextSpace(1);

            const settings = {
                textSize: updateTextSize,
                textSpace: 1,
                blackWhite: updateBlackWhite,
                showLink: updateShowLink
            };

            localStorage.setItem('settings', JSON.stringify(settings));
        } else {
            const settings = {
                textSize: updateTextSize,
                textSpace: updateTextSpace + 0.5,
                blackWhite: updateBlackWhite,
                showLink: updateShowLink
            };

            localStorage.setItem('settings', JSON.stringify(settings));

            setUpdateTextSpace(updateTextSpace + 0.5);
        }
    };

    const onSetBlackWhite = () => {
        setUpdateBlackWhite(!updateBlackWhite);

        const settings = {
            textSize: updateTextSize,
            textSpace: updateTextSpace,
            blackWhite: !updateBlackWhite,
            showLink: updateShowLink
        };

        localStorage.setItem('settings', JSON.stringify(settings));
    };

    const onSetShowLink = () => {
        setUpdateShowLink(!updateShowLink);

        const settings = {
            textSize: updateTextSize,
            textSpace: updateTextSpace,
            blackWhite: updateBlackWhite,
            showLink: !updateShowLink
        };

        localStorage.setItem('settings', JSON.stringify(settings));
    };

    return (
        <>
            {
                showSettingsModal === false ?
                    (
                        <div className='settings-fab' data-tooltip-id='setttingsTooltip' data-tooltip-content='Accessibility Settings' onClick={() => setShowSettingsModal(true)}>
                            <Tooltip id='setttingsTooltip' place='left' />
                            <ScanEye size={24} />
                        </div>
                    )
                    :
                    (
                        <div className='settings-modal'>
                            <CircleX className='close-icon' onClick={() => setShowSettingsModal(false)} />

                            <h2>Accessibility Settings</h2>
                            <div className="row">
                                <div className="item" onClick={onSetTextSize}>
                                    <div className="top">
                                        {
                                            updateTextSize > 1 ?
                                                (
                                                    <div className="status"><CircleCheckBig size={16} className='icon' /></div>
                                                )
                                                :
                                                (
                                                    null
                                                )
                                        }
                                    </div>

                                    <div className="bottom">
                                        <div className="icon"><AArrowUp size={42} className='icon' /></div>
                                        <div className="text">Bigger Text</div>
                                    </div>
                                </div>

                                <div className="item" onClick={onSetTextSpace}>
                                    <div className="top">
                                        {
                                            updateTextSpace > 1 ?
                                                (
                                                    <div className="status"><CircleCheckBig size={16} className='icon' /></div>
                                                )
                                                :
                                                (
                                                    null
                                                )
                                        }
                                    </div>

                                    <div className="bottom">
                                        <div className="icon"><WholeWord size={42} className='icon' /></div>
                                        <div className="text">Text Space</div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="item" onClick={onSetShowLink}>
                                    <div className="top">
                                        {
                                            updateShowLink ?
                                                (
                                                    <div className="status"><CircleCheckBig size={16} className='icon' /></div>
                                                )
                                                :
                                                (
                                                    null
                                                )
                                        }
                                    </div>

                                    <div className="bottom">
                                        <div className="icon"><Link size={42} className='icon' /></div>
                                        <div className="text">Show Links</div>
                                    </div>
                                </div>

                                <div className="item" onClick={onSetBlackWhite}>
                                    <div className="top">
                                        {
                                            updateBlackWhite ?
                                                (
                                                    <div className="status"><CircleCheckBig size={16} className='icon' /></div>
                                                )
                                                :
                                                (
                                                    null
                                                )
                                        }
                                    </div>

                                    <div className="bottom">
                                        <div className="icon"><Contrast size={42} className='icon' /></div>
                                        <div className="text">Black & White</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
            }
        </>
    )
}

export default SettingsModal;
