import React, { useReducer, useState } from 'react';
import InputField from '../components/InputField';
import swal from 'sweetalert';

const ACTIONS = {
    UPDATE_FIELD: 'UPDATE_FIELD',
    VALIDATE_FORM: 'VALIDATE_FORM',
    SET_ERRORS: 'SET_ERRORS',
  };
  
  
  const initialState = {
    formData: {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      phoneNumber: '',
      shopName: '',
      shopUrl: '',
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
  
  
        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.password) newErrors.password = 'Password is required';
        if (!formData.firstName) newErrors.firstName = 'First Name is required';
        if (!formData.lastName) newErrors.lastName = 'Last Name is required';
        if (!formData.phoneNumber) newErrors.phoneNumber = 'Phone Number is required';
  
        if (role === 'vendor') {
          if (!formData.shopName) newErrors.shopName = 'Shop Name is required';
          if (!formData.shopUrl) newErrors.shopUrl = 'Shop URL is required';
        }
  
        return {
          ...state,
          errors: newErrors,
        };
  
      default:
        return state;
    }
  };

const Login = () => {

    const [role, setRole] = useState('vendor'); 
    const [state, dispatch] = useReducer(formReducer, initialState); 
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      dispatch({
        type: ACTIONS.VALIDATE_FORM,
        payload: { role },
      });
  
  
    setTimeout(() => {
      if (Object.keys(state.errors).length === 0) {
  
        console.log('Form submitted successfully', state.formData);
        swal("Success!", "Form submitted successfully!", "success"); 
      } else {
  
        const errorMessages = Object.values(state.errors).join('\n');
        swal("Error!", 'Failed to register', "error"); 
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
        <h2 className="text-3xl font-bold mb-6 text-gray-700">Login</h2>

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
          <div
            className={`transition-all duration-500 ease-in-out overflow-hidden ${
              role === 'vendor' ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
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
  )
}

export default Login