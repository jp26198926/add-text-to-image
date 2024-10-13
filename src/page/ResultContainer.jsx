import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import ImageWithText from "../component/ImageWithText";
import sampleImage from "../assets/FPNG-Esig.png";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

import ButtonIconText from "../component/ButtonIconText";

const ResultContainer = () => {
  const navigate = useNavigate();
  const { state } = useContext(AppContext);
  const [imgSrc, setImgSrc] = useState(sampleImage);

  const goToMain = () => navigate("/");

  return (
    <div className="bg-gray-100 p-2 shadow-md md:p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Result</h2>

        <div className="flex space-x-2">
          <ButtonIconText
            label="Back to Main"
            icon={FaArrowLeft}
            bgColor="bg-blue"
            onClick={goToMain}
          />
        </div>
      </div>

      <div>
        {state.records &&
          state.records.map((record, idx) => (
            <ImageWithText key={idx} src={imgSrc} text={record} />
          ))}
      </div>
    </div>
  );
};

export default ResultContainer;
