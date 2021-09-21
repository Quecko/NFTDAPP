import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles';
// import InputLabel from '@material-ui/core/InputLabel';
// import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
// import NativeSelect from '@material-ui/core/NativeSelect';

import { useWeb3React } from '@web3-react/core'
import OwlCarousel from 'react-owl-carousel';
import './index.scss';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import Myloader from '../../components/Myloader';
import ReactPaginate from 'react-paginate';
import { Modal, ModalHeader, ModalBody } from "reactstrap";



const Collection = () => {
    let [loading, setLoading] = useState(false);
    const { account } = useWeb3React();
    console.log('account', account)
    const [page, setpage] = useState(1);
    const [newlisting, setListing] = useState([])
    const [limit] = useState(12);
    const [pageCount, setPageCount] = useState(0)
    const [per, setPer] = useState(0)
    const [USD, setUSD] = useState(0)
    const [obtain, setObtain] = useState([])
    const [recSold, setResSold] = useState([])
    const Ethprice = async () => {
        await axios.get('https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=BTC,USD,EUR')
            .then((response) => {
                setUSD(response.data.USD)

            })
    }
    const chain = {

        all: "http://54.191.140.38:38451/nft/getAllNft",
        eth: "http://54.191.140.38:38451/nft/getAllNftOfEth",
        bsc: "http://54.191.140.38:38451/nft/getAllNftOfBsc",
        matic: "http://54.191.140.38:38451/nft/getAllNftOfMatic",

    }
    const getAllNft = (url) => {
        setLoading(true)
        axios.post(url, { limit, page })
            .then(async (response) => {
                // setNft(response.data.data)
                // let array = response.data.data.slice(10, 17)
                // const array = response.data.data.slice(page, page + limit)
                setListing(response.data.data.ethNFT)
                setPageCount(response.data.data.count / limit)
                setLoading(false)
            });
    }

    const getPercen = () => {
        setLoading(true)
        axios.post("http://54.191.140.38:38451/nft/getSharePerAddress", { contract: '0x016c285d5b918b92aa85ef1e147498badfe30d69', address: account })
            .then(async (response) => {
                setPer(response.data.data)
                // setNft(response.data.data)
                // let array = response.data.data.slice(10, 17)
                // const array = response.data.data.slice(page, page + limit)
            });
    }
    const getObatained = () => {
        axios.post("http://54.191.140.38:38451/nft/getAllRecentlyObtained")
            .then(async (response) => {
                setObtain(response.data.data)
            });
    }

    const getSold = () => {
        axios.post("http://54.191.140.38:38451/nft/getAllRecentlySold", { limit, page })
            .then(async (response) => {
                console.log("asdfadsfas:::::", response)
                setResSold(response.data.data)
            });
    }

    const data = newlisting.map((elem) => {
        return (
            <div className="col-lg-3 col-md-4 col-12">
                <div className="card card-width" onClick={() => collection(elem)} >
                    <div className="upper-divs-triple">
                    {elem.imageUri ? <img src={elem.imageUri} className="" alt="" /> : <img src="./image-not-found.png" className="" alt="" /> }
                    </div>
                    <div className="lower-textss">
                        <h1>{elem.name} </h1>
                        <p>For sale for <span>{elem.price} {elem.chain}</span></p>
                    </div>
                </div>
            </div>
        )
    })

    const dataObtain = obtain.map((elem) => {
        return (
            <div className="item">
                <div className="card card-width">
                    <div className="upper-divs-triple">
                        {elem.imageUri ? <img src={elem.imageUri} className="" alt="" /> : <img src="./image-not-found.png" className="" alt="" /> }
                        
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
        )
    })

    const datasold = recSold.map((elem) => {
        return (

            <div className="col-lg-3 col-md-4 col-12">
                <div className="card card-width" onClick={() => collection(elem)}>
                    <div className="upper-divs-triple">
                    {elem.imageUri ? <img src={elem.imageUri} className="" alt="" /> : <img src="./image-not-found.png" className="" alt="" /> }
                    </div>
                    <div className="lower-textss">
                        <h1>{elem.name}</h1>
                        <p>Sale For <span>{elem.price} ETH</span></p>
                    </div>
                </div>
            </div>
        )
    })

    // Material ui drop down Start
    const useStyles = makeStyles((theme) => ({
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
    }));

    const classes = useStyles();
    const [state, setState] = React.useState('');
    const handleChange = (event) => {
        const name = event.target.value;
        if (event.target.value === 'all') {
            getAllNft(chain.all)
        } else if (event.target.value === 'eth') {
            getAllNft(chain.eth)
        } else if (event.target.value === 'bsc') {
            getAllNft(chain.bsc)
        } else {
            getAllNft(chain.matic)
        }
        console.log("e ma kia a rha ha", name)
        setState(event.target.value);
    };
    const handlePageClick = (e) => {
        const selectedPage = e.selected;
        setpage(selectedPage + 1)
        getAllNft()
    };
    // Material ui drop down End 


    const [open, setOpen] = useState(false)
    const [display, setDisplay] = useState({
        image: '',
        name: '',
        price: '',
        chain: '',
        permalink: '',
        priceETH: ''

    })

    const collection = (de) => {
        const ETH = parseFloat(de.price * per / 100).toFixed(15)
        console.log("eth price", ETH)
        setDisplay({ image: de.imageUri, name: de.name, price: de.price, chain: de.chain, permalink: de.permalink, priceETH: ETH })
        setOpen(true)

    }
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
        getAllNft(chain.all)
        getPercen()
        Ethprice()
        getSold()
        getObatained()
    }, [page])

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
                {/* <Myloader active={loading}/> */}
                <div className="auto-container">
                    <div className="main-head">
                        {per ? <h1>YOU OWN {parseFloat(per).toFixed(5)} % OF OUR COLLECTION</h1> : <h1>YOU OWN 0 % OF OUR COLLECTION</h1>}
                      
                        <div className="drop-down-material">
                            <h4>View </h4>
                            <FormControl variant="outlined" className={classes.formControl}>
                                {/* <InputLabel htmlFor="">Age</InputLabel> */}
                                <Select
                                    native
                                    value={state}
                                    onChange={handleChange}
                                    inputProps={{
                                        state
                                    }}
                                >
                                    <option className="main-boot" value={'10'}>Select Blockchains</option>
                                    <option className="main-boot" value={'all'}>All NFTs </option>
                                    <option className="main-boot" value={'eth'}>ETH NFTs </option>
                                    <option className="main-boot" value={"bsc"}>BSC NFTs</option>
                                    <option className="main-boot" value={"matic"}>MATIC NFTs</option>
                                </Select>
                            </FormControl>
                        </div>
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

            <section className="nft-collection">
                <div className="conatiner-fluid">
                    <div className="row">

                        <div className="col-md-11 offset-md-1 m-auto p-md-0">
                            <div className="heading-recent headinghp">
                                <h1>NFT Collection</h1>
                                {/* <button type="button">Sort By<img src={require("../../static/images/collection/arrow-d.png")} className="" alt="" /></button> */}
                            </div>
                            <div className="row">

                                {data}
                                <div className="col-md-12 text-center">
                                    <ReactPaginate
                                        previousLabel={<i class="fa fa-arrow-left arrow-aLL" aria-hidden="true"></i>}
                                        nextLabel={<i class="fa fa-arrow-right arrow-arr" aria-hidden="true"></i>}
                                        breakLabel={"..."}
                                        breakClassName={"break-me"}
                                        pageCount={pageCount}
                                        marginPagesDisplayed={2}
                                        pageRangeDisplayed={5}
                                        // itemsCountPerPage={10}
                                        // totalItemsCount={450}
                                        onPageChange={handlePageClick}
                                        containerClassName={"pagination"}
                                        subContainerClassName={"pages pagination"}
                                        activeClassName={"active"} />
                                </div>
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
                            <Myloader active={loading} />
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
                                {/* <button type="button">Sort By<img src={require("../../static/images/collection/arrow-d.png")} className="" alt="" /></button> */}
                            </div>
                            <div className="row">
                              {datasold}
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
                            <div className="col-md-5 upper-divs-triple">
                                <div className="text-head1">
                                {display.image ? <img src={display.image} className="" alt="" /> : <img src="./image-not-found.png" className="" alt="" /> }
                                </div>
                            </div>
                            <div className="col-md-7">
                                <div className="text-head">
                                    <h1>{display.name}</h1>
                                    <h2>For sale</h2>
                                    {per ?  <h3>You own {parseFloat(per).toFixed(5)} % of this NFT
                                        i.e {display.priceETH} {display.chain} (Approx $ {display.priceETH * USD})</h3> :  <h3>You own 0 % of this NFT
                                        i.e 0 {display.chain} (Approx $ 0)</h3> }
                                    {display.permalink && display.permalink !='' ?  <a href={display.permalink} target="_blank"> View Detail </a>:<div><p className="para">External link not found</p></div>}
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