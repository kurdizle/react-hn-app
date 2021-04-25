import axios from 'axios';

const config = {
  baseUrl: 'https://api.hnpwa.com/v0',
};

const fetchNews = () => {
  return axios.get(`${config.baseUrl}/news/1.json`);
};

const fetchNewest = () => {
  return axios.get(`${config.baseUrl}/newest/1.json`);
};

const fetchAsk = () => {
  return axios.get(`${config.baseUrl}/ask/1.json`);
};

const fetchShow = () => {
  return axios.get(`${config.baseUrl}/show/1.json`);
};

const fetchJobs = () => {
  return axios.get(`${config.baseUrl}/jobs/1.json`);
};

const fetchItemDetail = (id) => {
  return axios.get(`${config.baseUrl}/item/${id}.json`);
};

const fetchUserDetail = (user) => {
  return axios.get(`${config.baseUrl}/user/${user}.json`);
};

export {
  fetchNews,
  fetchNewest,
  fetchAsk,
  fetchShow,
  fetchJobs,
  fetchItemDetail,
  fetchUserDetail,
};
