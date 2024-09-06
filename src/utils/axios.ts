import axios from 'axios'

export const makeRequest = axios.create({
    baseURL: "https://story-lens-back-end.vercel.app/",
    withCredentials: true,
  });