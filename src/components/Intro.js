import React, { Component } from 'react';
import { IntroComponent, Arrow, Description, Background } from '../styles/NavBar';
import Projects from './Projects';

class Intro extends Component {
    render() {
        return (
            <Background>
            <Arrow><a href="#about"><i className="material-icons arrow" id="white">keyboard_arrow_down</i></a></Arrow>
            <IntroComponent>
            <div id="about">- Get to know me -</div>
            </IntroComponent>
            <Description>
            <div>
                <p>I'm a full stack web developer based out of Atlanta, Ga. I am from Venezuela and lived in Rome, Italy for several years. I love exploring the world, experiencing different cultures, and learning different languages.</p>
                {/* <p>How does all this fit into web development?</p> */}
                <p>My international & business experience allows me to understand users from various cultures, backgrounds, and life experiences. I learned the tools of the trade at General Assembly's Web Development Immersive Program. What I learned there, combined with my unique international experience, allows me to collaborate with just about anyone and create attractive, user-focused designs and solutions.</p>
            </div>
            </Description>
            </Background>
        );
    }
}

export default Intro;