import styles from "../../../pages/Teachers/styles/Teachers.module.scss";
import user1 from "../../../assets/user1.png";
import user2 from "../../../assets/user2.png";
import user3 from "../../../assets/user3.png";
import user4 from "../../../assets/user4.png";

const images = [user1, user2, user3, user4];

export const UserAvatar = (props) => {
  const randImg = images[props.imageNum];
  return (
    <div className={styles.imgContainer}>
      <img variant="top" src={randImg} alt="user" />
    </div>
  );
};
