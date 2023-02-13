import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button/Button.jsx";
import { Input } from "../../components/Input/Input.jsx";
import { NavBar } from "../../components/NavBar/NavBar.jsx";
import { loginFormSchema } from "./loginSchemaForm.js";
import { LoginPageStyled } from "./LoginPageStyled.js";

function LoginPage({ loginUser }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginFormSchema),
  });

  function onSubmit(formDataLogin) {
    console.log(formDataLogin);

    loginUser(formDataLogin);
  }

  return (
    <>
      <NavBar showButton={false} />
      <LoginPageStyled>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h3 className="title-3">Login</h3>
          <Input
            text={"Email"}
            name={"email"}
            type={"text"}
            holder={"Digite aqui seu email"}
            register={register}
            error={errors}
          />
          <Input
            text={"Senha"}
            name={"password"}
            type={"password"}
            holder={"Digite aqui sua senha"}
            register={register}
            error={errors}
          />
          <Button prop={"Entrar"} />

          <span className="headline">Ainda não possui uma conta?</span>
        </form>
        <Link to="/register">
          <Button prop={"Cadastrar-se"} />
        </Link>
      </LoginPageStyled>
    </>
  );
}

export default LoginPage;
