import React, { useContext } from "react";
import styles from "../styles/TeacherDashboard.module.scss";
import Calendar from "../../calendar/components/Calendar";
import GroupCard from "../../../components/Cards/GroupCard";
import ToDo from "../../todo/components/ToDo";
import UserInfoSidebar from "../../../layouts/Sidebar/UserInfoSidebar";
import { MyContext } from "../../../Container";
import { AlignedContainer } from "../../../components/ui/styledComponents";

export default function Tpage(props) {
  const { user } = useContext(MyContext);
  return (
    <AlignedContainer>
      <div className={styles.tpContainer}>
        <UserInfoSidebar />
        <div className={styles.featuresBox}>
          <div className={styles.features}>
            {user.group && <GroupCard />}
            <ToDo />
            <Calendar />
          </div>
        </div>
      </div>
    </AlignedContainer>
  );
}
