import React from "react";
import { Header, } from 'semantic-ui-react';
import '../styles/Home.css';


const Home = () => (
  <div>
    <br />
    <br />
    <br />
    <div className="main-header">
      <Header as='h1' textAlign='center'className='header-color'> WELCOME </Header>
      <Header sub textAlign='center' inverted> ( Not a Real Blog ) </Header>
    </div>
    <div className='copyright-line'>
      <Header inverted as='h5' textAlign='center'> © Simian Matagi Development. All rights reserved.</Header>
    </div>
  </div>
);


export default Home;