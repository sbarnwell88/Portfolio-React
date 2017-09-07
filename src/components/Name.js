import React, { Component } from 'react';
import { NameComponent } from '../styles/NavBar';

class NavBar extends Component {
    constructor() {
        super()
        this.state = {
            colorWhite: true
        }
    }


  _changeColor() {
      this.setState({colorWhite: !this.state.colorWhite})
  }

    render() {
        let letterColor = this.state.colorWhite ? "white" : "black"
        return (
            <NameComponent>
            <div id="home">
                <div id="name" style={{color: letterColor}} onClick={this._changeColor.bind(this)} className="name animated fadeIn">Nice to Meet You!</div>
                <div className="click">(click ^ to toggle between colors)</div>
                <div className="sb">I'm <span className="title">{' < SUSANA BARNWELL />'}</span> and I am a<b><span id="rotate" className="title">{" < FULL STACK WEB DEVELOPER /> "}<br/>{'< JAVASCRIPT WIZARD />'}<br/>{'< MERN STACK GENIE />'}<br/>{'< WORLD TRAVELER />'}<br/>{'< PROBLEM SOLVER />'}</span></b></div>
            </div>
            </NameComponent>
        );
    }
}

export default NavBar;