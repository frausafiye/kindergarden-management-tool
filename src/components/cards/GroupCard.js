import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { MyContext } from "../../Container";
import styles from "../../features/dashboards/styles/TeacherDashboard.module.scss";
export default function GroupCard() {
  const { user } = useContext(MyContext);
  const { groupName, description, ageGroup, room } = user.group;
  const history = useHistory();

  const handleView = () => {
    history.push({
      pathname: ["/children"],
      state: { group: user.group },
    });
  };
  return (
    <div className={styles.group}>
      <div className={styles.gHead}>
        <h2>Group:</h2>
        <h3 className={styles.gHeader}>{groupName}</h3>
      </div>
      {description && <p>{description}</p>}
      {ageGroup && <li>Group age: {ageGroup}</li>}
      {room && <li>Room: {room}</li>}
      <br />
      <br />
      <button onClick={() => handleView()} className="add btn">
        View Group
      </button>
      <Link to="/attendance">
        <button className="view btn">Check Attendance</button>
      </Link>
    </div>
  );
}