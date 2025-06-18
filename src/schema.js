import * as yup from "yup";
import { get } from "svelte/store";
import { _ } from "svelte-i18n";

const schema = () => {
  const $_ = get(_);
  return yup.object().shape({
    firstname: yup
      .string()
      .required(
        $_("contact.errorFirstNameRequired", {
          default: "First name is required",
        }),
      ),
    lastname: yup
      .string()
      .required(
        $_("contact.errorLastNameRequired", {
          default: "Last name is required",
        }),
      ),
    company: yup
      .string()
      .required(
        $_("contact.errorCompanyRequired", { default: "Company is required" }),
      ),
    email: yup
      .string()
      .required(
        $_("contact.errorEmailRequired", { default: "Email is required" }),
      )
      .email($_("contact.errorEmailInvalid", { default: "Email is invalid" })),
    phone: yup
      .string()
      .required(
        $_("contact.errorPhoneRequired", { default: "Phone is required" }),
      ),
    message: yup
      .string()
      .required(
        $_("contact.errorMessageRequired", { default: "Message is required" }),
      ),
  });
};

export default schema;
