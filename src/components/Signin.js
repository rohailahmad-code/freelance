import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

function Signin() {
  return (
    <Container>
        <Wrap>
          
        </Wrap>

        <Content>
          <Heading>
            <h1>Welcome</h1>
            <h2>Sign in to your account</h2>
          </Heading>

          <form>
            <div className="input">
              <input type="text" placeholder='Email Address' />
              <img className='email' src="/images/email icon.png" alt="" />
            </div>
            <div className="input">
              <input type="password" placeholder='Password' />
              <img className='password' src="/images/password icon.png" alt="" />
            </div>
            <a href="/">Forget Password?</a>

            <Buttons>
              <Link to='/browsejobs'><span className='signin'>Sign In</span></Link>
              <Link to='/signup'><span classNames="signup">Sign Up</span></Link>
            </Buttons>
          </form>

          <div className='login-with'>
            <span>Or</span>
            <span>Login with</span>
            
          </div>

          <SocialIconss>
            <Link>
              <img src="/images/linkedin.png" alt="" />
              <img src="/images/google.png" alt="" />
              <img src="/images/facebook.png" alt="" />
            </Link>
          </SocialIconss>
            
        </Content>
    </Container>
  )
}

export default Signin

const Container = styled.div`
  position: relative;
`

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url("/images/signin.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`

const Content = styled.div`
  z-index: 1;
  position: absolute;
  top: 23%;
  right: 10%;

  width: 556px;

  display: flex;
  flex-direction: column;
  align-items: center;

  form {
    width: 100%;
    
    input {
      width: 100%;
      padding: 10px 10px 10px 60px;
      height : 60px;
      outline: none;
      border: 1.5px solid #004B84;
      margin-top: 10px;
      position: relative;
    }

    img.email {
      position: absolute;
      left: 20px;
      top: 120px;
    }

    img.password {
      position: absolute;
      left: 20px;
      top: 190px;
    }

    a {
      display: block;
      text-align: center;
      margin-top: 20px;

      text-decoration: none;
      color: #5184AB;
    }
  }

  .login-with {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 60px;
    
    span {
      color: #5184AB;
      text-transform: uppercase;
    }
  }
`

const Heading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 50px;

  color: #004B84;

  h1 {
    font-size: 40px;
  }
  h2 {
    font-size: 24px;
  }
`

const Buttons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  
  margin-top: 20px;
  span {
    border: 1.5px solid #004B84;
    padding: 20px 108px;
    background-color: white;
    color: #004B84;
    border-radius: 4px;
    text-transform: uppercase;
  }

  span.signin {
    background-color: #004B84;
    color: white;
    border-radius: 4px;
  }
`

const SocialIconss = styled.div`
  display: flex;
  align-items: center;

  margin-top: 40px;

  img{
    margin: 0 10px;
  }
`