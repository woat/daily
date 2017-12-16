import axios from 'axios'

const baseURL = 'http://localhost:3000';

export default () => {
  return axios.create({
    baseURL,
    // headers: { auth: token }
  });
};
