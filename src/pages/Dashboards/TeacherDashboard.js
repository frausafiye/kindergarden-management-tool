import React, { useContext } from "react";
import styles from "../../features/dashboards/styles/TeacherDashboard.module.scss";
import Calendar from "../../features/calendar/components/Calendar";
import GroupCard from "../../components/cards/GroupCard";
import ToDo from "../../features/todo/components/ToDo";
import UserInfoSidebar from "../../layouts/Sidebar/UserInfoSidebar";
import { MyContext } from "../../Container";
import { AlignedContainer } from "../../components/ui/AlignedContainer";

export default function Tpage(props) {
  const { user } = useContext(MyContext);
  return (
    <AlignedContainer>
      <div className={styles.container}>
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
