import React from "react";
import styles from "./ManagerDashboard.module.scss";
import Calendar from "../../../components/Cards/appCards/Calendar/Calendar";
import TeachersCard from "../../../components/Cards/TeachersCard";
import ChildrenCard from "../../../components/Cards/ChildrenCard";
import GroupsCard from "../../../components/Cards/GroupsCard";
import Todo from "../../todo/components/ToDo";
import UserInfoSidebar from "../../../layouts/Sidebar/UserInfoSidebar";
import { AlignedContainer } from "../../../components/ui/styledComponents";

export default function Mpage(props) {
  return (
    <AlignedContainer>
      <div className={styles.mpContainer}>
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
