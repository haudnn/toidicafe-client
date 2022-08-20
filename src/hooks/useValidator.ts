import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
type FormData = {
    email: string;
    password: string;
    displayName:string;
  };
const useValidator = (schema:any) =>{
    const { register, handleSubmit, formState: { errors }, } = useForm<FormData>({ resolver: yupResolver(schema) });
    return {register, handleSubmit, errors}
}
export default useValidator