import React from "react";
import styles from "../styles/children.module.scss";
import kid1 from "../../../assets/kid_avatar.svg";
import kid2 from "../../../assets/kid_avatar2.svg";
import kid3 from "../../../assets/kid_avatar3.svg";
import kid4 from "../../../assets/kid_avatar4.svg";
import EmergencyInfo from "./EmergencyInfo";
import filterEmergencyContacts from "./lib/filterEmergencyContacts";
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
  const filteredContacts = filterEmergencyContacts(emergencyContact);

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
          <p className={styles.info}>{`Birthday: ${birthday.split("T")[0]}`}</p>
        </div>
        <div className={styles.col}>
          <p className={styles.info}>
            {`Address: ${address.street} ${address.number} ${address.postcode} ${address.city}`}
          </p>
        </div>

        <div className={styles.col}>
          {/* <div className={styles.underline}> */}
          <p className={styles.info}>Emergency Contacts:</p>
          {/* <div className={styles.lineThrough}></div> */}
          {/* </div> */}
          {filteredContacts.length ? (
            <EmergencyInfo emergencyContact={filteredContacts} />
          ) : (
            <p className={styles.info}>No emergency contact info provided!</p>
          )}
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
