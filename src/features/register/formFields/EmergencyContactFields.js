import React from "react";
import styles from "../styles/ChildStyle/ChildRegister.module.scss";

const EmergencyContactFields = ({ index }) => {
  return (
    <>
      <div className={styles.emerInput}>
        <label className={styles.details}>Full Name</label> <br />
        <input
          type="text"
          name={`emerName1${index}`}
          placeholder="Full Name"
          required
        />
      </div>

      <div className={styles.emerInput}>
        <label className={styles.details}>Email</label>
        <br />
        <input
          type="email"
          name={`emerEmail${index}`}
          placeholder="E-mail"
          required
        />
      </div>

      <div className={styles.emerInput}>
        <label className={styles.details}>Number</label>
        <br />
        <input
          type="text"
          name={`emerNumber${index}`}
          placeholder="Number"
          required
        />
      </div>
    </>
  );
};
export default EmergencyContactFields;
