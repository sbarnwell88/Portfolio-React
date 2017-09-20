import styled from 'styled-components';

export const ProjectsComponent = styled.div`
    .container {
        display: flex;
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

    @media screen and (min-width: 767px) and (max-width: 1200px) {
        .container {
            flex-wrap: wrap;
            display: flex;
            text-align: center;
        }
        .row-item {
            padding-botton: 20px;
            font-size: 25px;
            
        }
        .item {
            width: 450px;
            height: 400px;
            margin-left: 100px;
        }
        .text {
            padding: 60px;
        }
    }

    @media screen and (max-width: 766px) {
        .container {
            flex-direction: column;
            align-items: center;
            justify-content: center;
            display: flex;
            text-align: center;
        }
        .row-item {
            padding-botton: 20px;
            font-size: 10px;
            padding-right: 0px;
            padding-left: 0px;

        }
        .item {
            width: 75vw;
            height: 75vw;
        }
        .text {
            padding: 10px;
        }
    }

`
