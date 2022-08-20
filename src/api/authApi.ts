import axiosClient from './axiosClient';
import {LoginPayload, RegisterPayload} from '../features/auth/interfaces'
const authApi = {
    register(payload:any) {
      const url = '/users/register'
      return axiosClient.post(url,payload);
    },
    login(payload:LoginPayload) {
      const url = '/users/login'
      return axiosClient.post(url,payload);
    },
  }

  export default authApi