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
    <div style={{ marginBottom: "16px", width: "135%" }}>
      {label && <label style={{ display: "block", marginBottom: "6px" }}>{label}</label>}
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        onBlur={() => setTouched(true)}
        style={{
          width: "100%",
          padding: "10px",
          borderRadius: "6px",
          border: showError ? "1px solid red" : "1px solid #ccc",
          outline: "none",
        }}
      />
      {showError && (
        <p style={{ color: "red", fontSize: "12px", marginTop: "4px" }}>
          {errorMessage || `${label} is required`}
        </p>
      )}
    </div>
  );
}
