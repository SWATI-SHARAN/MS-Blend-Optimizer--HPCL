import React, { useState } from "react";
import styles from "../style/Checkbox.module.css";

const Checkbox = ({ className }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <label className={`${styles.checkbox} ${className}`}>
      <input type="checkbox" checked={checked} onChange={handleChange} />
      <span className={styles.checkmark}></span>
    </label>
  );
};

export default Checkbox;
