import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import CSVtoArrayObj from "papaparse";

function FileUpload() {
    const {state, dispatch} = useContext(AppContext);

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        const ext = file.name.split('.').pop().toLowerCase();

        if (ext !== "csv"){
            setError('Please upload a CSV file.');
            return;
        }

        CSVtoArrayObj.parse(file, {
            header: true,
            skipEmptyLines: true,
            complete: (result) => {
                dispatch({type: "SET_RECORD", payload: result.data});
            },
            error: (err) => {
                dispatch({type: "ADD_ERROR", payload: err});
            }
        });
    }

    return (
        <div>
            <h1 className="text-3xl font-bold mb-4">Upload CSV File</h1>
            <input
                type="file"
                accept=".csv"
                onChange={handleFileUpload}
                className="mb-4 p-2 rounded-md text-black"
            />
            {
                state?.errors?.length > 0 && state?.errors?.map(error => (
                    <p className="text-red-500">{error}</p>
                ))
            }            
        </div>
    )
}

export default FileUpload