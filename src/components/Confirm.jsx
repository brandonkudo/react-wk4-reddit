import React from 'react';
import PropTypes from 'prop-types';

function Confirm(props) {
  return(
    <div>
      <p>Are you sure you want to post?</p>
      <button onClick={props.onConfirmation}>Yes</button>
    </div>
  );
}

Confirm.propTypes = {
  onConfirmation: PropTypes.func
};

export default Confirm;
