import * as yup from 'yup';

export const LOGIN_SCHEMA = yup.object({
    email: yup
      .string()
      .email('Vui lòng nhập một email hợp lệ')
      .required('Email không được để trống'),
    password: yup
      .string()
      .required('Password không được để trống')
})
export const REGISTER_SCHEMA = yup.object({
  email: yup
    .string()
    .email('Trường này phải là một email')
    .required('Email không được để trống'),
  displayName: yup.string().required('Tên không được để trống'),
  password: yup
    .string()
    .required('Mật khẩu không được để trống')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      'Mật khẩu phải nhiều 8 ký tự bao gồm chữ hoa, chữ thường, số và ký tự đặc biệt.'
    ),
})