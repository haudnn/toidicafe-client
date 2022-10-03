import axios, { AxiosResponse } from 'axios';
import AxiosConfig from 'axios';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../constants';
import Cookies from 'js-cookie'
import { setToken } from '../utils/localStorage';
const axiosClient = axios.create({
  baseURL: 'http://localhost:5000/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosClient.interceptors.response.use( (response: AxiosResponse) => response, async (error) => {
    const config = error.config;
    // if (
    //   error.response?.status === 403 && error.response.data.message === "Refresh token has expired") {
    //   window.location.href = '/login/';
    //   localStorage.removeItem(ACCESS_TOKEN)
    //   Cookies.remove(REFRESH_TOKEN)
    // }
    if (
      (error.response?.status === 401 || 403)  && (error.response.data.message === 'Authorization not valid' || "Authentication failed")
    ) {
      try {
        const refresh_token = Cookies.get(REFRESH_TOKEN)
        await AxiosConfig.post('http://localhost:5000/api/v1/users/refresh', {
          refresh_token
        })
        .then(response => {
          setToken(response.data.token)
          error.response.config.headers['Authorization'] = 'Bearer ' + response.data.token;       
          
        })
        return AxiosConfig(config);
      } catch (error) {
        return Promise.reject(error);
      }
    }
    return Promise.reject(error.response.data.message);
  }
);


export default axiosClient;