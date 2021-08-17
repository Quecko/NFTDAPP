import EventBus from "eventing-bus";
import { connect } from "react-redux";
import React, { Component } from 'react';
import { TextField } from '@material-ui/core';
import { Send, CheckCircle, Info, Error, Done, Facebook, Twitter, Instagram, LinkedIn, LiveTvRounded } from '@material-ui/icons';
import OwlCarousel from 'react-owl-carousel';
import './index.css';
import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class Landing extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  };
  render() {
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

    return (
      <div className='landing-nft'>

        <Navbar />

        <section className="header-section" style={{ backgroundImage: `url(${require("../../static/images/landing-nftdapp/background.png")})` }}>
          {/* <img src={require("../../static/images/landing-nftdapp/.png")} className="main-heads-one" alt="" /> */}
          <img src={require("../../static/images/landing-nftdapp/Intersect.png")} className="main-heads-one" alt="" />
          <div className="auto-container">
            <div className="main-head">
              <h1>YOU OWN X% OF OUR COLLECTION</h1>
              <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
              <button className="header-button" type="button">BUY</button>
              <button className="header-button" type="button">CHART</button>
              <button className="header-button" type="button">JOIN TG</button>
            </div>
          </div>
        </section>

        <section className="recently-obtain-nft">
          <div className="auto-container">
            <div className="main-caresousal">
              <div className="heading-recent">
                <h1>RECENTLY OBTAINED NFTS</h1>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant doloremque laudantium totam rem aperiam.</p>
              </div>
              <div className="row">
                <div className="col-lg-10 offset-lg-1 col-md-12 offset-md-0">
                  <div className="first-second">

                    <OwlCarousel className="slider-items owl-carousel ltf-owl" autoplaySpeed={5000}  {...owl_option}>
                      <div class="item">
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
                      <div class="item">
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
                      <div class="item">
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
                      <div class="item">
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
                      </div>

                    </OwlCarousel>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="why-invest">
          <div className="auto-container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-12 col-12">
                <div className="text-left">
                  <h1>WHY INVEST WITH NFTDAPP?</h1>
                  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant doloremque laudantium totam rem aperiam. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant doloremque laudantium totam rem aperiam.</p>
                  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant doloremque laudantium totam rem aperiam.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant doloremque laudantium totam rem aperiam.</p>
                  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant doloremque laudantium totam rem aperiam.</p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-12 col-12">
                <div className="main-image-div">
                  <img src={require("../../static/images/landing-nftdapp/Illustration.png")} className="" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="why-does-our-token">
          <div className="auto-container">
            <div className="row">
              <div className="col-lg-6 col-md-12 col-12">
                <div className="main-image-div">
                  <img src={require("../../static/images/landing-nftdapp/Illustration-1.png")} className="" alt="" />
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-12">
                <div className="text-leftt">
                  <h1>WHAT DOES OUR TOKEN GIVE YOU?</h1>
                  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant doloremque laudantium totam rem aperiam. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant doloremque laudantium totam rem aperiam.</p>
                  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant doloremque laudantium totam rem aperiam.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant doloremque laudantium totam rem aperiam.</p>
                  <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant doloremque laudantium totam rem aperiam.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="transaction" style={{ backgroundImage: `url(${require("../../static/images/landing-nftdapp/transaction-fees-background.png")})` }}>
          <div className="container-fluid">
            <div className="transaction-heading">
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
        </section>

        <section className="roadmap" style={{ backgroundImage: `url(${require("../../static/images/landing-nftdapp/roadmap-new.png")})` }}>
          <div className="container-fluid">
            <div className="heading-text">
              <h1>ROADMAP</h1>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant <br></br> doloremque laudantium totam rem aperiam.</p>
            </div>
            <img src={require("../../static/images/landing-nftdapp/roadmap-line.png")} className="main-inner-image-side" alt="" />
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-12">
                  <div className="inner-div-mains">
                    <h1>Q2</h1>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant doloremque laudantium totam rem aperiam. </p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                  <div className="inner-div-main">
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
}


const mapDispatchToProps = {
};

const mapStateToProps = ({ }) => {
  return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(Landing);