import React,{useEffect, useState,Fragment} from 'react';
import styled from '@emotion/styled';
import Header from './components/Header';
import Banner from './components/Banner';
import Footer from './components/Footer';


function App() {
  return (
    <Fragment>
    <Header/>

    <Banner/>
    <Footer/>
    </Fragment>
    

  );
}

export default App;
