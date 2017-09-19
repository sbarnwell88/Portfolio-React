import styled from 'styled-components';

export const ProjectsComponent = styled.div`
    .container {
        display: flex;
        // flex-flow: row; 
        // flex-wrap: wrap;
        justify-content: center;
        flex: 0 0 100%;
        padding-bottom: 30px;
        a {
            text-decoration: none;
        }
    }
    .row-item {
        flex-grow: 1;
	    flex-shrink: 1;
        flex-basis: 0;
        padding-left: 80px;
        padding-right: 80px;
        padding-botton: 20px;
        font-family: 'Francois One', sans-serif;
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
        a {
            font-size: 15px;
        }
        
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
