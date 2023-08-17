import React from "react";

export default function Input({
  type,
  name,
  inputId,
  defaultValue,
  label,
  value,
  helperText,
  onChange,
  error,
}) {
  return (
    <div>
      {label && (
        <label className="block text-sm text-gray-600 font-bold mb-2">
          {" "}
          {label}{" "}
        </label>
      )}

      {helperText && (
        <label className="block text-sm text-gray-600"> {helperText} </label>
      )}

      <input
        type={type}
        name={name}
        id={inputId}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        className={
          "shadow Registerearance-none border border-red-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        }
      />

      <p className="mt-2 text-sm text-red-600"> {error} </p>
    </div>
  );
}
