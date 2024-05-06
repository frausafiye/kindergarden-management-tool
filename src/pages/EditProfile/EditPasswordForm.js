import React from "react";
import styles from "./styles/Editprofile.module.scss";

export const EditPasswordForm = ({
  changePasswordHandler,
  setShowPasswordForm,
}) => {
  return (
    <form
      className={styles.formContainer}
      onSubmit={(e) => changePasswordHandler(e)}
    >
      <div>
        <div>
          <label className="details">Your current password: </label>
          <br />
          <input
            type="password"
            name="currentPassword"
            placeholder="current password"
          />
        </div>
        <div>
          <label className="details">Your new password: </label>
          <br />
          <input
            type="password"
            name="newPassword"
            placeholder="new password"
          />
        </div>
        <br />
        <div className={styles.btnContainer}>
          <button
            className="cancel btn"
            onClick={() => setShowPasswordForm(false)}
          >
            Cancel
          </button>
          <button type="submit" value="Register" className="att btn">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};
