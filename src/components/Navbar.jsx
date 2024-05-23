import { Globe, Phone, Settings, Wifi } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({ title, updateTextSize, updateBlackWhite, updateShowLink, updateTextSpace }) => {

    const headerStyle = {
        backgroundColor: updateBlackWhite ? '#000' : '#85898c',
        borderBottomWidth: updateBlackWhite ? '2px' : 'none',
        borderBottomStyle: updateBlackWhite ? 'solid' : 'none',
        borderBottomColor: updateBlackWhite ? '#fff' : 'none',
    };


    const linkStyle = {
        color: updateShowLink ? 'yellow' : '#fff',
        textDecoration: updateShowLink ? 'underline' : 'none'
    };

    return (
        <nav className='header' style={headerStyle}>
            <div className="left">
                <h1>{title}</h1>
            </div>
            <div className="right">
                <Link to={'/connect-with-phone'}><Wifi  style={linkStyle} size={18} className='icon' /></Link>
                <Link to={'/settings'}><Settings  style={linkStyle} size={18} className='icon' /></Link>
                <span>Service(activated until 09:37)</span>
                <span>
                    <Globe size={18} className='icon' />
                    <select name="language">
                        <option value="En">En</option>
                        <option value="Fr">Fr</option>
                    </select>
                </span>
                <Link to={'/contact-us'}><Phone style={linkStyle} size={18} className='icon' /></Link>
                <span>09:34</span>
            </div>
        </nav>
    )
}

export default Navbar