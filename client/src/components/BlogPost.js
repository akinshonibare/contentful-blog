import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from 'actions';

import * as Markdown from 'react-markdown';

class BlogPost extends Component {
  render() {
    return <div />;
  }
}

function mapStateToProps(state) {
  return { posts: state.posts.all };
}

export default connect(
  mapStateToProps,
  { fetchPosts }
)(BlogPost);
