import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";

function Hero() {
  return (
    <Container>
        <Wrap>
            
        </Wrap>
        <Content>
            <h1>How can freelancers help your business?</h1>
            <p>The possibilities are endless. We have expert 
                freelancers who work in every technical, professic 
                and creative field imaginable.</p>
            <Link to="/JobPost">
                <button><a href="">Post a Job</a></button>
            </Link>
        </Content>
    </Container>
  )
}

export default Hero

const Container = styled.div`
    position: relative;
`

const Wrap = styled.div` 
    width: 100vw;
    height: 100vh;
    background-image: url("/images/home.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    
`

const Content = styled.div` 
    width : 100%;
    display: flex;
    flex-direction: column; 
    align-items: left;
    justify-content: center;

    position: absolute;
    top: 23%;
    left: 7%;
    

    h1 {
        font-size: 40px;
        font-weight: bold;
        width: 380px;
        color: white;
    }
    p {
        color: white;
        width: 380px;
        padding: 10px 0;
        line-height: 25px;
    }

    button {
        margin-top: 20px;
        margin-bottom: 20px;
        width: 160px;
        height: 50px;
        border-radius: 4px;
        border: white 1px solid;
        background-color: #004B84;
        
        a {
            color: white;
            text-decoration: none;
        }

    }
`