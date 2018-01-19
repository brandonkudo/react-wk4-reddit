import React from 'react';
import Banner from './Banner';
import banner from '../assets/images/banner-home.jpg';


function Splash(){

  const styles = {
    fontSize: '10px',
    pStyle: {
      color: 'red'
    },
    h2Style: {
      color: 'blue',
      fontSize: '80px'
    }
  };
  return (
    <div>
      <Banner bannerText='Welcome!' />




      <h2 style={styles.h2Style}>Some tagline goes here</h2>
      <h1 style={styles}>asdfasdfasfd</h1>
      <p style={styles.pStyle}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
  );
}

export default Splash;
