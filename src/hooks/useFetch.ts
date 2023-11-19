import { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URI } from '../constants';



const useFetch = (options) => {
  const {method, payload, url, headers} = options
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState() 
  useEffect(() => {
    async function fetching() {
      setIsLoading(true);
      try {
        const option = {
          method,
          url: `${BASE_URI}/${url}`,
          data: payload,
          headers
        };
        const response = await axios(option);
        setResponse(response.data)
        setIsLoading(false) 
      } catch (err) {
        console.log(err);
      }
    }
    fetching();
  }, [method, payload, url, headers]);
  return {isLoading, response} 
};
export default useFetch
