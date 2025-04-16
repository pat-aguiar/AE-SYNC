import { GoogleLogin, googleLogout } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

const GoogleOAuth = () => {
  const navigate = useNavigate();

  function handleLogout() {
    googleLogout();
  }

  return (
    <>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          console.log(credentialResponse);
          console.log(jwtDecode(credentialResponse.credential));
          navigate("/build");
        }}
        onError={console.log("login Failed")}
        auto_select={true}
      />
    </>
  );
};

export default GoogleOAuth;
