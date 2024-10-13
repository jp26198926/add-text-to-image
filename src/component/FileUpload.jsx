import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import CSVtoArrayObj from "papaparse";
import { Link } from "react-router-dom";
import ButtonIconText from "./ButtonIconText";
import { FaArrowRight } from "react-icons/fa";

function FileUpload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileExt, setFileExt] = useState();
  const { state, dispatch } = useContext(AppContext);

  const handleFileUpload = (e) => {
    setSelectedFile(() => {
      const file = e.target.files[0];
      setFileExt(file.name.split(".").pop().toLowerCase());

      return file;
    });
  };

  const handleClick = () => {
    if (!selectedFile || !fileExt) {
      dispatch({ type: "ADD_ERROR", payload: "No File Selected!" });
      return;
    }

    if (fileExt !== "csv") {
      dispatch({ type: "ADD_ERROR", payload: "Please upload a CSV file." });
      return;
    }

    CSVtoArrayObj.parse(selectedFile, {
      header: true,
      skipEmptyLines: true,
      complete: (result) => {
        dispatch({ type: "SET_RECORD", payload: result.data });
        dispatch({ type: "MODAL_UPLOAD_CLOSE" });

        setSelectedFile(null);
      },
      error: (err) => {
        dispatch({ type: "ADD_ERROR", payload: err });
      },
    });
  };

  return (
    <div>
      <input
        type="file"
        accept=".csv"
        onChange={handleFileUpload}
        className="mb-4 p-2 rounded-md text-black"
      />

      <div className="flex justify-center">
        <ButtonIconText
          label="Proceed"
          icon={FaArrowRight}
          onClick={handleClick}
        />
      </div>

      {state?.errors?.length > 0 &&
        state?.errors?.map((error, index) => (
          <p key={index} className="text-red-500">
            {error}
          </p>
        ))}
    </div>
  );
}

export default FileUpload;
