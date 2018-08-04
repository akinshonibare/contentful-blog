import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from 'actions';

class BlogItem extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    return this.props.posts.map((post, index) => {
      return (
        <div className="paper" key={post.fields.id}>
          <div>
            <img src={post.fields.imgUrl} alt="" />
          </div>
          <div>
            <h2>{post.fields.title}</h2>
            <hr />
            <p>{post.fields.content.slice(0, 65)}...</p>
            {post.fields.date.slice(0, 10)}
            /
            <Link
              to={{
                pathname: `/blog/${post.fields.id}`,
                state: { post }
              }}>
              Read More
            </Link>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="blog">
        <h3>BLOG</h3>
        <div className="blogposts">{this.renderPosts()}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts.all };
}

export default connect(
  mapStateToProps,
  { fetchPosts }
)(BlogItem);
