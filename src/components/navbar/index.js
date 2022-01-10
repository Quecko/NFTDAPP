import { Link } from 'react-router-dom';
import React,  { useState} from 'react';
import { useWeb3React } from '@web3-react/core'
import useAuth from '../../hooks/useAuth'
import './index.scss';
import { Modal, ModalHeader, ModalBody} from "reactstrap";
import { } from "../../store/actions/Auth";

const Navbar = () => {
    const { account } = useWeb3React();
    const { login, logout } = useAuth();
    const [open, setOpen] = useState(false)
    const collection = ()=> {
        setOpen(true) 
        if(account){
            setOpen(false)
            logout()
        }
        // if(account){
        //     logout()
        //     localStorage.setItem('flag',false)
        //     setOpen(true)  
        // }else{
        //     login("injected" );
        //     localStorage.setItem('flag',true)
        //     localStorage.setItem('injected',"injected")
        //     setOpen(false)
        // }
         
    }

    const close = async () => {
        setOpen(false)
    };

    const ConnectionHandler = () => {
        if (account) {
            logout()
            setOpen(true) 
            localStorage.setItem('flag',false)
        } else {
            login("injected")
            localStorage.setItem('flag',true)
            localStorage.setItem('injected',"injected")
        }
    }

    const Connect = () => {
        if (account) {
            logout()
            localStorage.setItem('flag',false)
        } else {
            login("walletconnect")
            setOpen(true) 
            localStorage.setItem('flag',true)
            localStorage.setItem('walletconnect',"walletconnect")
        }
    }
     
    return (
        <div className="main-header">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-11 offset-md-1 m-auto p-md-0">
                        <nav className="navbar navbar-expand-lg">
                            <Link className="navbar-brand" to="/"><img src={require("../../static/images/landing-nftdapp/logo-header.svg")} alt="" /></Link>
                            <button className="navbar-toggler collapsed" type="button" data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                                aria-label="Toggle navigation">
                                <div class="hamburger">
                                    <span class="bar"></span>
                                    <span class="bar"></span>
                                    <span class="bar"></span>
                                </div>
                            </button>
                            <div className="collapse navbar-collapse nav-links" id="navbarSupportedContent">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item active">
                                        {/* <Link className="nav-link  pr-lg-4" href="/poolss">Pool  <span className="sr-only">(current)</span></Link> */}
                                        <Link className='nav-link pr-lg-3' to='/'>HOME</Link>
                                    </li>
                                    <li className="nav-item active">
                                        {/* <Link className="nav-link  pr-lg-4" href="/poolss">Pool  <span className="sr-only">(current)</span></Link> */}
                                        <Link className='nav-link pr-lg-3' to='/collection'>NFT COLLECTIONS</Link>
                                    </li>
                                </ul>

                                <div className="button-head">
                                    <button className="button-one" type="button" onClick={collection}>{account?"Disconnect Wallet":"Connect Wallet"}</button>
                                </div>
                                {/* ------------------Connect Wallet MODAL----------------- */}
                                <Modal isOpen={open}   className="register-modal connect-modal">
                                <ModalHeader className="header-new">
                                <button type="button" class="close" data-dismiss="modal" onClick={close} aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                                </button>               
                                </ModalHeader>
                                <ModalBody className="modal-body">
                                    <div className="container main-divs">
                                        <h1>Select Wallet Provider</h1>
                                        <div className="meta-mask">   
                                            <button className="btn1"  onClick={ConnectionHandler}>
                                            <Link className="main-link-meta" href="#"><img src={require("../../static/images/landing-leocorn/Group 16.png")} alt="" /> </Link>
                                            </button>
                                        </div>
                                        <div className="scan-wallet">
                                        <button className="btn1"  onClick={Connect}>
                                            <Link className="main-link-meta" href="#"><img src={require("../../static/images/landing-leocorn/sacn-wallet.png")} alt="" /><h6>Wallet Connect</h6></Link>
                                            <Link className="link-scan" href="#"><p>Scan with WalletConnect to Connect</p></Link>
                                            </button>
                                          
                                        </div>
                                    </div>
                                </ModalBody>
                            </Modal>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;