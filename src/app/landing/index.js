import React, { useState, useEffect } from 'react';
import axios from 'axios'
import OwlCarousel from 'react-owl-carousel';
import { useWeb3React } from '@web3-react/core'
import './landing.scss';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Environment from "../../utils/Environment"

const Landing = () => {
  const { account } = useWeb3React();
  let [obtain, setobtain] = useState([])
  const [per, setPer] = useState(0)
  const owl_option = {
    margin: 40,
    nav: true,
    dots: true,
    dotsEach: true,
    loop: true,
    infinite: true,
    autoplay: true,
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 1,
      },
      600: {
        items: 2,
      },
      700: {
        items: 2,
      },
      1000: {
        items: 3,
      },
      1200: {
        items: 4,
      }
    },
  };

  const getObatained = () => {
    axios.post(Environment.backendUrl + "/nft/getAllRecentlyObtained", {})
      .then((response) => {
        setobtain(response.data.data)
      }).catch(error => { console.log('errror', error) })
  }

  const getPercen = () => {
    axios.post(Environment.backendUrl + "/nft/getSharePerAddress", { contract: '0xb36b5716CC186Ae16696De2953ae56DfaFCC23c4', address: account })
      .then(async (response) => {
        setPer(response.data.data)
      });
  }



  useEffect(() => {
    getObatained()
    getObatained()
    getPercen()

  }, [])

  const dataObtain = obtain.map((elem) => {
    return (
      <>
        <div className="item">
          <div className="card card-width">
            <div className="upper-divs-triple">
              <img src={elem.imageUri} className="" alt="image not found" />
            </div>
            <div className="lower-textss">
              <h1>{elem.name}</h1>
              {/* <div className="ima-with-text">
          <img src={require("../../static/images/landing-nftdapp/image-care-lower.png")} className="image-main-lower" alt="" />
          <p>KidEight</p>
        </div> */}
            </div>
          </div>
        </div>
      </>
    )
  })

  return (
    <div className='landing-nft'>

      <Navbar />
      <section className="header-section">
        <video className="banner-video"
          autoPlay loop muted
        >
          <source src={require("../../static/images/landing-nftdapp/landing-bac-vid.mp4")} type="video/mp4" />
        </video>
        {/* <img src={require("../../static/images/landing-nftdapp/Intersect.png")} className="main-heads-one" alt="" /> */}
        <div className="auto-container">
          <div className="main-head">
            {per ? <h1>YOU OWN {per > 0.001 ? parseFloat(per).toFixed(6) : parseFloat(per).toFixed(1)} % OF OUR COLLECTION</h1> : <h1>YOU OWN 0 % OF OUR COLLECTION</h1>}
            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
            <button className="header-button" type="button">BUY</button>
            <button className="header-button" type="button">CHART</button>
            <button className="header-button" type="button">JOIN TG</button>
          </div>
        </div>
      </section>

      <section className="recently-obtain-nft">
        <div className="conatiner-fluid">
          <div className="row">
            <div className="col-md-11 offset-md-1 m-auto p-md-0">
              <div className="main-caresousal">
                <div className="heading-recent headinghp">
                  <h1>RECENTLY OBTAINED NFTS</h1>
                  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant doloremque laudantium totam rem aperiam.</p>
                </div>
                <div className="row">
                  <div className="col-lg-10 offset-lg-1 col-md-12 offset-md-0 p-md-0">
                    <div className="first-second">
                      <OwlCarousel className="slider-items owl-carousel ltf-owl" autoplaySpeed={5000}  {...owl_option}>
                        {obtain[0] ? dataObtain : null}
                        {/* <div className="item">
                            <div className="card card-width">
                              <div className="upper-divs-triple">
                                <img src={require("../../static/images/landing-nftdapp/image-care1.png")} className="" alt="" />
                              </div>
                              <div className="lower-textss">
                                <h1>#102 EVOL Chux</h1>
                                <div className="ima-with-text">
                                  <img src={require("../../static/images/landing-nftdapp/image-care-lower.png")} className="image-main-lower" alt="" />
                                  <p>KidEight</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="item">
                            <div className="card card-width">
                              <div className="upper-divs-triple">
                                <img src={require("../../static/images/landing-nftdapp/Frame 11.png")} className="" alt="" />
                              </div>
                              <div className="lower-textss">
                                <h1>#102 EVOL Chux</h1>
                                <div className="ima-with-text">
                                  <img src={require("../../static/images/landing-nftdapp/image-care-lower.png")} className="image-main-lower" alt="" />
                                  <p>KidEight</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="item">
                            <div className="card card-width">
                              <div className="upper-divs-triple">
                                <img src={require("../../static/images/landing-nftdapp/Frame 11 (2).png")} className="" alt="" />
                              </div>
                              <div className="lower-textss">
                                <h1>#102 EVOL Chux</h1>
                                <div className="ima-with-text">
                                  <img src={require("../../static/images/landing-nftdapp/image-care-lower.png")} className="image-main-lower" alt="" />
                                  <p>KidEight</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="item">
                            <div className="card card-width">
                              <div className="upper-divs-triple">
                                <img src={require("../../static/images/landing-nftdapp/Frame 11 (3).png")} className="" alt="" />
                              </div>
                              <div className="lower-textss">
                                <h1>#102 EVOL Chux</h1>
                                <div className="ima-with-text">
                                  <img src={require("../../static/images/landing-nftdapp/image-care-lower.png")} className="image-main-lower" alt="" />
                                  <p>KidEight</p>
                                </div>
                              </div>
                            </div>
                          </div> */}
                      </OwlCarousel>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="why-invest">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-11 offset-md-1 m-auto p-md-0">
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-12 col-12 p-md-0">
                  <div className="text-left headinghp">
                    <h1>WHY INVEST WITH NFTDAPP?</h1>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant doloremque laudantium totam rem aperiam. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant doloremque laudantium totam rem aperiam.</p>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant doloremque laudantium totam rem aperiam.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant doloremque laudantium totam rem aperiam.</p>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant doloremque laudantium totam rem aperiam.</p>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-12 col-12 p-md-0">
                  <div className="main-image-div">
                    <img src={require("../../static/images/landing-nftdapp/Illustration.png")} className="" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="why-does-our-token">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-11 offset-md-1 m-auto p-md-0">
              <div className="row">
                <div className="col-lg-6 col-md-12 col-12 p-md-0">
                  <div className="main-image-div">
                    <img src={require("../../static/images/landing-nftdapp/Illustration-1.png")} className="" alt="" />
                  </div>
                </div>
                <div className="col-lg-6 col-md-12 col-12 p-md-0">
                  <div className="text-leftt headinghp">
                    <h1>WHAT DOES OUR TOKEN GIVE YOU?</h1>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant doloremque laudantium totam rem aperiam. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant doloremque laudantium totam rem aperiam.</p>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant doloremque laudantium totam rem aperiam.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant doloremque laudantium totam rem aperiam.</p>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant doloremque laudantium totam rem aperiam.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="transaction" style={{ backgroundImage: `url(${require("../../static/images/landing-nftdapp/transaction-fees-background.png")})` }}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-11 offset-md-1 m-auto p-md-0">
              <div className="transaction-heading headinghp">
                <h1>TRANSACTION FEES</h1>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant <br></br> doloremque laudantium totam rem aperiam.</p>
              </div>
              <div className="row">
                <div className="col-lg-3 col-md-4 col-12">
                  <div className="inner-div-card">
                    <div className="image text-center">
                      <img src={require("../../static/images/landing-nftdapp/transaction-1.gif")} className="img-fluid" alt="" />
                    </div>
                    <div className="main-lower-div">
                      <h1>2%</h1>
                      <p>TRANSACTION FEES</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-12">
                  <div className="inner-div-card">
                    <div className="image text-center">
                      <img src={require("../../static/images/landing-nftdapp/transaction-2.gif")} className="img-fluid" alt="" />
                    </div>
                    <div className="main-lower-div">
                      <h1>3%</h1>
                      <p>MARKETING</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-12">
                  <div className="inner-div-card">
                    <div className="image text-center">
                      <img src={require("../../static/images/landing-nftdapp/transaction-3.gif")} className="img-fluid" alt="" />
                    </div>
                    <div className="main-lower-div">
                      <h1>2%</h1>
                      <p>REFLECTION</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-12">
                  <div className="inner-div-card">
                    <div className="image text-center">
                      <img src={require("../../static/images/landing-nftdapp/transaction-4.gif")} className="img-fluid" alt="" />
                    </div>
                    <div className="main-lower-div">
                      <h1>3%</h1>
                      <p>LIQUIDITY</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="roadmap" style={{ backgroundImage: `url(${require("../../static/images/landing-nftdapp/roadmap-new.png")})` }}>
        <div className="container-fluid">
          <div className="heading-text headinghp">
            <h1>ROADMAP</h1>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant <br></br> doloremque laudantium totam rem aperiam.</p>
          </div>
          <img src={require("../../static/images/landing-nftdapp/roadmap-line.png")} className="main-inner-image-side" alt="" />
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-12">
                <div className="inner-div-mains headinghp">
                  <h1>Q2</h1>
                  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant doloremque laudantium totam rem aperiam. </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-12">
                <div className="inner-div-main headinghp">
                  <h1>Q1</h1>
                  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant doloremque laudantium totam rem aperiam. </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Landing