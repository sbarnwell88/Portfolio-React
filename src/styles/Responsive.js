import styled from 'styled-components';
   
export const Resposive = styled.div`
    @media screen and (max-width: 400px)  {
        font-size: 100px;
    //     .sb {
    //     display: flex;
    //     justify-content: center;
    //     font-family: 'Francois One', sans-serif;
    //     font-size: 15px;
    //     }
    //     .name {
    //     display: flex;
    //     justify-content: center;
    //     font-family: 'Francois One', sans-serif;
    //     font-size: 30px;
    //     }
    }
    @media screen and (max-width: 600px)  {
        .sb {
        display: flex;
        justify-content: center;
        font-family: 'Francois One', sans-serif;
        font-size: 100px;
        }
        .name {
        display: flex;
        justify-content: center;
        font-family: 'Francois One', sans-serif;
        font-size: 30px;
        }
    }
    @media screen and (max-width: 1000px) {
        font-size: 100px;
    }
    @media screen and (min-width: 1400px) {...}
`


