import EventBus from 'eventing-bus';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody, Button } from "reactstrap";
import { HashLink } from 'react-router-hash-link';
import { connect } from "react-redux";
import MuiPhoneInput from 'material-ui-phone-number';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import './index.css';


import { web3 } from '../../store/web3';
import { message, networkId, explorer } from '../../store/config';

import { } from "../../store/actions/Auth";

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isWallet:false,
        };
    }

    connectWallet = async () => {
            this.setState({ isWallet:true })
    };
    SetWallet=()=>{
        this.setState({ isWallet:false })
    }

    render() {
        let { } = this.state;
        let { } = this.props;
        return (
            <div className="main-header">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
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
                                    <Link className='nav-link pr-lg-3' to='/sign-in'>HOME</Link>
                                </li>
                                <li className="nav-item active">
                                    {/* <Link className="nav-link  pr-lg-4" href="/poolss">Pool  <span className="sr-only">(current)</span></Link> */}
                                    <Link className='nav-link pr-lg-3' to='/sign-in'>NFTCOLLECTIONS</Link>
                                </li>
                            </ul>

                            <div className="button-head">
                            <button className="button-one" type="button" onClick={this.connectWallet}>Connect Wallet</button>
                                {/* <button className="button-one" type="button">Connect Wallet</button> */}
                            </div>
                            {/* ------------------Connect Wallet MODAL----------------- */}
                            <Modal isOpen={this.state.isWallet} toggle={()=>this.SetWallet()}  className="register-modal connect-modal">
                                <ModalHeader toggle={()=>this.SetWallet()}>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
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
                            </Modal>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

const mapDispatchToProps = {};

const mapStateToProps = ({ Auth }) => {
    let { } = Auth;
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);