import styles from "../../../pages/Teachers/styles/Teachers.module.scss";
import { UserAvatar } from "./UserAvatar";
export const UserInfo = ({ imageNum, firstName, lastName, group }) => {
  return (
    <>
      <UserAvatar imageNum={imageNum} />
      <div className={styles.card}>
        <p className={styles.cardtitle}>
          {firstName} {lastName}
        </p>
      </div>
      <div className={styles.listgroup}>
        <div className={styles.listgroupitem}>
          {group ? `Group: ${group.groupName}` : "Please assign a group"}
        </div>
      </div>
    </>
  );
};
