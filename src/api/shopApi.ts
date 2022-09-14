
import axiosClient from './axiosClient';
// import {LoginPayload, RegisterPayload} from '../features/auth/interfaces'
const shopApi = {
    getDataSearch(url:string) {
      return axiosClient.get(url);
    },
    searchPlace(payload:any) {
      const url = '/shops/search';
      return axiosClient.post(url, payload);
    }
  }

export default shopApi