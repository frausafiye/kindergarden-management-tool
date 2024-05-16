import axios from "axios";
import { useContext, useState } from "react";
import styles from "../../../pages/Teachers/styles/Teachers.module.scss";
import { MyContext } from "../../../Container";

export const GroupNameButtons = ({ id, groups, setShowGroups }) => {
  const [selectedGroup, setSelectedGroup] = useState(null);
  const { authCheckHandler } = useContext(MyContext);

  const changeGroup = () => {
    //to assign none as group:
    let obj;
    if (selectedGroup == "empty") {
      obj = {
        method: "PUT",
        url: `${process.env.REACT_APP_BASE_URL}/users/userGroup/${id}`,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        withCredentials: true,
      };
    } else {
      obj = {
        method: "PUT",
        url: `${process.env.REACT_APP_BASE_URL}/users/users/${id}`,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        withCredentials: true,
        data: { group: selectedGroup },
      };
    }
    axios(obj)
      .then((result) => {
        if (result.data.success) {
          setShowGroups(false);
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
          {groups?.map((group) => {
            return (
              <div>
                <label key={group.groupName} htmlFor={group.groupName}>
                  <input
                    className={styles.itemsInput}
                    type="radio"
                    id={group.groupName}
                    name="group"
                    value={group.groupName}
                    onClick={() => setSelectedGroup(group._id)}
                  />
                  {group.groupName}
                </label>
              </div>
            );
          })}
          <div>
            <label key="none" htmlFor="none">
              <input
                className={styles.itemsInput}
                type="radio"
                id="none"
                name="group"
                value="none"
                onClick={() => setSelectedGroup("empty")}
              />
              none
            </label>
          </div>
        </form>
      </div>
      <button
        type="submit"
        className="add btn block-btn"
        onClick={() => changeGroup()}
        disabled={selectedGroup ? false : true}
      >
        save
      </button>
    </div>
  );
};
