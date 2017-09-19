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
                            <div className="row-item"><a href="http://barnwell-hangman.bitballoon.com/">
                                <div className="item" id="hangman"></div>
                                </a>
                                <div className="text">Classic hangman game that allows users to guess a word. Users have 7 tries to guess the correct word. The drawing of the hangman appears for every incorrect guess. I used Javascript and JQuery for this game.</div>
                            </div>
                            <div className="row-item"><a href="https://beer-cult.herokuapp.com/">
                                <div className="item" id="beer"></div>
                                </a>
                                <div className="text">Beer Cult is app that allows users to keep track of their favorite classic and craft beers. Users can add breweries, beers, and create an account. I used Nodejs and Express to build this app.</div>
                            </div>
                    </div>
                    <div className="container">
                        <div className="row-item">
                            <a href="https://adventure-planner.herokuapp.com/">
                            <div className="item" id="adventure">adventure planner</div>
                            </a>
                            <div className="text">Adventure Planner is an app that allows users to save & keep track of their travel plans. This is a MERN Stack app.</div>
                        </div>
                        <div className="row-item">
                            <a href="https://wayfare.herokuapp.com">
                            <div className="item" id="wayfare"></div>
                            </a>
                            <div className="text">Wayfare is a Ruby on Rails app that allows users to see other user's comments and recommendations when traveling. Users are also able to create, edit, and delete their own comments.</div>
                        </div>
                    </div> 
                </ProjectsComponent>
            </div>
        );
    }
}

export default Projects;