import styled from 'styled-components';

export const NameComponent = styled.div`
    display: flex;
    justify-content: center;
    padding: 180px;
    color: white;
    background-image: url('https://i.imgur.com/r3qmW7N.jpg?4');
    background-position: center center;
        background-attachment: fixed;       
    webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
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
    @media screen and (max-width: 600px)  { 
        background-attachment: fixed;       
        webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        display: flex;
        justify-content: center;
        font-size: 10px;
        .sb {
        font-size: 15px;
        display: flex;
        flex-wrap: wrap;
        }
        .title {
            font-size: 15px;
        }
        #name {
            font-size: 28px;
        }
        b {
            height: 18px;
        }
        @keyframes move {
        0% { top: 0px }
        20% { top: -20px }
        40% { top: -48px; }
        60% { top: -65px; }
        80% { top: -85px; }
    }
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
    @media screen and (max-width: 600px) {
        font-size: 15px;
        height: 20px;
        justify-content: space-around;
        padding-left: 70px;
        padding-right: 70px;
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
        @media screen and (max-width: 600px) {
            // text-align: justify;
            // text-justify: inter-word;
        }
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