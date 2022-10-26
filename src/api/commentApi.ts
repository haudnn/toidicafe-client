
import { getAccessToken } from '../utils/localStorage';
import axiosClient from './axiosClient';
const commentApi = {
  createComment(payload: any) {
    const access_token = getAccessToken();
    const headers = {
      Authorization: `Bearer ${access_token}`,
    };
    const url = `/comments/`;
    return axiosClient.post(url, payload, {
      headers: headers,
    });
  },
  getCommentsByReviewId(payload: any) {
    const url = `/comments/${payload}`;
    return axiosClient.get(url);
  }
};

export default commentApi;
