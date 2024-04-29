import React from "react";
import styles from "./ChildStyle/ChildRegister.module.scss";

const Heading = ({ text }) => {
  return (
    <div className={styles.regInfo}>
      <h3>{text}</h3>
    </div>
  );
};
export default Heading;
