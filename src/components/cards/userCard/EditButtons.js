import axios from "axios";
import styles from "../../../pages/Teachers/styles/Teachers.module.scss";
import { useContext } from "react";
import { MyContext } from "../../../Container";

export const EditButtons = ({
  showRoles,
  setShowRoles,
  groups,
  setGroups,
  showGroups,
  setShowGroups,
}) => {
  const { kg, authCheckHandler } = useContext(MyContext);
  //TODO:fetch only the group names
  const getAllGroups = () => {
    axios({
      method: "GET",
      withCredentials: true,
      url: `${process.env.REACT_APP_BASE_URL}/groups/getAllGroups/${kg._id}`,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((result) => {
        if (result.data.success) {
          setGroups(result.data.allGroups);
        } else {
          console.log(result.data);
        }
      })
      .catch((err) => authCheckHandler(err));
  };

  return (
    <div className={styles.btnContainer}>
      <button
        className="edit2 btn"
        onClick={
          !groups
            ? () => {
                getAllGroups();
                setShowGroups(true);
              }
            : () => setShowGroups(!showGroups)
        }
      >
        edit group
      </button>
      <button className="edit3 btn" onClick={() => setShowRoles(!showRoles)}>
        edit role
      </button>
    </div>
  );
};
