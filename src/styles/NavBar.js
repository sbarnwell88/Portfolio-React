import styled from 'styled-components';

export const NameComponent = styled.div`
    display: flex;
    justify-content: center;
    padding: 180px;
    color: white;
    text-shadow:
    -1px -1px 0 #000,
    1px -1px 0 #000,
    -1px 1px 0 #000,
    1px 1px 0 #000;
    background-image: url('https://i.imgur.com/NqeA7Uq.jpg'); 
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
        font-size: 100px;
    }
    .sb {
        display: flex;
        justify-content: center;
        font-family: 'Francois One', sans-serif;
        font-size: 25px;
    }
    .title {
        // color: grey;
        // text-shadow: 2px 2px black;
        color: black;
        text-shadow:
        -1px -1px 0 white,
        1px -1px 0 white,
        -1px 1px 0 white,
        1px 1px 0 white;
    }

    b {
        float: left;
        overflow: hidden;
        position: relative;
        height: 28px;
    }
    #rotate{
        // color: white;
        // text-shadow: 2px 2px black;
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
    @media screen and (min-width: 767px) and (max-width: 1200px) {
        background-position: center center;
        background-attachment: fixed;       
        webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        display: flex;
        justify-content: center;  
        font-size: 25px;
        #name {
            font-size: 55px;
            text-align: center;
        }
        .sb {
        font-size: 30px;
        display: flex;
        flex-wrap: wrap;
        }
        .title {
            font-size: 28px;
        }
        b {
            height: 30px;
        }
        @keyframes move {
        0% { top: 0px }
        20% { top: -40px }
        40% { top: -80px; }
        60% { top: -120px; }
        80% { top: -160px; }
    }
    }

    @media screen and (max-width: 766px)  { 
        background-position: center center;       
        webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: 200vw 110vh;
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
        40% { top: -44px; }
        60% { top: -67px; }
        80% { top: -85px; }
    }
    }

`

export const NavBarComponent = styled.div`
  background-color: black;
  height: 60px;
  padding: 20px;
  display: flex;
  justify-content: space-around;
  font-size: 24px;
  font-family: 'Francois One', sans-serif;
    a {
        color: white;
        text-decoration: none;
    }
    @media screen and (max-width: 766px) {
        font-size: 15px;
        height: 50px;
        padding: 15px;
        justify-content: space-between;
    }
    @media screen and (min-width: 767px) and (max-width: 1200px) {
        font-size: 20px;
        height: 60px;
        padding: 20px;
        justify-content: space-between; 
    }
`

export const IntroComponent = styled.div`
        display: flex;
        justify-content: center;
        font-family: 'Francois One', sans-serif;
        font-size: 25px;
        padding: 20px;
`
export const SkillsComp = styled.div`
    background-image: url('https://i.imgur.com/NqeA7Uq.jpg');
    background-position: center center;
    background-attachment: fixed;       
    webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    .languages {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
}
    .lang {
        padding: 40px;
    }
`

export const Description = styled.div` 
        font-family: 'Montserrat', sans-serif;
        word-spacing: 6px;
        width:60%;
        margin: auto;
        @media screen and (max-width: 766px) {
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
    @media screen and (max-width: 766px) {
        padding-right: 20px;
    }
`

export const ContactComponent = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 30px;
    padding-bottom: 50px;
    @media screen and (max-width: 766px) {

    }
`
export const Github = styled.div`
    padding-right: 40px;
    @media screen and (max-width: 766px) {
        padding-right: 20px;
    }
`