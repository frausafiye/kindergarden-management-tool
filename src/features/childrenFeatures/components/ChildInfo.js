import React from "react";
import styles from "../styles/children.module.scss";
import kid1 from "../../../assets/kid_avatar.svg";
import kid2 from "../../../assets/kid_avatar2.svg";
import kid3 from "../../../assets/kid_avatar3.svg";
import kid4 from "../../../assets/kid_avatar4.svg";
export default function ChildInfo({ child, imageNum }) {
  const {
    firstName,
    lastName,
    birthday,
    address,
    emergencyContact,
    allergies,
    dietaryNeeds,
    group,
  } = child;
  const images = [kid1, kid2, kid3, kid4];
  const randImg = images[imageNum];
  return (
    <>
      <div className={styles.kidimg}>
        <img src={randImg} className={styles.kid} alt="profileImg" />
      </div>
      <div className={styles.col1}>
        <p className={styles.bold2}>
          {firstName} {lastName}
        </p>
      </div>
      <div className={styles.maininfo}>
        <div className={styles.col}>
          <p className={styles.info}>{birthday.split("T")[0]}</p>
        </div>
        <div className={styles.col}>
          <p className={styles.info}>
            {address.street} {address.number},{address.postcode} {address.city}
          </p>
        </div>
        <div className={styles.col}>
          <p className={styles.info}>Emergency Contact 1:</p>
          <p className={styles.info}>
            {emergencyContact[0].emerName1}
            {emergencyContact[0].emerEmail1}
            {emergencyContact[0].emerNumber1}
          </p>
        </div>
        <div className={styles.col}>
          <p className={styles.info}>Emergency Contact 2:</p>
          <p className={styles.info}>
            {emergencyContact[1].emerName2} {emergencyContact[1].emerEmail2}
            {emergencyContact[1].emerNumber2}
          </p>
        </div>

        <div className={styles.col2}>
          <p className={styles.info}>{"Allergies: " + allergies.join(" ")}</p>
        </div>
        <div className={styles.col2}>
          <p className={styles.info}>
            Dietary Needs:
            {dietaryNeeds ? dietaryNeeds : "No dietary needs provided"}
          </p>
        </div>
        <div className={styles.col2}>
          <p className={styles.info}>
            Group: {group ? group.groupName : "none"}
          </p>
        </div>
      </div>
    </>
  );
}