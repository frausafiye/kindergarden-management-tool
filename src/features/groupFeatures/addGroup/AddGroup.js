import { useState, useContext } from "react";
import axios from "axios";
import { MyContext } from "../../../Container";
import styles from "../styles/groups.module.scss";
import { GroupForm } from "../form/GroupForm";

export default function AddGroup(props) {
  const { user, authCheckHandler } = useContext(MyContext);
  const [data, setData] = useState({});
  const [message, setMessage] = useState({
    submitting: false,
    status: null,
  });

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

  const submitForm = (e) => {
    e.preventDefault();
    setMessage({ submitting: true });
    axios({
      method: "POST",
      url: `${process.env.REACT_APP_BASE_URL}/groups/addGroup`,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      withCredentials: true,
      data: { ...data, kg: user.kg },
    })
      .then((response) => {
        if (response.data.success) {
          handleMessage(true, "Thank you! We received your information.");
          console.log(response.data.group);
        } else {
          console.log(response);
        }
      })
      .catch((err) => authCheckHandler(err));
  };

  const grabValue = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <div className={styles.maincontainer}>
      <div className={styles.title}>
        <h3>Information we need:</h3>
      </div>
      <GroupForm
        onSubmitFunc={submitForm}
        onChangeFunction={grabValue}
        message={message}
        group={null}
        actionType={"add"}
      />
    </div>
  );
}
