import * as yup from "yup";

yup.setLocale({
  mixed: {
    required: () => "This field is required" // can add translations
  }
});

export default yup;
