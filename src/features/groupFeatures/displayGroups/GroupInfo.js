import styles from "../styles/groups.module.scss";
import { Link } from "react-router-dom";

export const GroupInfo = ({ group, handleEdit }) => {
  return (
    <div>
      <div className={styles.col1}>
        <p className={styles.bold}>Group:</p>
        <p className={styles.bold2}>{group.groupName}</p>
      </div>
      <div className={styles.col}>
        <p className={styles.info}>Teacher:</p>
        {group.teachers.map((teacher) => {
          return (
            <p className={styles.info}>
              {teacher.firstname} {teacher.lastname}
            </p>
          );
        })}
      </div>
      <div className={styles.col}>
        <p className={styles.info1}>Room:</p>
        <p className={styles.info}>{group.room}</p>
      </div>
      <div className={styles.col}>
        <p className={styles.info}>Group size:</p>
        <p className={styles.info}>{group.children.length}</p>
        <Link to="/children">
          <button type="submit" value="view" className="view btn">
            view children
          </button>
        </Link>
      </div>
      <div className={styles.col}>
        <p className={styles.info}>Group age:</p>
        <p className={styles.info}>{group.ageGroup}</p>
      </div>
      <button
        type="submit"
        value="edit"
        className="edit btn"
        onClick={() => handleEdit(group)}
      >
        Edit
      </button>
    </div>
  );
};
