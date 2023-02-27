import { useContext } from "react";
import { HomePageContext } from "../../providers/HomePageContext";
import { Button } from "../Button/Button.jsx";
import { TechContext } from "../../providers/TechContext";
import { ModalDeleteStyled } from "./ModalDelete.js";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { modalDeleteFormSchema } from "./modalDeleteSchemaForm";

function ModalDelete({ techId, onClose }) {
  const { selectedTechId, setSelectedTechId } = useContext(HomePageContext);
  const { deleteTech, updateTech } = useContext(TechContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(modalDeleteFormSchema),
  });
  function handleClose() {
    onClose();
  }
  function handleDelete() {
    deleteTech(techId);
    onClose();
  }
  function editTech(event) {
    const updatedTech = {
      id: selectedTechId.id,
      title: selectedTechId.title,
      status: event.status,
    };
    updateTech(updatedTech);
    onClose();
  }
  function handleNameChange(event) {
    setSelectedTechId({
      ...selectedTechId,
      title: event.target.value,
    });
  }

  return (
    <ModalDeleteStyled>
      <div className="modal-header">
        <h3 className="title-3">Tecnologia Detalhes</h3>
        <Button event={handleClose} prop={"X"} />
      </div>
      <div className="modal-body">
        <label className="headline" htmlFor="Tecnologia">
          Nome do Projeto
          <input
            className="headline"
            type="text"
            id={selectedTechId.id}
            name={selectedTechId.title}
            value={selectedTechId.title || ""}
            onChange={handleNameChange}
          />
        </label>

        <label htmlFor="status">Status</label>
        <form onSubmit={handleSubmit(editTech)}>
          <select name="status" id="status" {...register("status")}>
            <option value={selectedTechId.status}>
              {selectedTechId.status}
            </option>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
          <div className="buttons">
            <Button identifier={"save"} prop={"Salvar Alterações"} />
            <Button
              identifier={"delete"}
              prop={"Excluir"}
              event={handleDelete}
            />
          </div>
        </form>
      </div>
    </ModalDeleteStyled>
  );
}

export default ModalDelete;
