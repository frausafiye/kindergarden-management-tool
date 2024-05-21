import { LoginButton } from "./LoginButton";
import styles from "./styles/Login.module.scss";

export const LoginButtons = ({ setFormData }) => {
  return (
    <>
      <div className={styles.btnContainer}>
        <LoginButton type={"submit"} />
        <LoginButton type={"cancel"} />
      </div>
      <div className={styles.btnContainer}>
        <LoginButton type={"explore"} setFormData={setFormData} />
      </div>
    </>
  );
};
