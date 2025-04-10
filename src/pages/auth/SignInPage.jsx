import AuthForm from "./AuthForm";
import FormContainer from "./FormContainer";
import { Link } from "react-router-dom";

const SignInPage = () => {
  return (
    <FormContainer className="flex justify-center items-center">
      <AuthForm
        fields={[
          { label: "email", type: "email" },
          { label: "password", type: "password" },
        ]}
        submitButtonLabel="sign in"
      />
      <Link
        to="/sign-up"
        className="text-brand-orange underline text-sm hover:bg-brand-gray/5 px-3 py-1 rounded-xl"
      >
        create an account
      </Link>
    </FormContainer>
  );
};

export default SignInPage;
