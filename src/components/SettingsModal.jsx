import { AArrowUp, CircleCheckBig, CircleX, Contrast, Link, ScanEye, WholeWord } from 'lucide-react';
import { useTextSize } from '../contexts/TextSizeContext';
import { useTextSpace } from '../contexts/TextSpaceContext';
import { useBlackWhite } from '../contexts/BlackWhiteContext';
import { useShowLink } from '../contexts/ShowLinkContext';
import { useState } from 'react';
import { Tooltip } from 'react-tooltip';

const SettingsModal = () => {
    const { updateTextSize, setUpdateTextSize } = useTextSize();
    const { updateTextSpace, setUpdateTextSpace } = useTextSpace();
    const { updateBlackWhite, setUpdateBlackWhite } = useBlackWhite();
    const { updateShowLink, setUpdateShowLink } = useShowLink();

    const [showSettingsModal, setShowSettingsModal] = useState(false);

    const onSetTextSize = () => {
        if (updateTextSize >= 1.4) {
            setUpdateTextSize(1);
        } else {
            setUpdateTextSize(updateTextSize + 0.2);
        }
    };

    const onSetTextSpace = () => {
        if (updateTextSpace >= 2.5) {
            setUpdateTextSpace(1);
        } else {
            setUpdateTextSpace(updateTextSpace + 0.5);
        }
    };

    const onSetBlackWhite = () => {
        setUpdateBlackWhite(!updateBlackWhite);
    };

    const onSetShowLink = () => {
        setUpdateShowLink(!updateShowLink);
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

export default SettingsModal