import React, { useReducer, useState } from "react";
import InputField from "../components/InputField";
import swal from "sweetalert";
import axios from "axios"; // Import axios for HTTP requests

const ACTIONS = {
  UPDATE_FIELD: "UPDATE_FIELD",
  VALIDATE_FORM: "VALIDATE_FORM",
  SET_ERRORS: "SET_ERRORS",
};

const initialState = {
  formData: {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    shopName: "",
    shopUrl: "",
  },
  errors: {},
};

const formReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.UPDATE_FIELD:
      return {
        ...state,
        formData: {
          ...state.formData,
          [action.payload.name]: action.payload.value,
        },
      };

    case ACTIONS.SET_ERRORS:
      return {
        ...state,
        errors: action.payload.errors,
      };

    case ACTIONS.VALIDATE_FORM:
      const newErrors = {};
      const { formData } = state;
      const { role } = action.payload;

      // Validation checks
      if (!formData.email) newErrors.email = "Email is required";
      if (!formData.password) newErrors.password = "Password is required";
      if (!formData.firstName) newErrors.firstName = "First Name is required";

      if (role === "vendor") {
        if (!formData.shopName) newErrors.shopName = "Shop Name is required";
        if (!formData.shopUrl) newErrors.shopUrl = "Shop URL is required";
      }

      return {
        ...state,
        errors: newErrors,
      };

    default:
      return state;
  }
};

const RegisterForm = () => {
  const [role, setRole] = useState("vendor"); // Default role
  const [state, dispatch] = useReducer(formReducer, initialState);
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    dispatch({
      type: ACTIONS.VALIDATE_FORM,
      payload: { role },
    });
  
    // Delay for async actions
    setTimeout(async () => {
      if (Object.keys(state.errors).length === 0) {
        try {
          const res = await axios.post("", state.formData);
          
          if (res.status === 200) { // Check for successful response
            swal("Success!", "Form submitted successfully!", "success");
          } else {
            throw new Error('Registration failed'); // Throw an error if the response is not successful
          }
        } catch (error) {
          console.error("Registration Error:", error.response || error.message); // Log the error to the console
          swal("Error!", error.response?.data?.message || "Failed to register", "error"); 
        }
      } else {
        const errorMessages = Object.values(state.errors).join("\n");
        swal("Error!", errorMessages, "error");
      }
    }, 0);
  };
  

  const handleChange = (e) => {
    const { name, value } = e.target;

    dispatch({
      type: ACTIONS.UPDATE_FIELD,
      payload: { name, value },
    });
  };

  const toggleForm = (selectedRole) => {
    setRole(selectedRole);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-gray-700">Register</h2>
        <form onSubmit={handleSubmit}>
          <InputField
            label="Email address"
            type="email"
            id="email"
            name="email"
            value={state.formData.email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
            errorMessage={state.errors.email}
          />

          <InputField
            label="Password"
            type="password"
            id="password"
            name="password"
            value={state.formData.password}
            onChange={handleChange}
            required
            placeholder="Enter your password"
            errorMessage={state.errors.password}
          />

          <InputField
            label="Name"
            type="text"
            id="firstName"
            name="firstName"
            value={state.formData.firstName}
            onChange={handleChange}
            required
            placeholder="Enter your Name"
            errorMessage={state.errors.firstName}
          />

          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden ${
              role === "vendor" ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <InputField
              label="Shop Name"
              type="text"
              id="shopName"
              name="shopName"
              value={state.formData.shopName}
              onChange={handleChange}
              placeholder="Enter your shop name"
              errorMessage={state.errors.shopName}
            />

            <InputField
              label="Shop URL"
              type="url"
              id="shopUrl"
              name="shopUrl"
              value={state.formData.shopUrl}
              onChange={handleChange}
              placeholder="Enter your shop URL"
              errorMessage={state.errors.shopUrl}
            />
          </div>

          <div className="mb-4 flex items-center space-x-6 mt-6">
            <label className="flex items-center">
              <input
                type="radio"
                className="form-radio h-4 w-4 text-yellow-600"
                checked={role === "customer"}
                onChange={() => toggleForm("customer")}
              />
              <span className="ml-2 text-gray-700">I am a customer</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                className="form-radio h-4 w-4 text-yellow-600"
                checked={role === "vendor"}
                onChange={() => toggleForm("vendor")}
              />
              <span className="ml-2 text-gray-700">I am a vendor</span>
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
