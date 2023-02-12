import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "../../components/Button/Button.jsx";
import { Input } from "../../components/Input/Input.jsx";

function LoginPage() {
  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <div>
      <h3 className="title-3">Login</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          text={"Email"}
          name={"email"}
          type={"text"}
          holder={"Digite aqui seu email"}
          register={register}
        />
        <Input
          text={"Senha"}
          name={"password"}
          type={"password"}
          holder={"Digite aqui sua senha"}
          register={register}
        />
        <Button prop={"Entrar"} />

        <span className="headline">Ainda não possui uma conta?</span>

        <Button prop={"Cadastrar-se"} />
      </form>
    </div>
  );
}

export default LoginPage;
