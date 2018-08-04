import React from 'react';

import * as Markdown from 'react-markdown';

const BlogPost = props => (
  <div>
    <h1>{props.location.state.post.fields.title}</h1>
  </div>
);

export default BlogPost;
