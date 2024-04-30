import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/registerForm.module.scss";
const FormButtons = ({ type }) => {
  return (
    <div className={styles.btnContainer}>
      <Link to="/">
        <button className="cancel">Cancel</button>
      </Link>
      <button
        type="submit"
        value="Register"
        className={type === "teacher" ? "next" : "att"}
      >
        Submit
      </button>
    </div>
  );
};
export default FormButtons;
