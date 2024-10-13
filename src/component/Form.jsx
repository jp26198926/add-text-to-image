import React, { useEffect, useContext } from "react";
import { AppContext } from "../context/AppContext";

const Form = () => {
  const { state, dispatch } = useContext(AppContext);
  const formData = state.formData;

  const handleChange = (e) => {
    dispatch({
      type: "HANDLE_INPUT_CHANGED",
      payload: { name: e.target.name, value: e.target.value },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (state.formData.name) {
      if (state.isEdit) {
        dispatch({ type: "UPDATE_SINGLE_RECORD" });
      } else {
        dispatch({ type: "SAVE_SINGLE_RECORD" });
      }

      dispatch({ type: "MODAL_ADD_CLOSE" });
    } else {
      dispatch({ type: "ADD_ERROR", payload: "Name is required!" });
    }
  };

  useEffect(() => {
    return () => {
      dispatch({ type: "CLEAR_ERROR" });
    };
  }, []);

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 sm:grid-cols-2 gap-4"
    >
      <div>
        <label className="block text-gray-700 font-medium" htmlFor="name">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full mt-1 p-2 border rounded-lg focus:ring focus:ring-indigo-200"
          placeholder="Enter your name"
        />
      </div>

      <div>
        <label className="block text-gray-700 font-medium" htmlFor="position">
          Position
        </label>
        <input
          type="text"
          id="position"
          name="position"
          value={formData.position}
          onChange={handleChange}
          className="w-full mt-1 p-2 border rounded-lg focus:ring focus:ring-indigo-200"
          placeholder="Enter your position"
        />
      </div>

      <div>
        <label className="block text-gray-700 font-medium" htmlFor="email">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full mt-1 p-2 border rounded-lg focus:ring focus:ring-indigo-200"
          placeholder="Enter your email"
        />
      </div>

      <div>
        <label className="block text-gray-700 font-medium" htmlFor="local_no">
          Local Number
        </label>
        <input
          type="text"
          id="local"
          name="local"
          value={formData.local}
          onChange={handleChange}
          className="w-full mt-1 p-2 border rounded-lg focus:ring focus:ring-indigo-200"
          placeholder="Enter your local number"
        />
      </div>

      <div>
        <label className="block text-gray-700 font-medium" htmlFor="phone">
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full mt-1 p-2 border rounded-lg focus:ring focus:ring-indigo-200"
          placeholder="Enter your phone number"
        />
      </div>

      <div>
        <label className="block text-gray-700 font-medium" htmlFor="website">
          Website
        </label>
        <input
          type="text"
          id="website"
          name="website"
          value={formData.website}
          onChange={handleChange}
          className="w-full mt-1 p-2 border rounded-lg focus:ring focus:ring-indigo-200"
          placeholder="Enter your website URL"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition sm:col-span-2"
      >
        Submit
      </button>

      <div>
        {state?.errors?.length > 0 &&
          state?.errors?.map((error, index) => (
            <p key={index} className="text-red-500">
              {error}
            </p>
          ))}
      </div>
    </form>
  );
};

export default Form;
