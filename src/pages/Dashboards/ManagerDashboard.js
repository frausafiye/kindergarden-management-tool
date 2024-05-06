import React from "react";
import styles from "../../features/dashboards/styles/ManagerDashboard.module.scss";
import Calendar from "../../features/calendar/components/Calendar";
import TeachersCard from "../../components/cards/TeachersCard";
import ChildrenCard from "../../components/cards/ChildrenCard";
import GroupsCard from "../../components/cards/GroupsCard";
import Todo from "../../features/todo/components/ToDo";
import UserInfoSidebar from "../../layouts/Sidebar/UserInfoSidebar";
import { AlignedContainer } from "../../components/ui/styledComponents";

export default function Mpage(props) {
  return (
    <AlignedContainer>
      <div className={styles.container}>
        <UserInfoSidebar />
        <div className={styles.features}>
          <GroupsCard />
          <TeachersCard />
          <ChildrenCard />
          <Todo />
          <Calendar />
        </div>
      </div>
    </AlignedContainer>
  );
}
