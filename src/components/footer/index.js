import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <div id="footer">
                <div className="inner">
                    <p>Follow us @</p>
                    <ul className="icons">
                        <li><a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/bakebatterbutter/" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
                        <li><a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/bakebatterbutter" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
                        <li><a target="_blank" rel="noopener noreferrer" href="https://www.pinterest.com/bakebatterbutter/" className="icon fa-pinterest"><span className="label">Pinterest</span></a></li>
                        <li><a target="_blank" rel="noopener noreferrer" href="mailto:bakebatterbutter@gmail.com?subject=#LetsBakeCake&body=Let's bake memorable cake together." className="icon fa-envelope-o"><span className="label">Email</span></a></li>
                    </ul>
                    <ul className="copyright">
                        <li>&copy; Bake Batter Butter</li>
                        <li>Site baked by: <a target="_blank" rel="noopener noreferrer" href="https://maitrikpatel.com">Maitrik Patel</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Footer
