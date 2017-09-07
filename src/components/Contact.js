import React, { Component } from 'react';
import { IntroComponent, Arrow, Email, ContactComponent, Github, Background } from '../styles/NavBar';


class Contact extends Component {
    render() {
        return (
            <Background>
                <Arrow><a href="#portfolio"><i id="white" className="material-icons arrow">keyboard_arrow_down</i></a></Arrow>
                <IntroComponent>
                    <div id="contact" className="know">- Let's Chat! -</div>
                </IntroComponent>
                <ContactComponent>
                    <Email><a href="mailto:susanabarnwell@gmail.com"><i className="material-icons email">email</i></a></Email>
                    <Github><a href="https://github.com/sbarnwell88"><img className="email" src="http://i.imgur.com/9kalJy2.png?1" width="60" height="60"/></a></Github>
                    <a href="https://www.linkedin.com/in/susana-barnwell/"><img src="http://i.imgur.com/vgLDwR5.png" width="60" height="60"/></a>
                </ContactComponent>
            </Background>
        );
    }
}

export default Contact;