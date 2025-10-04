import { useState } from "react";

export default function TextBox({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  required = false,
  errorMessage,
}) {
  const [touched, setTouched] = useState(false);

  const showError = touched && required && !value;

  return (
    <div className="mb-4">
{label && (
    <label className="block mb-1.5">
      {label}
    </label>
  )}
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        onBlur={() => setTouched(true)}
        
        className={`w-full p-2.5 rounded-md outline-none border${showError ? 'border-red-500' : ' border-gray-300'} focus:border-blue-500`}
      />
      {showError && (
        <p className={"trxt-red-500 text-sm mt-1"}>
          {errorMessage || `${label} is required`}
        </p>
      )}
    </div>
  );
}
