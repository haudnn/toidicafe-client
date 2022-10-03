import axios from 'axios';
import { useState, useEffect } from 'react';
import { BASE_URI } from '../constants';
interface User { 
    bookmarks: Array<string>
    avatar : string;
    displayName: string;
    _id: string
}
const useAuth = () => {
  const [user, setUser] = useState<User>();
  const [isLoading, setIsLoading] = useState<Boolean>(false);
  useEffect(() => {
    const token = localStorage.getItem('access_token');
    async function fetching() {
      setIsLoading(true);
      try {
        const option = {
          method: 'POST',
          url: `${BASE_URI}/users`,
          headers: {
            authorization: `Bearer ${token}`,
          },
        };
        const { data } = await axios(option);
        setUser(data.user);
      } catch (err) {
        console.log(err);
      }
      setIsLoading(false);
    }
    if (token) {
      fetching();
    }
  }, []);
  return { isLoading, user}
};

export default useAuth;
