import React from "react";
import { StatusMessage } from "./StatusMessage";
import { FormButtons } from "./FormButtons";
import { FormField } from "./FormField";
import styles from "../styles/groups.module.scss";

export const GroupForm = ({
  onSubmitFunc,
  message,
  onChangeFunction,
  group,
  actionType,
}) => {
  return (
    <form onSubmit={onSubmitFunc}>
      <div className={styles.addcontainer}>
        <FormField
          label="Group Name"
          name="groupName"
          placeholder={group?.groupName || "groupName"}
          onChangeFunction={onChangeFunction}
        />
        <FormField
          label="Room"
          name="room"
          placeholder={group?.room || "room"}
          onChangeFunction={onChangeFunction}
        />
        <FormField
          label="Age Group"
          name="ageGroup"
          placeholder={group?.ageGroup || "ex: 1-3 years"}
          onChangeFunction={onChangeFunction}
        />
        <FormField
          label="Description"
          name="description"
          placeholder={group?.description || "group description"}
          onChangeFunction={onChangeFunction}
        />
      </div>
      <div className={styles.btnContainer}>
        <FormButtons actionType={actionType} />
        {message.status && <StatusMessage message={message} />}
      </div>
    </form>
  );
};
