import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";

function BrowseJobsSection() {
  return (
    <Container>
        <Sections>
            <LeftSection>
                <div className="filter">
                    <span>Filter</span>
                    <Link to="/">Clear all</Link>
                </div>

                <div className="salary">
                    <span>Salary</span>
                    <Link to="/">$300</Link>
                </div>

                <div className="price">
                    <span>$300</span>
                    <span>$5k</span>
                </div>

                <h4>Job Type</h4>

                <div className="urgent">
                    <input type="checkbox" name="urgent" />
                    <span>Urgent</span>
                </div>
                <div className="remotely">
                    <input type="checkbox" name="remotely" />
                    <span>Remote</span>
                </div>
                <div className="fulltime">
                    <input type="checkbox" name="fulltime" checked />
                    <span>Full Time</span>
                </div>

                <h4>Experience Level</h4>

                <div className="entry-level">
                    <input type="checkbox" name="entry level" />
                    <span>Entry Level</span>
                </div>

                <div className="intermediate">
                    <input type="checkbox" name="intermediate" checked />
                    <span>Intermediate</span>
                </div>

                <div className="expert">
                    <input type="checkbox" name="expert" />
                    <span>Expert</span>
                </div>

                <h4>Job Location</h4>

                <div className="onsite">
                    <input type="checkbox" name="onsite" />
                    <span>On Site</span>
                </div>
                <div className="remote">
                    <input type="checkbox" name="remote" />
                    <span>Remote</span>
                </div>

                <h4>Applicants</h4>

                <div className="lessthanten">
                    <div className="left">
                        <input type="checkbox" name="less-than-10" checked />
                        <span>Less than 10</span>
                    </div>
                    <div className="right">
                        <span>268 jobs</span>
                    </div>
                </div>

                <div className="tentofifty">
                    <div className="left">
                        <input type="checkbox" name="10-to-50" />
                        <span>10 to 50</span>
                    </div>
                    <div className="right">
                        <span>149 jobs</span>
                    </div>
                </div>
            </LeftSection>
            <MidSection>
                <div className="search-wrapper">
                    <h3>Find your dream job here</h3>
                    <p>Explore the latest job openings and apply for the best job opportunities available today</p>
                    <div className="search">
                        <div className="search-input">
                            <input type="text" placeholder="Search" />
                            <img src="./images/search-icon.png" alt="" />
                        </div>
                        <div className="search-btn">
                            <button>Search</button>
                        </div>
                    </div>
                </div>

                <div className="job-display">
                    <div className="title-wrapper">
                        <div className="left">
                            <img src="./images/job-icon1.png" alt="" />
                            <div className="heading">
                                <h4>Senior Frontend Developer</h4>
                                <span>Semrush</span>
                            </div>
                            <div className="button">
                                <span>Urgent</span>
                            </div>
                        </div>
                        <img src="./images/dots-icon.png" alt="" />
                    </div>
                    <div className="detailed-wrapper">
                        <div className="left">
                            <div className="type">
                                <img src="./images/watch.png" alt="" />
                                <span>Full Time</span>
                            </div>
                            <div className="duration">
                                <img src="./images/time.png" alt="" />
                                <span>1-2 Year</span>
                            </div>
                            <span>NY, USA</span>
                        </div>
                        <div className="right">
                            <span>28 Mar 2023</span>
                        </div>
                    </div>

                    <p>Lorem ipsum dolor sit amet consectetur. Dictumst viverra faciisi dis scelerisque sed. Id venenatis faucibus condimentum elementum. Velt etiam et tincidunt purus amet quam at lacu...</p>

                    <div className="below-wrapper">
                        <div className="left">
                            <div className="total-price">
                                <img src="./images/dollar-icon.png" alt="" />
                                <span>$30k-40k/Month</span>
                            </div>
                            <div className="applied">
                                <img src="./images/applied-icon.png" alt="" />
                                <span>49 Applied</span>
                            </div>
                        </div>
                        <div className="right">
                            <button>Apply Now</button>
                        </div>
                    </div>
                </div>

                {/* Another Job */}

                <div className="job-display">
                    <div className="title-wrapper">
                        <div className="left">
                            <img src="./images/job-icon2.png" alt="" />
                            <div className="heading">
                                <h4>Senior Backend Developer</h4>
                                <span>Yandex_kassa</span>
                            </div>
                            <div className="button">
                                <span>Urgent</span>
                            </div>
                        </div>
                        <img src="./images/dots-icon.png" alt="" />
                    </div>
                    <div className="detailed-wrapper">
                        <div className="left">
                            <div className="type">
                                <img src="./images/watch.png" alt="" />
                                <span>Full Time</span>
                            </div>
                            <div className="duration">
                                <img src="./images/time.png" alt="" />
                                <span>1-2 Year</span>
                            </div>
                            <span>UK, London</span>
                        </div>
                        <div className="right">
                            <span>28 Mar 2023</span>
                        </div>
                    </div>

                    <p>Lorem ipsum dolor sit amet consectetur. Dictumst viverra faciisi dis scelerisque sed. Id venenatis faucibus condimentum elementum. Velt etiam et tincidunt purus amet quam at lacu...</p>

                    <div className="below-wrapper">
                        <div className="left">
                            <div className="total-price">
                                <img src="./images/dollar-icon.png" alt="" />
                                <span>$30k-40k/Month</span>
                            </div>
                            <div className="applied">
                                <img src="./images/applied-icon.png" alt="" />
                                <span>49 Applied</span>
                            </div>
                        </div>
                        <div className="right">
                            <button>Apply Now</button>
                        </div>
                    </div>
                </div>


            </MidSection>
            <RightSection>
                <div className="suggested-jobs">
                    <span>Suggested Job</span>
                    <img src="./images/suggested.png" alt="" />
                </div>

                <div className="suggested-job">
                    <div className="upper">
                        <div className="left">
                            <img src="./images/job1.png" alt="" />
                            <h4>GitLab</h4>
                        </div>
                        <img src="./images/dots-icon.png" alt="" />
                    </div>
                    <div className="title">
                        <h4>Junior UI/UX Designer</h4>
                        <span>Product Technologies</span>
                    </div>
                    <div className="lower">
                        <span>1 day ago</span>
                        <span>26 Applied</span>
                    </div>
                </div>

                <div className="suggested-job">
                    <div className="upper">
                        <div className="left">
                            <img src="./images/job2.png" alt="" />
                            <h4>SpreadSimple</h4>
                        </div>
                        <img src="./images/dots-icon.png" alt="" />
                    </div>
                    <div className="title">
                        <h4>Senior UI/UX Designer</h4>
                        <span>Product Technologies</span>
                    </div>
                    <div className="lower">
                        <span>1 day ago</span>
                        <span>26 Applied</span>
                    </div>
                </div>

                <div className="suggested-job">
                    <div className="upper">
                        <div className="left">
                            <img src="./images/job3.png" alt="" />
                            <h4>Sketch</h4>
                        </div>
                        <img src="./images/dots-icon.png" alt="" />
                    </div>
                    <div className="title">
                        <h4>Junior UI/UX Designer</h4>
                        <span>Product Technologies</span>
                    </div>
                    <div className="lower">
                        <span>1 day ago</span>
                        <span>26 Applied</span>
                    </div>
                </div>

            </RightSection>
        </Sections>
    </Container>
  )
}

export default BrowseJobsSection

const Container = styled.div`
    width: 100vw;
    background-color: #F4F6FB;
`

const Sections = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-gap: 20px;

    padding-top: 30px;
    padding-bottom: 30px;

`

const LeftSection = styled.div`
    background-color: white;
    margin-left: 60px;
    padding: 20px 30px;
    color: #9095A1;
    border-radius: 5px;

    .filter, .salary, .price {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding:10px 0;

        a {
            text-decoration: none;
            color: #171A1F;
        }
    }
    .salary {
        a {
            padding: 5px 10px;
            background-color: #004B84;
            color: white;
            border-radius: 5px;
        }
        span{
            color: #171A1F;
        }
    }
    .filter {
        span{
            color: #171A1F;
        }
        a {
            color: #004B84;
        }
    }

    .price {
        span {
            color: #9095A1;
        }
    }


    h4 {
        margin: 10px 0;
        color: #171A1F;
        
    }

    input {
        margin-right: 10px;
        margin-top: 15px;
    }

    .fulltime, .intermediate, .lessthanten{
        span{
            color: #171A1F;
        }
    }

    .lessthanten, .tentofifty {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`

const MidSection = styled.div`
    padding: 0 50px; 

    .search-wrapper {
        width: 100%;
        background-color: #004B84;
        color: white;
        padding: 30px 20px;

        h3 {
            font-size: 22px;
            margin-bottom: 10px;
        }

        p {
            font-size: 13px;
            margin-bottom: 20px;
        }

        .search {
            display: flex;
            align-items: center;
            width: 100%;


            .search-input {
                position: relative;
                width: 100%;
                input {
                    width: 100%;
                    padding: 10px 10px 10px 60px;
                    height : 60px;
                    outline: none;
                    border: 1.5px solid #004B84;
                    
                  }
              
                  img {
                    position: absolute;
                    left: 20px;
                    top: 20px;
                  }
            }

            .search-btn {
                button {
                    border: none;
                    background: none;
                    font-size: 14px;
                    color: #ffffff;
                    margin-left: 20px;
                }
            }
        }

    }

    .job-display {
        background-color: white; 
        margin-top: 40px;  
        padding: 30px 30px;
        border-radius: 5px;

        .title-wrapper {
            display: flex;
            align-items: center;
            justify-content: space-between;

            .left {
                display: flex;
                align-items: center;

                .heading {
                    margin-left: 20px;

                    h4 {
                        font-size: 16px;
                    }

                    span {
                        color: #9095A1;
                        font-size: 12px;
                    }
                }

                .button span{
                    margin-left: 30px;
                    padding: 5px 10px;
                    background: #41B87E;
                    color: white;
                    border-radius: 5px;
                }
            }

            img {
                cursor: pointer;
            }
        }

        .detailed-wrapper {
            display: flex;
            align-items: center;
            justify-content: space-between;

            padding: 20px 0;
            font-size: 12px;

            .left {
                display: flex;
                align-items: center;

                .type, .duration {
                    display: flex;
                    align-items: center;
                    margin-right: 90px;
                    
                    span {
                        margin-left: 10px;
                    }
                }
            }
        }

        p {
            font-size: 13px;
            color: #9095A1;
        }

        .below-wrapper {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: 60px;

            .left {
                display: flex;
                align-items: center;

                .total-price, .applied {
                    display: flex;
                    align-items: center;
                    margin-right: 100px;
                    span {
                        margin-left: 15px;
                        font-size: 15px;
                    }
                }
            }

            .right {
                button {
                    border: none;
                    background-color: #004B84;
                    color: white;
                    padding: 10px 20px;
                    border-radius: 5px;
                    cursor: pointer;
                }
            }
        }
    }
`

const RightSection = styled.div`

    margin-right: 60px;
    


    .suggested-jobs {
        display: flex;
        align-items: center;
        justify-content: space-between;

        background-color: white;

        padding: 15px;
        border: 1px solid #171A1F;
        border-radius: 5px;

        span {
            font-size: 15px;
        }
    }

    .suggested-job {
        background-color: white;
        margin-top: 30px;
        padding: 15px;
        border-radius: 5px;
        .upper {
            display: flex;
            align-items: center;
            justify-content: space-between;

            

            .left {
                display: flex;
                align-items: center;
                justify-content: space-between;

                h4 {
                    margin-left: 10px;
                    font-size: 18px;
                    font-weight: bold;
                }
            }
        }

        .title {
            margin-top: 15px;
            h4 {
                font-size: 16px;
                color: #171A1F;
            }
            span {
                font-size: 12px;
                color: #9095A1;
            }
        }

        .lower {
            margin-top: 20px;
            span {
                font-size: 13px;
                color: #9095A1;
                margin-right: 30px;
            }
        }
    }

`

