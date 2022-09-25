import axios from "axios";
const url = "https://api.tvmaze.com/search";

export const fetchData = (type, searchKeyWord) => {
  axios.get(`${url}/${type}/${searchKeyWord}`);
};
export const postData = (newPost) => axios.post(url, newPost);
