import * as yup from "yup";

export const registerFormSchema = yup.object().shape({
  nome: yup.string().required("O nome é obrigatorio."),
  email: yup
    .string()
    .required("O email é obrigatorio.")
    .email("O email digitado é invalido"),
  password: yup
    .string()
    .required("A senha é obrigatoria.")
    .min(8, "A senha precisa ter 8 caracteres")
    .matches(/(\d)/, "Deve conter ao menos 1 número")
    .matches(/[a-z]/, "Deve conter ao menos 1 letra minúscula")
    .matches(/[A-Z]/, "Deve conter ao menos 1 letra maíscula")
    .matches(/(\W|_)/, "Deve conter ao menos 1 caracter especial"),
  checkPassword: yup
    .string()
    .required("Confirmar a senha é obrigatório")
    .oneOf([yup.ref("password")], "As senhas precisam estar iguais"),
});
