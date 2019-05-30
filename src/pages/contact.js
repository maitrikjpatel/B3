import React from 'react'
import Layout from '../components/layout'

class ContactPate extends React.Component {
    state = {
      name: "",
      email: "",
      message: "",
    }
  
    handleInputChange = event => {
      const target = event.target
      const value = target.value
      const name = target.name
      const email = target.email
      const message = target.message
  
      this.setState({
        [name]: value,
        [email]: value,
        [message]: value,
      })
    }
  
    handleSubmit = event => {
      event.preventDefault()
      alert(`Welcome ${this.state.name} , ${this.state.email} and, ${this.state.message} !`)
    }
  
    render() {
      return (
        <Layout>
            <div id="main">
                <h1>Get In Touch</h1>
                <div className="row">
                    <div className="12u">
                        <ul className="labeled-icons">
                            <li>
                                <h3 className="icon fa-mobile"><span className="label">Phone</span></h3>
                                +1-323-401-8270
                            </li>
                            <li>
                                <h3 className="icon fa-envelope-o"><span className="label">Email</span></h3>
                                <a href="mailto:bakebatterbutter@gmail.com?subject=#LetsBakeCake&body=Let's bake memorable cake together.">bakebatterbutter@gmail.com</a>
                            </li>
                        </ul>
                        <hr/>
                        <form 
                            name="contact"
                            method="post" 
                            action="#"
                            data-netlify="true"
                            onSubmit={this.handleSubmit} 
                            data-netlify-honeypot="bot-field">
                                <p>Contact To Start Your Custom Order</p>
                                <div className="row uniform 50%">
                                    <div className="6u 12u$(xsmall)">
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            placeholder="Name"
                                            value={this.state.name}
                                            onChange={this.handleInputChange}
                                        />
                                    </div>
                                    <div className="6u 12u$(xsmall)">
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            placeholder="Email"
                                            value={this.state.email}
                                            onChange={this.handleInputChange}
                                        />
                                    </div>
                                    <div className="12u">
                                        <textarea 
                                            name="message" 
                                            id="message" 
                                            placeholder="Message" 
                                            value={this.state.message}
                                            onChange={this.handleInputChange}
                                            rows="4">
                                        </textarea>
                                    </div>
                                    <ul className="actions">
                                        <li><input type="submit" value="Send Message" /></li>
                                    </ul>
                                </div>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
      )
    }
}

export default ContactPate
