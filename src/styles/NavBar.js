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
        font-size: 80px;
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
        // background-position: center center;
        background-position: 50% 50%;
        background-attachment: scroll;
        // background-attachment: fixed;       
        webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        background-size: 240vw 155vh;
        display: flex;
        justify-content: center;
        .name {
            font-size: 65px;
            text-align: center;
        }
        .sb {
        font-size: 40px;
        display: flex;
        flex-wrap: wrap;
        }
        .title {
            font-size: 40px;
        }
        b {
            height: 40px;
        }
        @keyframes move {
        0% { top: 0px }
        20% { top: -65px }
        40% { top: -120px; }
        60% { top: -180px; }
        80% { top: -240px; }
    }
    }

    @media screen and (max-width: 766px)  { 
        background-position: center center;       
        webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: 260vw 150vh;
        display: flex;
        justify-content: center;
        .click {
            font-size: 20px;
            text-align: center;
        }
        .sb {
        display: flex;
        flex-wrap: wrap;
        font-size: 20px;
        }
        .title {
            font-size: 20px;
            flex-wrap: wrap;
        }
        .name {
            font-size: 50px;
            text-align: center;
        }
        b {
            height: 20px;
        }
        @keyframes move {
        0% { top: 0px }
        20% { top: -30px }
        40% { top: -58px; }
        60% { top: -90px; }
        80% { top: -115px; }
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
    @media screen and (min-width: 767px) and (max-width: 1200px) {
        background-image: none;
        background-color: #696969;
        img {
            width: 150px;
            height: 150px;
        }
        .lang {
        padding: 20px;
    }
    }
    @media screen and (max-width: 766px)  { 
        // background-position: center center;       
        // webkit-background-size: cover;
        // -moz-background-size: cover;
        // -o-background-size: cover;
        // background-size: 290vw 160vh;
        // display: flex;
        // justify-content: center;
        background-image: none;
        background-color: #696969;
        img {
            width: 70px;
            height: 70px;
        }
        .lang {
        padding: 10px;
    }
    }
`

export const Description = styled.div` 
        font-family: 'Montserrat', sans-serif;
        word-spacing: 6px;
        width:60%;
        margin: auto;
        @media screen and (min-width: 767px) and (max-width: 1200px) {
            font-size: 25px;
            width:80%;
        }
        @media screen and (max-width: 766px) {
            font-size: 18px;
            width:80%;
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