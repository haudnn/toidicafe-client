import { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URI } from '../constants';


interface Response {
    message: string;
    shop: any;
    shops:Array<any>;
    regions:Array<any>;
    purposes:Array<any>;
    tags: Array<any>;
    benefits: Array<any>;
}
const useFetch = (options:any) => {
  const {method, payload, url, headers} = options
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState<Response>()
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
