import styles from "../styles/groups.module.scss";

export const FormField = ({ label, name, placeholder, onChangeFunction }) => {
  return (
    <div className={styles.addinfo}>
      <label className="details">{label}</label>
      <br />
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        onChange={onChangeFunction}
      />
    </div>
  );
};
