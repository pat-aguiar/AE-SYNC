import { useState } from "react";
import Field from "./Field";
import { Link } from "react-router-dom";

const AuthForm = (props) => {
  const { fields, submitButtonLabel, onSubmit } = props;
  const [values, setValues] = useState(() => {
    const initialState = {};
    for (let field of fields) {
      initialState[field.label] = "";
    }

    return initialState;
  });

  return (
    <form
      className="font-manrope p-4 m-4 bg-white border border-brand-gray/20 rounded-lg text-md"
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit(values);
      }}
    >      
      {fields.map((field) => (
        <Field
          key={field.label}
          label={field.label}
          type={field.type}
          value={values[field.label]}
          onChange={(e) => {
            setValues({ ...values, [field.label]: e.target.value });
          }}
        />
      ))}
      <button className="bg-brand-orange text-white w-full rounded-lg py-2 mt-4 font-semibold hover:bg-brand-orange-light">
        {submitButtonLabel}
      </button>
      <div className="w-80 p-8 pb-2 text-center text-sm text-black/70">
        By signing in, you agree to our
        <div>
          <Link
            to="/terms-of-service"
            target="_blank"
            className="text-brand-orange underline"
          >
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link
            to="/privacy-policy"
            target="_blank"
            className="text-brand-orange underline"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </form>
  );
};

export default AuthForm;
