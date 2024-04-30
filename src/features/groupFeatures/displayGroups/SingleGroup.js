import React, { useState } from "react";
import SingleGroupEdit from "../editGroup/SingleGroupEdit";
import styles from "../styles/groups.module.scss";
import { Link } from "react-router-dom";
import { GroupInfo } from "./GroupInfo";

export default function SingleGroup(props) {
  const [showForm, setShowForm] = useState(false);

  const handleEdit = (group) => {
    props.history.push({ pathname: "/editgroup", state: { group: group } });
  };

  const group = props.location.state.group;
  return (
    <>
      <div className={styles.scontainer} key={group._id}>
        <>
          {showForm && (
            <div>
              <SingleGroupEdit />
            </div>
          )}
          <GroupInfo group={group} handleEdit={handleEdit} />
        </>
      </div>
      <Link to="/groups">
        <button type="submit" value="back" className="back">
          Go Back
        </button>
      </Link>
    </>
  );
}
