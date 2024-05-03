import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

function Signup() {
  return (
    <Container>
        <Wrap>
        
        </Wrap>

        <Content>
        <Heading>
            <h1>Sign Up</h1>
            <p>To use our platform, please sign up.</p>
        </Heading>

        <form>
            <div className="fullname">
                <div className="firstname text-inside">
                    <input type="text" placeholder='Rohail' />
                    <div class="input-placeholder-text">First Name</div>
                </div>
                <div className="lastname text-inside">
                    <input type="text" placeholder='Ahmad' />
                    <div class="input-placeholder-text">Last Name</div>
                </div>
            </div>
            <div className='wrapper'>
                <div className="input">
                    <input type="text" placeholder='rohail@gmail.com' />
                    <div class="input-placeholder-text">Email Address</div>
                </div>
                <div className="input">
                    <input type="password" placeholder='********' />
                    <div class="input-placeholder-text password-text">Password</div>
                </div>
            </div>


            <Button>
                <Link to='/browsejobs'><span classNames="signup">Sign Up</span></Link>
            </Button>
        </form>

        <div className='below-text'>
            <div className="left-sdie">
                <span>Already have an account? <Link className='signin-btn' to="/">Signin</Link> </span>
            </div>
            <div className="right-side">
                <Link className='privacy'>Privacy Policy</Link>
                <Link className='terms'>Terms of Use</Link>
            </div>
        </div>
            
        </Content>
    </Container>
  )
}

export default Signup

const Container = styled.div`
    position: relative;
`

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: url("/images/signup.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`
const Heading = styled.div`
    color: #4FA3E2;
    align-self: flex-start;
`

const Content = styled.div`
    z-index: 1;
    position: absolute;
    top: 23%;
    left: 10%;

    width: 556px;

    display: flex;
    flex-direction: column;
    align-items: center;

    form {
    width: 100%;

    .wrapper {
        position relative;
    }

    .wrapper .input-placeholder-text {
        position: absolute;
        top: 39%;
    }

    .wrapper  .password-text{
        position: absolute;
        top: 59%;
    }

    .text-inside {
        position: relative;
        display: inline-block;
      }
      
      .input-placeholder-text {
        position: absolute;
        top: 30%;
        left: 10px;
        transform: translateY(-50%);
        pointer-events: none;
        color: #323745;
        font-size: 14px;
        transition: opacity 0.3s ease;
        opacity: 1;
      }

        .fullname{
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
            color: #4FA3E2;
        }
    
        input {
            width: 100%;
            padding: 40px 10px;
            height : 60px;
            outline: none;
            border: 1.5px solid #004B84;
            margin-top: 10px;
            position: relative;
            
        }

        input::placeholder {
            color: #323745;
        }

        a {
            display: block;
            text-align: center;
            margin-top: 20px;

            text-decoration: none;
            color: #5184AB;
        }

        
    }
    
    }

    .below-text{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 10px;
        color: #A5D5FA;

        .signin-btn {
            color: #A5D5FA;
        }

        .right-side{
            .privacy, .terms {
                color: #A5D5FA;
                margin-left: 20px;
            }
        }
        
    }



`

const Button = styled.div`
    width: 100%;
    
    background-color: #004B84;
    padding: 15px 0 30px;
    margin-top: 10px;
    
    span {
        color: white;
        text-transform: uppercase;
        
    }
`



