import { FETCH_POSTS } from 'actions';

const INITIAL_STATE = { all: [] };
let data = [];

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_POSTS:
      data = action.payload.data.items;
      return { ...state, all: data };
    default:
      return state;
  }
}
