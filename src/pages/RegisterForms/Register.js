import React from "react";
import { Link } from "react-router-dom";
import { AlignedContainer } from "../../components/ui/AlignedContainer";
import styles from "../../features/register/styles/registerForm.module.scss";

export default function Register() {
  return (
    <AlignedContainer>
      <div className={styles.regContainer}>
        <div className="reg">Choose your Account!</div>
        <br />
        <div className={styles.btnContainer}>
          <Link to="/kgregister">
            <button className="att btn">Register a Kindergarten</button>
          </Link>
          <Link to="/tregister">
            <button className="att btn">Register as Teacher</button>
          </Link>
        </div>
      </div>
    </AlignedContainer>
  );
}
