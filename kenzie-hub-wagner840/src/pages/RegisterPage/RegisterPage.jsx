import { Input } from "../../components/Input/Input.jsx";
import { useForm } from "react-hook-form";
import { Button } from "../../components/Button/Button.jsx";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerFormSchema } from "./registerFormSchema.js";

function RegisterPage({ registerUser }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(registerFormSchema),
  });

  function onSubmit(formData) {
    console.log(formData);
    registerUser(formData);
    reset();
  }

  return (
    <div>
      <h3 className="title-1">Crie sua conta</h3>
      <span className="headling">Rapido e grátis, vamos nessa</span>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          text={"Nome"}
          name={"nome"}
          type={"text"}
          holder={"Digite aqui seu nome"}
          register={register}
          error={errors}
        />
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
        <Input
          text={"Confirmar Senha"}
          name={"checkPassword"}
          type={"password"}
          holder={"Digite novamente sua senha"}
          register={register}
          error={errors}
        />
        <Input
          text={"Bio"}
          name={"bio"}
          type={"text"}
          holder={"Fale sobre você"}
          register={register}
          error={errors}
        />
        <Input
          text={"Contato"}
          name={"contato"}
          type={"text"}
          holder={"opção de contato"}
          register={register}
          error={errors}
        />
        <label htmlFor="select">selecionar módulo</label>
        <select name="select" id="select" {...register("select")}>
          <option value="Primeiro Módulo">
            Primeiro módulo (Introdução ao Frontend)
          </option>
          <option value="Segundo Módulo">
            Segundo módulo (Frontend Avançado)
          </option>
          <option value="Terceiro Módulo">
            Terceiro módulo (Introdução ao Backend)
          </option>
          <option value="Quarto Módulo">
            Quarto módulo (Backend Avançado)
          </option>
        </select>

        {console.log(errors)}
        <Button prop={"Cadastrar"} />
      </form>
    </div>
  );
}

export default RegisterPage;
