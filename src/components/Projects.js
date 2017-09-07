import React, { Component } from 'react';
import { Arrow, IntroComponent, Color } from '../styles/NavBar';
import { Hover } from '../styles/Projects';
import { ProjectsComponent } from '../styles/Projects';


class Projects extends Component {
    constructor() {
        super()
        this.state = {
            backgroundColorForOne: '',
            backgroundColorForTwo: 'grey',
            backgroundColorForThree: 'grey',
            backgroundColorForFour: 'grey'
        };
    }

    render() {
        
        return (
        
            <div>
                <Arrow><a href="#portfolio"><i className="material-icons arrow">keyboard_arrow_down</i></a></Arrow>
                <IntroComponent>
                <div id="portfolio" className="know">- My Portfolio -</div>
                </IntroComponent>
                <ProjectsComponent>
                    <div className="container">
                        <a href="http://barnwell-hangman.bitballoon.com/">
                            <div className="item" id="hangman"></div>
                        </a>
                        <a href="https://beer-cult.herokuapp.com/">
                            <div className="item" id="beer"></div>
                        </a>
                    </div>
                    <div className="container">
                        <a href="https://adventure-planner.herokuapp.com/">
                            <div className="item" id="adventure">adventure planner</div>
                        </a>
                        <a href="https://wayfare.herokuapp.com">
                            <div className="item" id="wayfare"></div>
                        </a>
                    </div> 
                </ProjectsComponent>
            </div>
        );
    }
}

export default Projects;