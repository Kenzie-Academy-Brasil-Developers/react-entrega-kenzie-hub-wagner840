import { Input } from "../../components/Input/Input.jsx";
import { useForm } from "react-hook-form";
import { Button } from "../../components/Button/Button.jsx";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerFormSchema } from "./registerFormSchema.js";
import { NavBar } from "../../components/NavBar/NavBar.jsx";
import { RegisterPageStyled } from "./RegisterPage.js";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext.jsx";

function RegisterPage() {
  const { registerUser } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(registerFormSchema),
  });

  function onSubmit(formData) {
    registerUser(formData);
    reset();
  }

  return (
    <>
      <NavBar text={"voltar"} />
      <RegisterPageStyled>
        <h3 className="title-1">Crie sua conta</h3>
        <span className="headling">Rapido e grátis, vamos nessa</span>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            text={"Nome"}
            name={"name"}
            id={"nome"}
            type={"text"}
            holder={"Digite aqui seu nome"}
            register={register}
            error={errors}
          />
          <Input
            id={"email"}
            text={"Email"}
            name={"email"}
            type={"text"}
            holder={"Digite aqui seu email"}
            register={register}
            error={errors}
          />
          <Input
            id={"password"}
            text={"Senha"}
            name={"password"}
            type={"password"}
            holder={"Digite aqui sua senha"}
            register={register}
            error={errors}
          />
          <Input
            id={"checkPassword"}
            text={"Confirmar Senha"}
            name={"checkPassword"}
            type={"password"}
            holder={"Digite novamente sua senha"}
            register={register}
            error={errors}
          />
          <Input
            id={"bio"}
            text={"Bio"}
            name={"bio"}
            type={"text"}
            holder={"Fale sobre você"}
            register={register}
            error={errors}
          />
          <Input
            id={"contact"}
            text={"Contato"}
            name={"contact"}
            type={"text"}
            holder={"opção de contato"}
            register={register}
            error={errors}
          />
          <label htmlFor="course_module">selecionar módulo</label>
          <select
            name="course_module"
            id="course_module"
            {...register("course_module")}
          >
            <option value=" Primeiro módulo (Introdução ao Frontend)">
              Primeiro módulo
            </option>
            <option value="Segundo módulo (Frontend Avançado)">
              Segundo módulo
            </option>
            <option value="Terceiro módulo (Introdução ao Backend)">
              Terceiro módulo
            </option>
            <option value="Quarto módulo (Backend Avançado)">
              Quarto módulo
            </option>
          </select>

          <Button prop={"Cadastrar"} />
        </form>
      </RegisterPageStyled>
    </>
  );
}

export default RegisterPage;
