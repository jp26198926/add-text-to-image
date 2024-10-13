import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FaPlus, FaUpload, FaTrash, FaArrowRight } from "react-icons/fa";

import { AppContext } from "../context/AppContext";

import ButtonIconText from "../component/ButtonIconText";
import ResponsiveTable from "../component/ResponsiveTable";
import ModalContainer from "../component/ModalContainer";
import FileUpload from "../component/FileUpload";
import Form from "../component/Form";

const DataContainer = () => {
  const { state, dispatch } = useContext(AppContext);
  const navigate = useNavigate();

  const openModal = () => dispatch({ type: "MODAL_UPLOAD_OPEN" });
  const closeModal = () => dispatch({ type: "MODAL_UPLOAD_CLOSE" });

  const openAddModal = () => dispatch({ type: "ADD_SINGLE_RECORD" });
  const closeAddModal = () => dispatch({ type: "MODAL_ADD_CLOSE" });

  const goToResult = () => navigate("/result");

  const clearRecords = () => {
    if (confirm("Are you sure you want to clear the records?")) {
      dispatch({ type: "CLEAR_RECORD" });
    }
  };

  return (
    <div className="bg-gray-100 p-2 shadow-md md:p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Data</h2>

        <div className="flex space-x-2">
          <ButtonIconText
            label="Add"
            icon={FaPlus}
            bgColor="bg-blue"
            onClick={openAddModal}
          />
          <ButtonIconText
            label="Upload"
            icon={FaUpload}
            bgColor="bg-green"
            onClick={openModal}
          />
          <ButtonIconText
            label="Clear"
            icon={FaTrash}
            bgColor="bg-red"
            onClick={clearRecords}
          />
          <ButtonIconText
            label="Show Result"
            icon={FaArrowRight}
            bgColor="bg-blue"
            className={`${state.records.length ? "" : "hidden"}`}
            onClick={goToResult}
          />
        </div>
      </div>

      <ModalContainer
        title="Upload"
        isOpen={state.modalUpload}
        onClose={closeModal}
      >
        <FileUpload />
      </ModalContainer>

      <ModalContainer
        title="Add"
        isOpen={state.modalAdd}
        onClose={closeAddModal}
      >
        <Form />
      </ModalContainer>

      <ResponsiveTable />
    </div>
  );
};

export default DataContainer;
