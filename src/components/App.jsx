import React from 'react';
import Header from './Header';
import AboutUs from './AboutUs';
import Splash from './Splash';
import Contact from './Contact';
import {  Switch, Route } from 'react-router-dom';

function App(){
  return(
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={Splash} />
        <Route path='/AboutUs' component={AboutUs} />
        <Route path='/Contact' component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
