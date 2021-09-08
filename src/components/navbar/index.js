import { Link } from 'react-router-dom';
import React from 'react';
import { useWeb3React } from '@web3-react/core'
import useAuth from '../../hooks/useAuth'
import './index.scss';

import { } from "../../store/actions/Auth";

const Navbar = () => {
    const { account } = useWeb3React();
    const { login, logout } = useAuth();

    const ConnectionHandler = () => {
        if (account) {
            logout()
            localStorage.setItem('flag',false)
        } else {
            login("injected")
            localStorage.setItem('flag',true)
        }
    }
     
    return (
        <div className="main-header">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-11 offset-md-1 m-auto p-md-0">
                        <nav className="navbar navbar-expand-lg">
                            <Link className="navbar-brand" to="/"><img src={require("../../static/images/landing-nftdapp/logo-header.png")} alt="" /></Link>
                            <button className="navbar-toggler" type="button" data-toggle="collapse"
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
                                    <button className="button-one" type="button" onClick={ConnectionHandler}>{account ? "Disconnect Wallet" : "Connect Wallet"}</button>
                                    {/* <button className="button-one" type="button">Connect Wallet</button> */}
                                </div>
                                {/* ------------------Connect Wallet MODAL----------------- */}
                                {/* <Modal isOpen={this.state.isWallet} toggle={()=>this.SetWallet()}  className="register-modal connect-modal">
                                <ModalHeader toggle={()=>this.SetWallet()} className="header-new">
                                    <button type="button" class="close close-new" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </ModalHeader>
                                <ModalBody className="modal-body">
                                    <div className="container main-divs">
                                        <h1>Select Wallet Provider</h1>
                                        <div className="meta-mask">
                                            <Link className="main-link-meta" href="#"><img src={require("../../static/images/landing-leocorn/Group 16.png")} alt="" /></Link>
                                        </div>
                                        <div className="scan-wallet">
                                            <Link className="main-link-meta" href="#"><img src={require("../../static/images/landing-leocorn/sacn-wallet.png")} alt="" /></Link>
                                            <h1>WalletConnect</h1>
                                            <Link className="link-scan" href="#"><p>Scan with WalletConnect to Connect</p></Link>
                                        </div>
                                        <p className="main-term">By connecting, I accept LEOCORN's   <Link className="link-scan" href="#">Terms of Service</Link></p>
                                    </div>
                                </ModalBody>
                            </Modal> */}
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;