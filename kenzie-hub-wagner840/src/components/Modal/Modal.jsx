import { Input } from "../Input/Input.jsx";
import { Button } from "../Button/Button.jsx";
import { useContext } from "react";
import { HomePageContext } from "../../providers/HomePageContext.jsx";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { modalFormSchema } from "./modalSchemaForm.js";
import { TechContext } from "../../providers/TechContext.jsx";
import { ModalStyled } from "./Modal.js";
export function Modal() {
  const { setOpenModal } = useContext(HomePageContext);
  const { addTech } = useContext(TechContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(modalFormSchema),
  });
  const onSubmit = (data) => {
    addTech(data);
    setOpenModal(false);
  };

  return (
    <ModalStyled onSubmit={handleSubmit(onSubmit)}>
      <div className="modal-header">
        <h3 className="title-3">Cadastrar Tecnologia</h3>
        <Button event={() => setOpenModal(false)} prop={"X"} />
      </div>
      <div className="modal-body">
        <Input
          text={"Nome"}
          name={"title"}
          id={"title"}
          type={"text"}
          holder={"Escreva o nome da Tecnologia"}
          register={register}
        />
        <label htmlFor="status">Selecionar status</label>
        <select name="status" id="status" {...register("status")}>
          <option value="Iniciante">Iniciante</option>
          <option value="Intermediário">Intermediário</option>
          <option value="Avançado">Avançado</option>
        </select>
        <Button prop={"Cadastrar Tecnologia"} />
      </div>
    </ModalStyled>
  );
}
