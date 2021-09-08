import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './index.scss';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {};

    }

    render() {
        return (
            <footer className="main-footer-outer">
                <div className="main-footer">
                    <img src={require("../../static/images/landing-nftdapp/logo-footer.png")} className="main-heads-one" alt="" />
                    <div className="footer-socials-all">
                        <Link className='footer-social'> <img src={require("../../static/images/landing-nftdapp/footer-1.png")} alt="" /></Link>
                        <Link className='footer-social'> <img src={require("../../static/images/landing-nftdapp/footer-2.png")} alt="" /></Link>
                        <Link className='footer-social'> <img src={require("../../static/images/landing-nftdapp/footer-3.png")} alt="" /></Link>
                        <Link className='footer-social'> <img src={require("../../static/images/landing-nftdapp/footer-4.png")} alt="" /></Link>
                    </div>
                </div>

            </footer>
        );
    }
}

export default Footer;