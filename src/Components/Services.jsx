import React from 'react'
import ServiceDB from '../DataBase/ServicesDB';
import ServicesCard from './ServicesCard';
const Services = () => {
    return (
        <>
            <div className="services-main-div">
                <div className="container " style={{paddingBottom:"2rem"}}>
                    <div className="row pt-5">
                        <p className='services-p' style={{ marginTop: "0px" }}>
                            What I Do
                        </p>
                        <h1 className='portfolio-h1' style={{ paddingBottom: "30px" }}>
                            Services
                        </h1>
                    </div>
                    <div className="row mt-4 service-main-card">
                        {
                            ServiceDB.map((curElem, id) => {
                                const { img, heading, contents } = curElem;
                                return (
                                    <ServicesCard key={id} img={img} heading={heading} contents={contents} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services