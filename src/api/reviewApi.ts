import { ReviewPayLoad } from '../interfaces';
import { getAccessToken } from '../utils/localStorage';
import axiosClient from './axiosClient';
interface WritePayload {
  shopId?: string;
}
const reviewApi = {
  getReviewsByShopId(payload: WritePayload) {
    const { shopId } = payload;
    const access_token = getAccessToken();
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${access_token}`,
    };
    const url = `/reviews/new/${shopId}`;
    return axiosClient.get(url, {
      headers: headers,
    });
  },
  createReview(payload: any) {
    const access_token = getAccessToken();
    const headers = {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${access_token}`,
    };
    const url = `/reviews/`;
    return axiosClient.post(url, payload, {
      headers: headers,
    });
  },
};

export default reviewApi;
