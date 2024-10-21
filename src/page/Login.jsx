import React, { useReducer, useState } from "react";
import InputField from "../components/InputField";
import swal from "sweetalert";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../services/GlobalState";

const ACTIONS = {
  UPDATE_FIELD: "UPDATE_FIELD",
  VALIDATE_FORM: "VALIDATE_FORM",
  SET_ERRORS: "SET_ERRORS",
};

const initialState = {
  formData: {
    email: "",
    password: "",
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
      () => {
        const newErrors = {};
        const { formData } = state;

        if (!formData.email) newErrors.email = "Email is required";
        if (!formData.password) newErrors.password = "Password is required";

        return {
          ...state,
          errors: newErrors,
        };
      };
      break;

    default:
      return state;
  }
};

const Login = () => {
  const [role, setRole] = useState("vendor");
  const [state, dispatch] = useReducer(formReducer, initialState);
  const navigate = useNavigate();
  const reduxDispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch({
      type: ACTIONS.VALIDATE_FORM,
      payload: { role },
    });

    setTimeout(async () => {
      if (Object.keys(state?.errors)?.length === 0) {
        try {
          const res = await axios.post(
            "https://crossbackend.onrender.com/api/seler/signInUser",
            state?.formData
          );

          if (res.status === 200) {
            // Check for successful response
            console.log(res);
            reduxDispatch(addUser(res.data.data));
            navigate("/seller/dashboard");
            swal("Success!", "Form submitted successfully!", "success");
          } else {
            throw new Error("Registration failed"); // Throw an error if the response is not successful
          }
        } catch (error) {
          console.error("Registration Error:", error); // Log the error to the console
          swal(
            "Error!",
            error.response?.data?.message || "Failed to register",
            "error"
          );
        }
      } else {
        const errorMessages = Object.values(state?.errors).join("\n");
        swal("Error!", errorMessages, "error");
      }
    }, 0);
  };

  console.log(state?.formData);
  const handleChange = (e) => {
    const { name, value } = e.target;

    dispatch({
      type: ACTIONS.UPDATE_FIELD,
      payload: { name, value },
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-gray-700">Login</h2>

        <form onSubmit={handleSubmit}>
          <InputField
            label="Email address"
            type="email"
            id="email"
            name="email"
            value={state?.formData.email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
            errorMessage={state?.errors.email}
          />

          <InputField
            label="Password"
            type="password"
            id="password"
            name="password"
            value={state?.formData.password}
            onChange={handleChange}
            required
            placeholder="Enter your password"
            errorMessage={state?.errors.password}
          />

          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500"
          >
            Log-In
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
