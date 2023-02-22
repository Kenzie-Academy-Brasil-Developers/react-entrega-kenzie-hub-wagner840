import { useContext } from "react";
import { HomePageContext } from "../../providers/HomePageContext";
import { Button } from "../Button/Button.jsx";
import { TechContext } from "../../providers/TechContext";
import { ModalDeleteStyled } from "./ModalDelete.js";

function ModalDelete({ techId, onClose }) {
  const { selectedTechId } = useContext(HomePageContext);
  const { deleteTech } = useContext(TechContext);
  function handleClose() {
    onClose();
  }
  function handleDelete() {
    deleteTech(techId);
    onClose();
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
            value={selectedTechId.title}
          />
        </label>
        <label htmlFor="status">Status</label>
        <select name="status" id="status">
          <option value={selectedTechId.status}>{selectedTechId.status}</option>
          <option value="Iniciante">Iniciante</option>
          <option value="Intermediário">Intermediário</option>
          <option value="">Avançado</option>
        </select>
        <div className="buttons">
          <Button identifier={"save"} prop={"Salvar Alterações"} disabled />
          <Button identifier={"delete"} prop={"Excluir"} event={handleDelete} />
        </div>
      </div>
    </ModalDeleteStyled>
  );
}

export default ModalDelete;
