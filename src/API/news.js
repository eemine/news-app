import axios from "axios";

const BASE_URL = "https://some-blog-app.herokuapp.com/api/v1/news/bbc";

export const getHeadlines = category =>
  axios.get(`${BASE_URL}/headlines/${category}`);

export const getAllHeadlines = () =>
  axios.get(`${BASE_URL}/all-headlines`);

export const getCategories = () => axios.get(`${BASE_URL}/categories`);

export const getEachCategory = () => axios.get(`${BASE_URL}/top-news`);

export const getContent = id => axios.get(`${BASE_URL}/content/${id}`);
