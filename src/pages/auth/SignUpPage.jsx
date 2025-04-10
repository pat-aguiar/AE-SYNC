import AuthForm from "./AuthForm";
import FormContainer from "./FormContainer";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  return (
    <FormContainer className="flex justify-center items-center">
      <AuthForm
        fields={[
          { label: "email", type: "email" },
          { label: "password", type: "password" },
          { label: "confirm password", type: "password" },
        ]}
        submitButtonLabel="create account"
        onSubmit={(values) => {
          console.log(values);
          if (values.email.length <= 4) {
            console.log("insert a valid email address");
            return;
          }
          if (values.password.length < 6) {
            console.log("password must be 6 characters");
            return;
          }
          if (values["confirm password"] !== values.password) {
            console.log("passwords do not match");
            return;
          }
        }}
      />
      <Link
        to="/sign-in"
        className="text-brand-orange underline text-sm hover:bg-brand-gray/5 px-3 py-1 rounded-xl"
      >
        sign in
      </Link>
    </FormContainer>
  );
};

export default SignUpPage;
