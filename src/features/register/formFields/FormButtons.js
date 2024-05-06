import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/registerForm.module.scss";
const FormButtons = ({ type, redirectOnCancelUrl }) => {
  return (
    <div className={styles.btnContainer}>
      <Link to={redirectOnCancelUrl || "/"}>
        <button className="cancel btn formBtn">Cancel</button>
      </Link>
      <button
        type="submit"
        value="Register"
        className={`btn formBtn  ${type === "teacher" ? "next" : "att"}`}
      >
        Submit
      </button>
    </div>
  );
};
export default FormButtons;
