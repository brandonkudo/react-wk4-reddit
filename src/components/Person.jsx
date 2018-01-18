import React from 'react';

function Person(props){
  return(
    <div>
      <img src={props.image} />
      <h3>{props.name}</h3>
      <p>{props.bio}</p>
      <hr/>
    </div>
  );
}



export default Person;
