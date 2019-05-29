import React from 'react'
import avatar from '../../assets/images/avatar.jpg'
import { Link } from 'gatsby'

import Footer from '../footer/index'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <Link to="/" className="image avatar"><img src={avatar} alt="logo" /></Link>
                    <li><Link to="/">Bake Batter Butter</Link></li>
                    <li><Link to="/about/" >About</Link></li>
                    <li><Link to="/contact/">Contact Us</Link></li>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
