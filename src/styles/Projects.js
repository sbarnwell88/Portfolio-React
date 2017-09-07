import styled from 'styled-components';

export const ProjectsComponent = styled.div`
    .container {
        display: flex;
        justify-content: center;
        a {
            text-decoration: none;
        }
    }
    .item {
        width: 350px;
        height: 300px;
        margin: 20px;
        color: white;
        font-weight: bold;
        display: flex;
        justify-content: center;
        font-family: 'Francois One', sans-serif;
        font-size: 24px;
        box-shadow: 6px 6px 5px black;
        opacity: .6;
    }
    #hangman {
        background-image: url('https://i.imgur.com/NpYc2ge.png?2');
        background-size: 100% 100%;
        background-repeat: no-repeat;
    }
    #beer {
        background-image: url('https://i.imgur.com/00Pw3iw.jpg?1');
        background-size: 100% 100%;
        background-repeat: no-repeat;
        // filter: blur(2px);
    }

    .item:hover{
        // filter:none;
        opacity: 1;
    }

    #adventure {
        background-image: url('https://i.imgur.com/oyTNDhk.jpg?1');
        background-size: 100% 100%;
        background-repeat: no-repeat;
    }

   #wayfare {
        background-image: url('https://i.imgur.com/OyhlvhZ.jpg');
        background-size: 100% 100%;
        background-repeat: no-repeat;
    }
`
