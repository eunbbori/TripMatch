import React from "react";
import AuthTemplate from "../../components/Auth/AuthTemplate";
import RegisterForm from "./components/RegisterForm";

const RegisterPage = () => {
  return (
    <AuthTemplate>
      <RegisterForm />
    </AuthTemplate>
  );
};

export default RegisterPage;
