import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";

function BrowseJobsHeader() {
  return (
    <Container>
        <Nav>
            <LeftNav>
                <Link to="/">
                    <h1>Need<span className="logo">x</span></h1>
                </Link>
            </LeftNav>
            <MidNav>
                <Link to="/"><img src="./images/Find work.png" alt="" /> Find Work</Link>
                <Link to="/"><img src="./images/portfolio.png" alt="" /> Portfolio</Link>
                <Link to="/"><img src="./images/application.png" alt="" /> Application</Link>
                <Link to="/"><img src="./images/community.png" alt="" /> Community</Link>
            </MidNav>
            <RightNav>
                <Link><img src="/images/chat.png" alt="" /></Link>
                <Link><img src="/images/notification.png" alt="" /></Link>
                <Link><img src="/images/profile-avatar.png" alt="" /></Link>
                <Link><img src="/images/dropdown.png" alt="" /></Link>
            </RightNav>
        </Nav>
    </Container>
  )
}

export default BrowseJobsHeader

const Container = styled.div`
    width: 100vw;
`

const Nav = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 60px;
`

const LeftNav = styled.div`
    h1 {
        color: #171A1F;
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
    }
`

const MidNav = styled.div`

    display: flex;
    align-items: center;

    img {
        margin-right: 10px;
    }

    a {
        display: flex;
        align-items: center;
        margin-left: 25px;
        font-size: 14px;

        text-decoration: none;
        color: #9095A1;
    }
`

const RightNav = styled.div`
    display: flex;
    align-items: center;

    img {
        margin-left: 10px;
    }
`

