import axios from 'axios';

const baseAPI = axios.create({ baseURL: 'http://localhost:3001' });
// const baseAPI = axios.create({ baseURL: 'https://vcuapi.kopkaraerospace.com' });

// instance.defaults.headers.common['Authorization'] = token;
// instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export {
  baseAPI
};
