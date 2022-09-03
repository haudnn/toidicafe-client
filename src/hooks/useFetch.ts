import { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URI } from '../constants';


interface Response {
    message: string;
    shops:Array<any>
}
const useFetch = (url: string) => {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<Response>()
  useEffect(() => {
    async function fetching() {
      setIsLoading(true);
      try {
        const requestUrl = `${BASE_URI}/${url}`;
        const response = await axios.get(requestUrl)
        setResult(response.data)
        setIsLoading(false) 
      } catch (err) {
        console.log(err);
      }

    }
    fetching();
  }, [url]);
  return {isLoading, result} 
};
export default useFetch
