import axios from 'axios';

export const getNewsHeadlines = () => axios.get('https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=4599907559cf42af8ca9a984fb661c39')
