import React from 'react'
import avatar from '../../assets/images/b3logo.png'
import { Link } from 'gatsby'

import Footer from '../footer/index'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <li><Link to="/" className="image avatar"><img src={avatar} alt="logo" /></Link></li>
                    <li><Link to="/gallery/">GALLERY</Link></li>
                    <li><Link to="/about/">ABOUT</Link></li>
                    <li><Link to="/contact/">CONTACT US</Link></li>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
