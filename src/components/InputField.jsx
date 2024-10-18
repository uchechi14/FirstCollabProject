import React from 'react'

const InputField = ({ label, type, id, name, required = false, placeholder,errorMessage,value,onChange }) => {
    return (
      <div className="mb-4">
        <label htmlFor={id} className="block text-sm font-medium text-gray-700">
          {label} {required && '*'}
        </label>
        <input
          type={type}
          id={id}
          name={name}
          // required={required}
          placeholder={placeholder}
          errorMessage={errorMessage}
          value={value}
          onChange={onChange}
          className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
          errorMessage ? 'border-red-500' : 'border-gray-300'
        }`}
        />
         {errorMessage && (
        <p className="text-red-500 text-xs italic mt-2">{errorMessage}</p>
      )}
      </div>
    );
  };

export default InputField