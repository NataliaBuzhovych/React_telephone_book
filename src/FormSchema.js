import * as Yup from "yup";
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const FormSchema = Yup.object({
  firstName: Yup.string().min(2).max(8).required(""),
  lastName: Yup.string().min(2).max(8).required(""),
  phone: Yup.string()
    .min(7)
    .max(14)
    .matches(phoneRegExp, "Phone number is not valid"),
});
