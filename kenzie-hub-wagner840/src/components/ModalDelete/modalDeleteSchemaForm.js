import * as yup from "yup";

export const modalDeleteFormSchema = yup.object().shape({
  status: yup.string(),
});
