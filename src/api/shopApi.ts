import { BookmarkPayload } from '../features/search/searchSlice';
import { getAccessToken } from '../utils/localStorage';
import axiosClient from './axiosClient';
const shopApi = {
    bookmarkShop(payload: BookmarkPayload)  {
      const access_token = getAccessToken()
      const headers = {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${access_token}`
      }   
      const url = '/shops/bookmark'
      return axiosClient.post(url, {
        shopId: payload,
      },
      {
        headers: headers,
      }
      );
    },
    unBookmarkShop(payload: BookmarkPayload)  { 
      const access_token = getAccessToken()
      const headers = {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${access_token}`
      }   
      const url = '/shops/unbookmark'
      return axiosClient.post(url, {
        shopId: payload
      },
      {
        headers: headers,
      }
      );
    },
    getBookmarks(url: string){
      const access_token = getAccessToken()
      const headers = {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${access_token}`
      }     
      return axiosClient.get(url,{
        headers: headers,
      }
      );
    }
  }

export default shopApi