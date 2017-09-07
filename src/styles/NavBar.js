import styled from 'styled-components';

export const NameComponent = styled.div`
    display: flex;
    justify-content: center;
    padding: 180px;
    color: white;
    background-image: url('https://i.imgur.com/r3qmW7N.jpg?4');
    background-position: center center;
    .name {
        display: flex;
        justify-content: center;
        font-family: 'Francois One', sans-serif;
        font-size: 60px;
    }
    .sb {
        display: flex;
        justify-content: center;
        font-family: 'Francois One', sans-serif;
        font-size: 25px;
    }
    .title {
        color: white;
        text-shadow: 2px 2px black;
    }
    b {
        float: left;
        overflow: hidden;
        position: relative;
        height: 28px;
    }
    #rotate{
        color: black;
        text-shadow: 2px 2px white;
        display: inline-block;
        position: relative;
        white-space: nowrap;
        top: 0;
        left: 0;
        animation: move 5s;
        animation-iteration-count: infinite;
        animation-delay: 1s;
    }
    @keyframes move {
        0% { top: 0px }
        20% { top: -36px }
        40% { top: -72px; }
        60% { top: -108px; }
        80% { top: -144px; }
    }
    .click {
        display: flex;
        justify-content: center;
        padding: 10px;
        color: white;
    }
`

export const NavBarComponent = styled.div`
  background-color: black;
  height: 30px;
  padding: 20px;
  display: flex;
  justify-content: space-around;
  font-size: 24px;
  font-family: 'Francois One', sans-serif;
    a {
        color: white;
        text-decoration: none;
    }
`

export const IntroComponent = styled.div`
        display: flex;
        justify-content: center;
        font-family: 'Francois One', sans-serif;
        font-size: 25px;
        padding: 20px;
`

export const Description = styled.div` 
        font-family: 'Montserrat', sans-serif;
        word-spacing: 6px;
        width:60%;
        margin: auto;
`
export const Color = styled.div`
    color: black;
    a {
        color: white;
    }
`
export const Arrow = styled.div`
    .arrow {
        font-weight: bold;
        font-size: 80px;
        display: flex;
        justify-content: center;
        padding: 60px;
        color: black;
    }
    a:link {
        text-decoration: none;
    }
    #white {
        color: white;
    }
`
export const Background = styled.div`
    background-color: black;
    color: white;
    padding-bottom: 60px;
`

export const Email = styled.div`
    .email {
        display: flex;
        justify-content: center;
        font-size: 70px;
        color: white;
    }
    a:link {
        text-decoration: none;
    }
    padding-right: 40px;
`

export const ContactComponent = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 30px;
    padding-bottom: 50px;
`
export const Github = styled.div`
    padding-right: 40px;
`