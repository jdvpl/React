import React,{Fragment} from 'react';
import imagen from '../img/banner.jpg';
import styled from '@emotion/styled'

const Img = styled.img`
    height:1vh;

    @media(max-width : 600px) {
      width:200px;

}  
`
const H5 = styled.h5`
    color: #ff0000;
    font-weight:bold;
    
`
const Banner = () => {
    return ( 
        <Fragment>
         <div id="index-banner" class="parallax-container">
    <div class="section no-pad-bot">
    </div>
    <div className="parallax">
    <Img src={imagen}/>
    </div>
  </div>
        </Fragment>
        
     );
}
 
export default Banner;