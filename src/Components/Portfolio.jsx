import React from 'react'
import PortfolioDB from '../DataBase/PortfolioDB';
import PortfolioPopDB from '../DataBase/PortfolioPopDB';
import PortfolioCard from './PortfolioCard';
const Portfolio = () => {
  return (
    <>
      <div className="portfolio-main-div ">
        <div className="container " style={{paddingBottom:"2rem"}}>
          <div className="row pt-5">
            <p className='services-p' style={{ marginTop: "0px" }}>
              My Portfolio
            </p>
            <h1 className='portfolio-h1' style={{ paddingBottom: "30px" }}>
              Recent Works
            </h1>
          </div>
          <div className="row portfolio-main-card-box mt-4" style={{paddingBottom:"2rem"}}>

            <PortfolioCard img={PortfolioDB[0].img} subHeading={PortfolioDB[0].subHeading} heading={PortfolioDB[0].heading} popHeading={PortfolioPopDB[0].heading} content={PortfolioPopDB[0].para} created={PortfolioPopDB[0].list1} tech={PortfolioPopDB[0].list2} role={PortfolioPopDB[0].list3} view={PortfolioPopDB[0].list4} />
            <PortfolioCard img={PortfolioDB[1].img} subHeading={PortfolioDB[1].subHeading} heading={PortfolioDB[1].heading} popHeading={PortfolioPopDB[1].heading} content={PortfolioPopDB[1].para} created={PortfolioPopDB[1].list1} tech={PortfolioPopDB[1].list2} role={PortfolioPopDB[1].list3} view={PortfolioPopDB[1].list4} />
            <PortfolioCard img={PortfolioDB[2].img} subHeading={PortfolioDB[2].subHeading} heading={PortfolioDB[2].heading} popHeading={PortfolioPopDB[2].heading} content={PortfolioPopDB[2].para} created={PortfolioPopDB[2].list1} tech={PortfolioPopDB[2].list2} role={PortfolioPopDB[0].list3} view={PortfolioPopDB[2].list4} />
            <PortfolioCard img={PortfolioDB[3].img} subHeading={PortfolioDB[3].subHeading} heading={PortfolioDB[3].heading} popHeading={PortfolioPopDB[3].heading} content={PortfolioPopDB[3].para} created={PortfolioPopDB[3].list1} tech={PortfolioPopDB[3].list2} role={PortfolioPopDB[0].list3} view={PortfolioPopDB[3].list4} />
            <PortfolioCard img={PortfolioDB[4].img} subHeading={PortfolioDB[4].subHeading} heading={PortfolioDB[4].heading} popHeading={PortfolioPopDB[4].heading} content={PortfolioPopDB[4].para} created={PortfolioPopDB[4].list1} tech={PortfolioPopDB[4].list2} role={PortfolioPopDB[0].list3} view={PortfolioPopDB[4].list4} />
            <PortfolioCard img={PortfolioDB[5].img} subHeading={PortfolioDB[5].subHeading} heading={PortfolioDB[5].heading} popHeading={PortfolioPopDB[5].heading} content={PortfolioPopDB[5].para} created={PortfolioPopDB[5].list1} tech={PortfolioPopDB[5].list2} role={PortfolioPopDB[0].list3} view={PortfolioPopDB[5].list4} />

          </div>
        </div>
      </div>
    </>
  )
}

export default Portfolio