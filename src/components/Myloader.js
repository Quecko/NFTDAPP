import React from 'react'
import { css } from "@emotion/react";
import RingLoader from "react-spinners/RingLoader";
const override = css`
  display: block;
  margin: 0 auto;
 
  margin-top: 100px;
`;
function Myloader(props) {
    return (     
        <>
        {props.active ?
        <div className="sweet-loading">
            <RingLoader color={'#1D98FF'}  css={override} size={150} />
        </div>:""
        }
        </>
    )
}

export default Myloader
