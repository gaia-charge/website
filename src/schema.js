import * as yup from "yup";

const schema = yup.object().shape({
  firstname: yup.string().required("First name is required"),
  lastname: yup.string().required("Last name is required"),
  company: yup
    .string()
    .required("Company is required"),
  email: yup.string().required("Email is required").email("Email is invalid"),
  phone: yup
    .string()
    .required("Phone is required"),
    message: yup
    .string()
    .required("Message is required")
});

export default schema;