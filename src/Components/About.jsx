import React from 'react'
import hero from "../heroImg.png";
import aboutCardDB from '../DataBase/AboutCard';
import Skills from './Skills';
const About = () => {
    return (
        <>
            <div className='about-main-div'>
                <div className="container">
                    <div className="row pt-5">
                        <p className='services-p' style={{ marginTop: "0px" }}>
                            My Intro
                        </p>
                        <h1 className='portfolio-h1' style={{ paddingBottom: "30px" }}>
                            About Me
                        </h1>
                    </div>
                    <div className="row mt-4">
                        <div className="col-12 col-md-6 col-lg-6 about-img-div">
                            <img src={hero} alt="Ashish Pic" style={{ height: "280px", borderRadius: "20px" }} />
                        </div>
                        <div className="col-12 col-md-6 col-lg-6">
                            <div className='aboutDiv pt-5'>
                                {
                                    aboutCardDB.map((curElem, id) => {
                                        const { logo, heading, subHeading } = curElem;
                                        return (
                                            <div className="aboutCard" key={id}>
                                                <div className='pt-3 pb-3' style={{ textAlign: "center" }}>
                                                    <img src={logo} alt="icon" style={{ width: "40px", color: "" }} />
                                                </div>
                                                <h4 className='aboutCard-h1'>
                                                    {heading}
                                                </h4>
                                                <p className='aboutCard-p'>
                                                    {subHeading}
                                                </p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className='about-p-div'>
                                <p className='about-p'>
                                    I am an enthusiastic developer who love exploring and trying hands at different tech stacks.I have a strong interest in web development and problem-solving . I love to work on new challenges in this field,building attractive interactive sites excite me and learning how to protect them excites me even more.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <Skills />
            </div>
        </>
    )
}

export default About