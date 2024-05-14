import { useContext, useState } from "react";
import styles from "../../../pages/Teachers/styles/Teachers.module.scss";
import axios from "axios";
import { MyContext } from "../../../Container";
export const RoleButtons = ({ id, setShowRoles }) => {
  const { authCheckHandler } = useContext(MyContext);
  const [selectedRole, setSelectedRole] = useState(null);
  const changeRole = () => {
    axios({
      method: "PUT",
      withCredentials: true,
      url: `${process.env.REACT_APP_BASE_URL}/users/users/${id}`,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: { role: selectedRole },
    })
      .then((result) => {
        if (result.data.success) {
          setShowRoles(false);
          window.location.reload();
        } else {
          console.log(result.data);
        }
      })
      .catch((err) => authCheckHandler(err));
  };
  return (
    <div className={styles.listgroup}>
      <div className={styles.leftAllignedItems}>
        <form>
          <div>
            <label htmlFor="Teacher">
              <input
                style={{ display: "inline", width: "20px", height: "20px" }}
                type="radio"
                id="Teacher"
                name="role"
                value="Teacher"
                onClick={() => setSelectedRole("Teacher")}
              />
              Teacher
            </label>
          </div>
          <div>
            <label htmlFor="Manager">
              <input
                style={{ display: "inline", width: "20px", height: "20px" }}
                type="radio"
                id="Manager"
                name="role"
                value="Manager"
                onClick={() => setSelectedRole("Manager")}
              />
              Manager
            </label>
          </div>
        </form>
      </div>
      <button
        type="submit"
        className="add btn"
        style={{ display: "block", margin: "0 auto" }}
        onClick={() => changeRole()}
        disabled={selectedRole ? false : true}
      >
        save
      </button>
    </div>
  );
};
