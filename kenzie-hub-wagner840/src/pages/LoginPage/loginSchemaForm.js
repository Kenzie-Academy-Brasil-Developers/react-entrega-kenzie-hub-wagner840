import * as yup from "yup";
export const loginFormSchema = yup.object().shape({
  email: yup
    .string()
    .required("O email é obrigatorio")
    .email("O email digitado é invalido"),
  password: yup.string().required("A senha é obrigatoria."),
});
