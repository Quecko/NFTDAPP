import React from 'react'
import { css } from "@emotion/react";
import FadeLoader from "react-spinners/FadeLoader";
const override = css`
  display: block;
  margin: 0 auto;
  z-index:9999;
  margin-top: 130px;
  border-color: #fff;
`;
function Myloader(props) {
    return (     
        <>
        {props.active ?
        <div className="sweet-loading">
            <FadeLoader color={'#1D98FF'} text={'please Wait'}  css={override} size={150} />
        </div>:""
        }
        </>
    )
}

export default Myloader
