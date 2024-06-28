const initialState = {
    name:"hello",
    records: [],
    errors: [],
}

const appReducer = (state, action) => {
    switch(action.type){
        case "SET_RECORD":
            return {...state, records: action.payload};
        case "ADD_ERROR":
            return {...state, errors: [...state.errors, action.payload]};
        case "CLEAR_ERROR":
            return {...state, errors: []};
        
        default: 
            return state;
    }
}

export {initialState, appReducer}