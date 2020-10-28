import React,{Fragment} from 'react';
import imagen from '../img/banner.jpg';
import styled from '@emotion/styled'

const Img = styled.img`
    height:1vh;

    @media(max-width : 600px) {
      width:200px;

}  
`
const Banner = () => {
    return ( 
        <Fragment>
         <div id="index-banner" className="parallax-container">
    <div className="section no-pad-bot">
    </div>
    <div className="parallax">
    <Img src={imagen}/>
    </div>
  </div>
        </Fragment>
        
     );
}
 
export default Banner;