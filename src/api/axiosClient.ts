import axios, { AxiosResponse } from 'axios';
import AxiosConfig from 'axios';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../constants';
import Cookies from 'js-cookie'
const axiosClient = axios.create({
  baseURL: 'http://localhost:5000/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosClient.interceptors.response.use( (response: AxiosResponse) => response, async (error) => {
    const config = error.config;
    if (
      error.response?.status === 403 && error.response.data.message === "Refresh token has expired") {
      window.location.href = '/login/';
    //   removeCookie('access_token', { path: '' });
    //   removeCookie('refresh_token', { path: '' });
      localStorage.removeItem(ACCESS_TOKEN)
      Cookies.remove(REFRESH_TOKEN)
    }
    if (
      error.response?.status === 401 &&
      error.response.data.message === 'Authorization not valid'
    ) {
      try {
        const refresh_token = Cookies.get(REFRESH_TOKEN)
        const response = await AxiosConfig.post('/users/refresh', refresh_token);
        localStorage.setItem(ACCESS_TOKEN , response.data.user.token)
        return AxiosConfig(config);
      } catch (error) {
        return Promise.reject(error);
      }
    }
    return Promise.reject(error.response.data.message);
  }
);


export default axiosClient;