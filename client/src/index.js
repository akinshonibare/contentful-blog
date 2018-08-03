import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';
import ReduxPromise from 'redux-promise';
import BlogHome from 'views/BlogHome';
import BlogPost from 'components/BlogPost';
import 'style/style.css';
// import 'style/card.css';
import reducers from 'reducers';
require('dotenv').config();

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Route exact path="/" component={BlogHome} />
        <Route path="/blog/:blogPost" component={BlogPost} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
