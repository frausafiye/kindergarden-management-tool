import React, { useContext } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Mstyles from "../../pages/Dashboards/ManagerDashboard/ManagerDashboard.module.scss";
import Tstyles from "../../pages/Dashboards/TeacherDashboard/TeacherDashboard.module.scss";
import { MyContext } from "../../Container";
import UserImage from "../UserImage";

export default function UserInfoSidebar(props) {
  const { user } = useContext(MyContext);
  const { firstName, lastName, email, phoneNumber, group } = user;
  const location = useLocation();
  const history = useHistory();
  let page = location.pathname === "/mpage" ? "mpage" : "tpage";

  const handleEdit = () => {
    history.push({ pathname: "/editprofile" });
  };

  return (
    <div className={page === "mpage" ? Mstyles.mInfo : Tstyles.tInfo}>
      <UserImage page={page} />
      <div>
        <p>
          {firstName} {lastName}
        </p>
        <p>{email}</p>
        <p>{phoneNumber}</p>
        {group && <p>{group.groupName}</p>}
        <button
          type="submit"
          value="edit"
          className="edit"
          onClick={() => handleEdit()}
        >
          Edit Info
        </button>
      </div>
    </div>
  );
}
{
  /* <a href="https://www.flaticon.com/free-icons/face" title="face icons">Face icons created by Pixel perfect - Flaticon</a> */
}
