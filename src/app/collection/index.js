import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { useWeb3React } from '@web3-react/core'
import OwlCarousel from 'react-owl-carousel';
import './index.scss';
import { css } from "@emotion/react";
import RingLoader from "react-spinners/RingLoader";
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Myloader from '../../components/Myloader';
import ReactPaginate from 'react-paginate';
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
// const override = css`
//   display: block;
//   margin: 0 auto;
//   position: relative;
//   top: 144px;
//   margin-top: 100px;
//   color: #2dc6fe;
//   background-color: rgba(0, 0, 0, 0.5);
// `;
const Collection = () => {
    let [loading, setLoading] = useState(false);
    const { account } = useWeb3React();
    console.log('account', account)
    const [offset, setOffset] = useState(0);
    const [nft, setNft] = useState([])
    const [newlisting, setListing] = useState([])
    const [perPage] = useState(8);
    const [pageCount, setPageCount] = useState(0)
    const getAllNft = () => {
        setLoading(true)
        axios.get("http://192.168.18.71:3000/nft/getAllNftOfEth")
            .then(async (response) => {
                // setNft(response.data.data)
                // let array = response.data.data.slice(0, 8)
                const array = response.data.data.slice(offset, offset + perPage)

                let promises = []

                for (let elem of array) {
                    promises.push(axios.get(elem.token_uri));
                }
                let mainData = await Promise.all(promises)
                let tempData = array.map((elem, i) => {
                    return (
                        <div className="col-lg-3 col-md-4 col-12">
                            <div className="card card-width" onClick={collection}>
                                <div className="upper-divs-triple">
                                    <img src={mainData[i].data.image} className="" alt="" />
                                </div>
                                <div className="lower-textss">
                                    <h1>{elem.name} {elem.token_id}</h1>
                                    <p>For sale for <span>0.04 ETH ($131.31)</span></p>
                                </div>
                            </div>
                        </div>
                    )
                })
                setListing(tempData)
                setPageCount(Math.ceil(array.length / perPage))
                setLoading(false)
            });
    }
    const handlePageClick = (e) => {
        const selectedPage = e.selected;
        setOffset(selectedPage + 1)
    };

    const [open, setOpen] = useState(false)

    const collection = async () => {
        setOpen(true)
    };
    const close = async () => {
        setOpen(false)
    };


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

    useEffect(() => {
        getAllNft()
    }, [account])

    // const newlisting = nft.slice(0, 8).map(async(elem) => {
    //     const url="https://api.artblocks.io/token/6279"
    //     let {data}= await axios.get(url);
    //     return (
    //         <div className="col-lg-3 col-md-4 col-12">
    //             <div className="card card-width" onClick={collection}>
    //                 <div className="upper-divs-triple">
    //                     <img src={data.image} className="" alt="" />
    //                 </div>
    //                 <div className="lower-textss">
    //                     <h1>{elem.name} {elem.token_id}</h1>
    //                     <p>For sale for <span>0.04 ETH ($131.31)</span></p>
    //                 </div>
    //             </div>
    //         </div>
    //     )
    // });


    return (


        <div className='landing-nft main-collection'>
            <Navbar />
            <section className="header-section">
                <video className="banner-video"
                    autoPlay loop muted
                >
                    <source src={require("../../static/images/landing-nftdapp/landing-bac-vid.mp4")} type="video/mp4" />
                </video>
                <img src={require("../../static/images/landing-nftdapp/Intersect.png")} className="main-heads-one" alt="" />
               <Myloader active={loading}/>
               
                <div className="auto-container">
                    <div className="main-head">
                        <h1>YOU OWN 10% ($324.45) OF OUR COLLECTION</h1>
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
                                                <div className="item">
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
                                                </div>
                                            </OwlCarousel>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="nft-collection">
                <div className="conatiner-fluid">
                    <div className="row">
                        <div className="col-md-11 offset-md-1 m-auto p-md-0">
                            <div className="heading-recent headinghp">
                                <h1>NFT Collection</h1>
                                <button type="button">Sort By<img src={require("../../static/images/collection/arrow-d.png")} className="" alt="" /></button>
                            </div>
                            <div className="row">
                                {newlisting}

                                <ReactPaginate
                                    previousLabel={"prev"}
                                    nextLabel={"next"}
                                    breakLabel={"..."}
                                    breakClassName={"break-me"}
                                    pageCount={pageCount}
                                    marginPagesDisplayed={2}
                                    pageRangeDisplayed={5}
                                    onPageChange={handlePageClick}
                                    containerClassName={"pagination"}
                                    subContainerClassName={"pages pagination"}
                                    activeClassName={"active"} />

                                {/* <div className="col-lg-3 col-md-4 col-12">
                                    <div className="card card-width" onClick={collection}>
                                        <div className="upper-divs-triple">
                                            <img src={require("../../static/images/collection/colup2.png")} className="" alt="" />
                                        </div>
                                        <div className="lower-textss">
                                            <h1>#102 EVOL Chux</h1>
                                            <p>For sale for <span>0.04 ETH ($131.31)</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-12">
                                    <div className="card card-width" onClick={collection}>
                                        <div className="upper-divs-triple">
                                            <img src={require("../../static/images/collection/colup3.png")} className="" alt="" />
                                        </div>
                                        <div className="lower-textss">
                                            <h1>#102 EVOL Chux</h1>
                                            <p>For sale for <span>0.04 ETH ($131.31)</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-12">
                                    <div className="card card-width" onClick={collection}>
                                        <div className="upper-divs-triple">
                                            <img src={require("../../static/images/collection/colup4.png")} className="" alt="" />
                                        </div>
                                        <div className="lower-textss">
                                            <h1>#102 EVOL Chux</h1>
                                            <p>For sale for <span>0.04 ETH ($131.31)</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-12">
                                    <div className="card card-width" onClick={collection}>
                                        <div className="upper-divs-triple">
                                            <img src={require("../../static/images/collection/colup5.png")} className="" alt="" />
                                        </div>
                                        <div className="lower-textss">
                                            <h1>#102 EVOL Chux</h1>
                                            <p>For sale for <span>0.04 ETH ($131.31)</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-12">
                                    <div className="card card-width" onClick={collection}>
                                        <div className="upper-divs-triple">
                                            <img src={require("../../static/images/collection/colup6.png")} className="" alt="" />
                                        </div>
                                        <div className="lower-textss">
                                            <h1>#102 EVOL Chux</h1>
                                            <p>For sale for <span>0.04 ETH ($131.31)</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-12">
                                    <div className="card card-width" onClick={collection}>
                                        <div className="upper-divs-triple">
                                            <img src={require("../../static/images/collection/colup7.png")} className="" alt="" />
                                        </div>
                                        <div className="lower-textss">
                                            <h1>#102 EVOL Chux</h1>
                                            <p>For sale for <span>0.04 ETH ($131.31)</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-12">
                                    <div className="card card-width" onClick={collection}>
                                        <div className="upper-divs-triple">
                                            <img src={require("../../static/images/collection/colup8.png")} className="" alt="" />
                                        </div>
                                        <div className="lower-textss">
                                            <h1>#102 EVOL Chux</h1>
                                            <p>For sale for <span>0.04 ETH ($131.31)</span></p>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="recently-sold">
                <div className="conatiner-fluid">
                    <div className="row">
                        <div className="col-md-11 offset-md-1 m-auto p-md-0">
                            <div className="heading-recent headinghp">
                                <h1>Recently Sold</h1>
                                <button type="button">Sort By<img src={require("../../static/images/collection/arrow-d.png")} className="" alt="" /></button>
                            </div>
                            <div className="row">
                                <div className="col-lg-3 col-md-4 col-12">
                                    <div className="card card-width" onClick={collection}>
                                        <div className="upper-divs-triple">
                                            <img src={require("../../static/images/collection/colup1.png")} className="" alt="" />
                                        </div>
                                        <div className="lower-textss">
                                            <h1>#102 EVOL Chux</h1>
                                            <p>For sale for <span>0.04 ETH ($131.31)</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-12">
                                    <div className="card card-width" onClick={collection}>
                                        <div className="upper-divs-triple">
                                            <img src={require("../../static/images/collection/colup2.png")} className="" alt="" />
                                        </div>
                                        <div className="lower-textss">
                                            <h1>#102 EVOL Chux</h1>
                                            <p>For sale for <span>0.04 ETH ($131.31)</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-12">
                                    <div className="card card-width" onClick={collection}>
                                        <div className="upper-divs-triple">
                                            <img src={require("../../static/images/collection/colup3.png")} className="" alt="" />
                                        </div>
                                        <div className="lower-textss">
                                            <h1>#102 EVOL Chux</h1>
                                            <p>For sale for <span>0.04 ETH ($131.31)</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-12">
                                    <div className="card card-width" onClick={collection}>
                                        <div className="upper-divs-triple">
                                            <img src={require("../../static/images/collection/colup4.png")} className="" alt="" />
                                        </div>
                                        <div className="lower-textss">
                                            <h1>#102 EVOL Chux</h1>
                                            <p>For sale for <span>0.04 ETH ($131.31)</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-12">
                                    <div className="card card-width" onClick={collection}>
                                        <div className="upper-divs-triple">
                                            <img src={require("../../static/images/collection/colup5.png")} className="" alt="" />
                                        </div>
                                        <div className="lower-textss">
                                            <h1>#102 EVOL Chux</h1>
                                            <p>For sale for <span>0.04 ETH ($131.31)</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-12">
                                    <div className="card card-width" onClick={collection}>
                                        <div className="upper-divs-triple">
                                            <img src={require("../../static/images/collection/colup6.png")} className="" alt="" />
                                        </div>
                                        <div className="lower-textss">
                                            <h1>#102 EVOL Chux</h1>
                                            <p>For sale for <span>0.04 ETH ($131.31)</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-12">
                                    <div className="card card-width" onClick={collection}>
                                        <div className="upper-divs-triple">
                                            <img src={require("../../static/images/collection/colup7.png")} className="" alt="" />
                                        </div>
                                        <div className="lower-textss">
                                            <h1>#102 EVOL Chux</h1>
                                            <p>For sale for <span>0.04 ETH ($131.31)</span></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-12">
                                    <div className="card card-width" onClick={collection}>
                                        <div className="upper-divs-triple">
                                            <img src={require("../../static/images/collection/colup8.png")} className="" alt="" />
                                        </div>
                                        <div className="lower-textss">
                                            <h1>#102 EVOL Chux</h1>
                                            <p>For sale for <span>0.04 ETH ($131.31)</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ------------------Connect Wallet MODAL----------------- */}
            <Modal isOpen={open} className="register-modal collection-modal">
                <ModalHeader >
                    <button type="button" class="close" data-dismiss="modal" onClick={close} aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </ModalHeader>
                <ModalBody className="modal-body">
                    <div className="container-fluid main-divs">
                        <div class="row">
                            <div className="col-md-5">
                                <img src={require("../../static/images/collection/modal-image.png")} className="img-collection" alt="" />
                            </div>
                            <div className="col-md-7">
                                <div className="text-head">
                                    <h1>#06 EVOL Guns & Roses</h1>
                                    <h2>For sale for</h2>
                                    <h3>You own 10% of this NFT
                                        i.e 0.004 ETH ($12.48)</h3>
                                    <button type="button">VIEW ON RARIBLE</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </ModalBody>
            </Modal>
            <Footer />
        </div>
    );

}


export default Collection