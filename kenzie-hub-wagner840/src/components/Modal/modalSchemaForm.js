import * as yup from "yup";
export const modalFormSchema = yup.object().shape({
  title: yup.string(),
  status: yup.string(),
});
