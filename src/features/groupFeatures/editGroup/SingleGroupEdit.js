import { useContext, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import styles from "../styles/groups.module.scss";
import { MyContext } from "../../../Container";
import { GroupForm } from "../form/GroupForm";

export default function SingleGroupEdit(props) {
  const { authCheckHandler } = useContext(MyContext);
  const [editedGroup, setEditedGroup] = useState({});
  const [group, setGroup] = useState(
    props.location.state ? props.location.state.group : {}
  );
  const [message, setMessage] = useState({
    submitting: false,
    status: null,
  });
  let history = useHistory();

  let timer;
  const handleMessage = (ok, msg) => {
    setMessage({
      submitting: false,
      status: { ok, msg },
    });
    timer = setTimeout(() => {
      props.history.push({ pathname: "/groups" });
    }, 2000);
    return () => clearTimeout(timer);
  };

  const handleDelete = () => {
    axios(`${process.env.REACT_APP_BASE_URL}/groups/deleteGroup/${group._id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    })
      .then((result) => {
        if (result.data.success) {
          console.log(result.data);
          history.push("/groups");
        } else {
          console.log(result);
        }
      })
      .catch((err) => authCheckHandler(err));
  };

  const handleEdit = (e) => {
    e.preventDefault();
    setMessage({ submitting: true });
    axios(`${process.env.REACT_APP_BASE_URL}/groups/updateGroup/${group._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
      data: editedGroup,
    })
      .then((result) => {
        if (result.success) {
          setEditedGroup(result.group);
          handleMessage(true, "Thank you! The group was updated.");
        } else {
          console.log(result);
        }
      })
      .catch((err) => authCheckHandler(err));
  };

  const editedValue = (e) => {
    setEditedGroup({ ...editedGroup, [e.target.name]: e.target.value });
  };

  return (
    <div className={styles.regForm}>
      <div className={styles.title}>
        <h3>Edit Group!</h3>
      </div>
      <GroupForm
        group={group}
        onChangeFunct={editedValue}
        onSubmitFunc={handleEdit}
        message={message}
        actionType={"edit"}
      />
      <button
        type="submit"
        value="delete"
        className="next btn"
        style={{
          width: "5rem",
          margin: "0 auto",
        }}
        onClick={() => handleDelete(group._id)}
      >
        Delete
      </button>
    </div>
  );
}
