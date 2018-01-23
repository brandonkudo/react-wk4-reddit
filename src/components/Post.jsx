import React from 'react';
import PropTypes from 'prop-types';

class Post extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      upvotes: 0
    };
    this.upVote = this.upVote.bind(this);
    this.downVote = this.downVote.bind(this);
  }

  upVote() {
    let newVotes = this.state.upvotes;
    (newVotes+=1);
    this.setState({upvotes: newVotes});
  }

  downVote() {
    let newVotes = this.state.upvotes;
    (newVotes-=1);
    this.setState({upvotes: newVotes});
  }

  render() {
    return(
      <div>
        <button onClick={this.upVote}>Upvote</button>
        <p>{this.state.upvotes}</p>
        <button onClick={this.downVote}>Downvote</button>

        <p>{this.props.title}</p>
        <p>{this.props.description}</p>
      </div>
    );
  }

}

Post.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
};

export default Post;
