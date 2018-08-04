import axios from 'axios';
export const FETCH_POSTS = 'fetch_posts';

const API_BASE_URL = 'https://cdn.contentful.com';
const API_SPACE_ID = '20a7sbfc4t8i';
const API_TOKEN =
  '4cd3007ae3881c881bc4784d6cebb86cc60236107d75fb5af840f4026221727f';

export function fetchPosts() {
  const request = axios.get(
    `${API_BASE_URL}/spaces/${API_SPACE_ID}/entries?access_token=${API_TOKEN}`
  );
  return {
    type: FETCH_POSTS,
    payload: request
  };
}
