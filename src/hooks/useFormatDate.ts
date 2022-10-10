import {useState, useEffect} from 'react'
import moment from 'moment';
const useFormatDate = (date: Date) => {
    const [dateFormat, setDateFormat] = useState(""); 
    moment.locale("vi")
    useEffect(() => {
        setDateFormat(moment(date).fromNow())
    },[date])
    return dateFormat
}
export default useFormatDate