import styled from 'styled-components';

export const NameComponent = styled.div`
    display: flex;
    justify-content: center;
    padding: 150px;
    color: white;
    background-image: url('https://i.imgur.com/XxXSfSN.jpg?3');
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
    .click {
        display: flex;
        justify-content: center;
        padding: 10px;
        color: white;
    }
`

export const NavBar = styled.div`
//   background-color: #607D8B;
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