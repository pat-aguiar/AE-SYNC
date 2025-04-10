import {Link} from "react-router-dom";

const FormContainer = (props) => {
  const { children } = props;

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-brand-gray/5 w-full">
        <Link 
          to="/"
          className="flex flex-col items-center justify-center mx-2 my-12">
          <img
            className="w-64 mb-3"
            src="./../../public/logo-main-orange.png"
          />
          <div className="w-64 text-center font-manrope text-brand-gray text-sm tracking-widest border-t border-brand-gray/80">
            where AEC builds automation
          </div>
        </Link>
        {children}
    </div>
  );
};

export default FormContainer;
