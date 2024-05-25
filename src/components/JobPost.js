import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";

function JobPost() {
  return (
    <Container>
        <Wrapper>
            <Left>
                <h1>Post a Job</h1>
                <InnerWrapper>
                    <div className="haveAnAccount">
                        <div className="left">Have an account?</div>
                        <div className="right"><Link className='signin' to="/signin">Sign in</Link>If you don't have an account you can create one below by entering
                        your email address/username. Your account details wil be confirmed via email.</div>
                    </div>
                    <form>
                        <div>
                            <label htmlFor="">Job Title</label>
                            <input placeholder="Front-end Developer" type="text" />
                        </div>
                        <div>
                            <label htmlFor="">Price</label>
                            <input placeholder="$200" type="text" />
                        </div>
                        <div>
                            <label htmlFor="">Location</label>
                            <input placeholder='e.g "London"' type="text" />
                        </div>
                        <div>
                            <label htmlFor="">Job Type</label>
                            <input placeholder="Full-time" type="text" />
                        </div>
                        <div>
                            <label htmlFor="">Description</label>
                            <textarea  name="" id="" cols="30" rows="10"></textarea>
                        </div>
                        <div>
                            <label htmlFor=""></label>
                            <Link>
                                <button>Submit</button>
                            </Link>
                        </div>
                    </form>
                </InnerWrapper>
            </Left>
            <Right>
                <img src="/images/jobpost.png" alt="" />
            </Right>
        </Wrapper>
    </Container>
  )
}

export default JobPost

const Container = styled.div`
    width: 100vw;
`

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 60% 40%;
    
`

const Left = styled.div`


    h1 {
        background-color: #004B84;
        height: 180px;
        color: white;
        padding-left: 40px;

        display: flex;
        align-items: center;
    }

    form {
        padding: 40px 140px 40px 40px;


        div {
            display: grid;
            grid-template-columns: 30% 70%;
            grid-gap: 20px;
            margin-top: 20px;
        }

        label {
            color: #565D6D;
        }

        input, textarea {
            width: 100%;
            border: 1px solid #004B84;
            border-radius: 4px;
            padding: 20px;

        }

        textarea {
            height: 200px;
        }

        button {
            background-color: #004B84;
            color: white;
            border-radius: 4px;
            border: none;
            padding: 10px 20px;
            width: 100%;

            margin-top: 20px;
            cursor: pointer;
        }
    }

`

const Right = styled.div`

    height: 100vh;
    
    img {
        width: 100%;
        // height: 100%;
    }

`

const InnerWrapper = styled.div`

   
    

    .haveAnAccount {
        display: grid;
        grid-template-columns: 20% 80%;
        padding: 10px 40px;
        margin-top: 50px;

        .right{
            padding: 0 120px;
        }

        .signin {
            color: #004B84;
            text-decoration: none;
            text-transform: uppercase;
            margin-right: 15px;
            text-weight: bold;
            color: #0DAAED;
        }
    }
`