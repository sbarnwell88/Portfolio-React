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
                            <div className="row-item"><a href="https://board-af.herokuapp.com/">
                                <div className="item" id="board"></div>
                                </a>
                                <div className="text">BoardAF is an app that allows users to select different boardgames and save them as their favorites. Some of the technologies used include an external API and React on Rails.</div>
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