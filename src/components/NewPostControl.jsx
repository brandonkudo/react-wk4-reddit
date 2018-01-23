import React from 'react';
import Confirm from './Confirm';
import NewPostForm from './NewPostForm';
import PropTypes from 'prop-types';

class NewPostControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.handleConfirmation = this.handleConfirmation.bind(this);
  }

  handleConfirmation() {
    this.setState({formVisibleOnPage: true});
  }

  render() {
    let currentlyVisibleContent = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleContent = <NewPostForm onPostCreation={this.props.onPostCreation}/>;
    } else {
      currentlyVisibleContent = <Confirm onConfirmation={this.handleConfirmation}/>;
    }
    return(
      <div>
        {currentlyVisibleContent}
      </div>
    );
  }

}

NewPostControl.propTypes = {
  onNewPostCreation: PropTypes.func
};

export default NewPostControl;
