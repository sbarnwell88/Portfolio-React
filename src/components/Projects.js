import React, { Component } from 'react';
import { Arrow, IntroComponent, Color } from '../styles/NavBar';
import { Hover } from '../styles/Projects';
import { ProjectsComponent } from '../styles/Projects';
import Coverflow from 'react-coverflow';
import {StyleRoot} from 'radium';


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
                    <StyleRoot>
                        <Coverflow
                            displayQuantityOfSide={2}
                            navigation={true}
                            enableHeading={true}
                            media={{
                            '@media (max-width: 900px)': {
                                width: '600px',
                                height: '300px'
                            },
                            '@media (min-width: 900px)': {
                                width: '960px',
                                height: '600px'
                            }
                            }} >
                            <div className='item'><a href="http://barnwell-hangman.bitballoon.com/"><img src="https://i.imgur.com/NpYc2ge.png?2" width='200' height='200' />Classic hangman game that allows users to guess a word. Users have 7 tries to guess the correct word. The drawing of the hangman appears for every incorrect guess. I used Javascript and JQuery for this game.</a></div>
                            <a href="https://beer-cult.herokuapp.com/"><img src="https://i.imgur.com/00Pw3iw.jpg?1" width='300' height='300' /></a>
                            <a href="https://adventure-planner.herokuapp.com/"><img src="https://i.imgur.com/oyTNDhk.jpg?1" width='300' height='300' /></a>
                            <a href="https://wayfare.herokuapp.com"><img src="https://i.imgur.com/OyhlvhZ.jpg" width='300' height='300' /></a>
                        </Coverflow>
                    </StyleRoot>
                    {/* <div className="container">
                            <div className="row-item"><a href="http://barnwell-hangman.bitballoon.com/">
                                <div className="item" id="hangman"></div>
                                </a>
                                <div>Classic hangman game that allows users to guess a word. Users have 7 tries to guess the correct word. The drawing of the hangman appears for every incorrect guess. I used Javascript and JQuery for this game.</div>
                            </div>
                            <div className="row-item"><a href="https://beer-cult.herokuapp.com/">
                                <div className="item" id="beer"></div>
                                </a>
                                <div>Beer Cult is app that allows users to keep track of their favorite classic and craft beers. Users can add breweries, beers, and create an account. I used Nodejs and Express to build this app.</div>
                            </div>
                    </div> */}
                    {/* <div className="container">
                        <div className="row-item">
                            <a href="https://adventure-planner.herokuapp.com/">
                            <div className="item" id="adventure">adventure planner</div>
                            </a>
                            <div>Adventure Planner is an app that allows users to save & keep track of their travel plans. This is a MERN Stack app.</div>
                        </div>
                        <div className="row-item">
                            <a href="https://wayfare.herokuapp.com">
                            <div className="item" id="wayfare"></div>
                            </a>
                            <div>Wayfare is a Ruby on Rails app that allows users to see other user's comments and recommendations when traveling. Users are also able to create, edit, and delete their own comments.</div>
                        </div>
                    </div>  */}
                </ProjectsComponent>
            </div>
               
        );
    }
}

export default Projects;