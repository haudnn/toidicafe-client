import { useNavigate } from 'react-router-dom';
import History from '../utils/history';

const NavigateSetter = () => {
  History.navigate = useNavigate();
  return null;
};
export default NavigateSetter