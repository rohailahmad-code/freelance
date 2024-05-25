import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";

function Header() {
  return (
    <Container>
        <Nav>
            <LeftNav>
              <Link to="/">
                <h1>Need<span className="logo">x</span></h1>
              </Link>
              <Link to="/">
                <span>How it Works</span>
              </Link>
              <Link to="/">
                <span>Browser Jobs</span>
              </Link>
                 
            </LeftNav>
            <RightNav>
              <Link to="/signin">
                <span>Sign In</span>
              </Link>
              <Link to="/signup">
                <span>Sign Up</span>
              </Link>
              <Link to="/JobPost">
                <button>Post a Job</button>
              </Link>

                
            </RightNav>
        </Nav>
    </Container>
  )
}

export default Header

const Container = styled.div`

`

const Nav = styled.div` 
  height: 60px;
  width: 100vw;
  background-color: white;
  z-index: 1;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 120px;
`

const LeftNav = styled.div`
  display: flex;
  align-items: center;

  h1 {
    
      font-family: "Michroma", sans-serif;
  }
  span.logo{
    color: red;
    margin-left: 5px;
  }
    
  a {

    text-align: center;
    text-decoration: none;
    cursor: pointer;
    margin-left: 25px;
    color: #323745;

  }
`

const RightNav = styled.div`

  display: flex;
  align-items: center;
  
  a {
    text-align: center;
    text-decoration: none;
    margin-left: 25px;
    color: #323745;
     
  }

  button {
    margin-left: 20px;
    padding: 10px 20px;
    background-color: #004B84;
    border: none;
    border-radius: 4px;
    color: white;
    margin: 0;
    cursor: pointer;
  }
`