import React, { useState } from "react";
import styles from "../../../pages/Teachers/styles/Teachers.module.scss";
import { UserInfo } from "./UserInfo";
import { GroupNameButtons } from "./GroupNameButtons";
import { RoleButtons } from "./RoleButtons";
import { EditButtons } from "./EditButtons";

export default function UserCard(props) {
  const { _id, firstName, lastName, group } = props.user;
  const [groups, setGroups] = useState();
  const [showRoles, setShowRoles] = useState(false);
  const [showGroups, setShowGroups] = useState(false);

  return (
    <div className={styles.sContainer} bg="success" key={_id}>
      <UserInfo
        imageNum={props.imageNum}
        firstName={firstName}
        lastName={lastName}
        group={group}
      />

      <EditButtons
        groups={groups}
        setGroups={setGroups}
        showGroups={showGroups}
        setShowGroups={setShowGroups}
        showRoles={showRoles}
        setShowRoles={setShowRoles}
      />
      {showRoles && <RoleButtons id={_id} setShowRoles={setShowRoles} />}
      {showGroups && (
        <GroupNameButtons
          id={_id}
          groups={groups}
          setShowGroups={setShowGroups}
        />
      )}
    </div>
  );
}
