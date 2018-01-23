import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function NewPostForm(props) {
  let _title = null;
  let _description = null;

  function handleSubmission(event) {
    event.preventDefault();
    props.onPostCreation({title: _title.value, description: _description.value, id: v4()});
    _title.value = '';
    _description.value = '';
  }

  return(
    <div>
      <form onSubmit={handleSubmission}>
        <input
          type='text'
          id='title'
          placeholder='Title'
          ref={(input) => {_title = input;}}
        />
        <textarea
          type='text'
          id='description'
          placeholder='Description'
          ref={(textarea) => {_description = textarea;}}
        />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

NewPostForm.propTypes = {
  onPostCreation: PropTypes.func
};

export default NewPostForm;
