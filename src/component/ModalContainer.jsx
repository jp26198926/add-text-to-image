import { FaTimes } from "react-icons/fa";
import ButtonIconText from "./ButtonIconText";

const ModalContainer = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 overflow-y-scroll">
      <div className="bg-white p-6 w-screen  md:w-1/2">
        <div className="flex justify-between pb-2">
          <span className="text-xl font-bold uppercase">{title}</span>
          <ButtonIconText
            label=""
            icon={FaTimes}
            onClick={onClose}
            bgColor="bg-red"
          />
        </div>
        <hr />

        <div className="pt-2">{children}</div>
      </div>
    </div>
  );
};

export default ModalContainer;
