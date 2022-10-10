import moment from 'moment';
const formatDate = (date: Date) => {
    moment.locale("vi")
    const dateFormat = moment(date).fromNow()
    return dateFormat
}
export default formatDate