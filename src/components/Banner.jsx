import React from 'react';
import banner from '../assets/images/banner-home.jpg';


function Banner(props){

  const styles = {
    parentStyles: {
      position: 'relative',
      width: '100vw',
      textAlign: 'center',
      backgroundImage: 'url('+banner+')',
      height: '100vh'
    },
    childStyles: {
      position: 'absolute',
      top: '30%',
      left: '0',
      right: '0',
      zIndex: '1',
      color: '#000',
      fontSize: '120px',
      textAlign: 'center'
    },
    imageStyles: {
      width: '100vw',
      zIndex: '0'
    }
  }


  return(
    <div style={styles.parentStyles}>
      <h1 style={styles.childStyles}>{props.bannerText}</h1>
    </div>
  )
}

export default Banner;
