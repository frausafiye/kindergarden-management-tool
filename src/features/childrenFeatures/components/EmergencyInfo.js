import styles from "../styles/children.module.scss";

const EmergencyInfo = ({ emergencyContact }) => {
  return (
    <>
      {emergencyContact.map(
        (contact, index) =>
          contact && (
            <p key={index} className={styles.info}>
              {Object.keys(contact).map((key, i) => (
                <span key={key} className={styles.emergencyInfo}>
                  {i === 0 ? `${index + 1})` + contact[key] : contact[key]}
                </span>
              ))}
            </p>
          )
      )}
    </>
  );
};
export default EmergencyInfo;
