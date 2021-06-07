import React from "react";
import styles from "./form-input.module.css";

const FormInput = ({ label, value, onChange, ...props }) => {
  const inputId = label.toLowerCase();

  return (
    <div>
      <label htmlFor={inputId} className={styles.label}>
        {label}
      </label>
      <input
        className={styles.input}
        id={inputId}
        name={inputId}
        value={value}
        onChange={onChange}
        {...props}
      />
    </div>
  );
};

export default FormInput;
