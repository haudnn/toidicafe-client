import axiosClient from './axiosClient';
// import {LoginPayload, RegisterPayload} from '../features/auth/interfaces'
const authApi = {
    register(payload:any) {
      const url = '/shops'
      return axiosClient.post(url,payload);
    },
    login(payload:any) {
      const url = '/users/login'
      return axiosClient.post(url,payload);
    },
  }

  export default authApi