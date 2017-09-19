import React, { Component } from 'react';
import { Arrow, IntroComponent, SkillsComp } from '../styles/NavBar';

class Skills extends Component {
    render() {
        return (
            <div>
                <Arrow><a href="#portfolio"><i className="material-icons arrow">keyboard_arrow_down</i></a></Arrow>
                <IntroComponent>
                <div id="skills" className="know">- Skills -</div>
                </IntroComponent>
                <SkillsComp>
                <div className="languages">
                    <div className="lang"><img src="http://i.imgur.com/CVxBb6f.png" width="200" height="200" /></div>
                    <div className="lang"><img src="http://i.imgur.com/2fbwPhk.jpg?1" width="220" height="210" /></div>
                    <div className="lang"><img src="http://i.imgur.com/rQuIW9v.png" width="200" height="210" /></div>
                    <div className="lang"><img src="http://i.imgur.com/noKvP6w.png" width="200" height="200" /></div>
                    <div className="lang"><img src="http://i.imgur.com/dKfBthE.png?1" width="200" height="200" /></div>
                    <div className="lang"><img src="http://i.imgur.com/bsasE5o.png" width="200" height="200" /></div>
                    <div className="lang"><img src="http://i.imgur.com/hPSSl95.png?1" width="170" height="170" /></div> 
                </div>
                </SkillsComp>
            </div>
        );
    }
}

export default Skills;