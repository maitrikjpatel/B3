import React from 'react'

import Footer from './footer'
import avatar from '../assets/images/avatar.jpg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="/" className="image avatar"><img src={avatar} alt="logo" /></a>
                    <h1>Bake Batter Butter</h1>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
