const emptyForm = {
  name: "",
  position: "",
  email: "",
  local: "",
  phone: "",
  website: "",
};

const initialState = {
  records: [],
  errors: [],
  modalUpload: false,
  modalAdd: false,
  formData: emptyForm,
  isEdit: false,
  isEditIndex: -1,
};

const appReducer = (state, action) => {
  switch (action.type) {
    case "HANDLE_INPUT_CHANGED":
      return {
        ...state,
        formData: {
          ...state.formData,
          [action.payload.name]: action.payload.value,
        },
      };
    case "SET_RECORD":
      return { ...state, records: [...state.records, ...action.payload] };

    case "ADD_SINGLE_RECORD":
      return {
        ...state,
        isEdit: false,
        isEditIndex: -1,
        formData: emptyForm,
        modalAdd: true,
      };

    case "SAVE_SINGLE_RECORD":
      return { ...state, records: [...state.records, state.formData] };

    case "EDIT_SINGLE_RECORD":
      return {
        ...state,
        isEdit: true,
        isEditIndex: action.payload,
        formData: state.records[action.payload],
        modalAdd: true,
      };

    case "UPDATE_SINGLE_RECORD":
      let updatedRecords = state.records.map((record, index) => {
        if (index === state.isEditIndex) return state.formData;
        return record;
      });

      return { ...state, records: updatedRecords };

    case "DELETE_SINGLE_RECORD":
      let newRecords = state.records.splice(action.payload, 1);
      return { ...state, records: newRecords };

    case "CLEAR_RECORD":
      return { ...state, records: [] };

    case "ADD_ERROR":
      return { ...state, errors: [...state.errors, action.payload] };

    case "CLEAR_ERROR":
      return { ...state, errors: [] };

    case "MODAL_UPLOAD_OPEN":
      return { ...state, modalUpload: true };

    case "MODAL_UPLOAD_CLOSE":
      return { ...state, modalUpload: false };

    case "MODAL_ADD_OPEN":
      return { ...state, modalAdd: true };

    case "MODAL_ADD_CLOSE":
      return { ...state, modalAdd: false };

    default:
      return state;
  }
};

export { initialState, appReducer };
