import React from 'react';
import PropTypes from 'prop-types';

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

Person.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired
};

export default Person;
