import React, { useState, useEffect, useContext } from "react";
import styles from "./styles/Editprofile.module.scss";
import { submitForm } from "../../lib/registerLogic";
import {
  NameFields,
  ContactFields,
  BirthdayField,
  AddressFields,
  FormButtons,
} from "../../features/register/formFields";
import axios from "axios";
import { MyContext } from "../../Container";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { AlignedContainer } from "../../components/ui/styledComponents";
import { EditPasswordForm } from "./EditPasswordForm";

export default function EditProfile(props) {
  const { setUser, user, authCheckHandler } = useContext(MyContext);
  const [nextUser, setNextUser] = useState(user);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  let timer = null;
  let history = useHistory();

  useEffect(() => {
    if (showSuccess) {
      timer = () =>
        setTimeout(() => {
          history.push(
            user.role == "Manager"
              ? { pathname: "/mpage" }
              : { pathname: "/tpage" }
          );
        }, 3000);
      timer();
    }
    return () => {
      clearTimeout(timer);
    };
  }, [showSuccess]);

  const changePasswordHandler = (e) => {
    e.preventDefault();
    let formObj = submitForm(e);
    axios(
      `${process.env.REACT_APP_BASE_URL}/users/updatePassword/${user._id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
        data: {
          currentPassword: formObj.currentPassword,
          newPassword: formObj.newPassword,
        },
      }
    )
      .then((result) => {
        if (result.data.success) {
          setShowSuccess(true);
        } else {
          console.log(result);
        }
      })
      .catch((err) => authCheckHandler(err));
  };

  const editHandler = (e) => {
    e.preventDefault();
    let formObj = submitForm(e);
    axios(`${process.env.REACT_APP_BASE_URL}/users/users/${user._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
      data: formObj,
    })
      .then((result) => {
        if (result.data.success) {
          console.log(result.data);
          setUser(result.data.updatedUser);
          setShowSuccess(true);
        } else {
          console.log(result); //prepare an error box!
        }
      })
      .catch((err) => authCheckHandler(err));
  };

  return (
    <AlignedContainer>
      <div className="reg">Edit Your Profile!</div>

      {showSuccess && (
        <div className={styles.updateBox}>
          <h3>Your profile has been succeessfully updated </h3>
        </div>
      )}
      {/* form for changing password: */}
      {showPasswordForm && !showSuccess && (
        <EditPasswordForm
          changePasswordHandler={changePasswordHandler}
          setShowPasswordForm={setShowPasswordForm}
        />
      )}
      {/* edit form without password: */}
      {!showSuccess && !showPasswordForm && (
        <div className={styles.regForm}>
          <form
            lassName={styles.formContainer}
            onSubmit={(e) => editHandler(e)}
          >
            <div className="regBox">
              <NameFields
                defaultFirstname={nextUser.firstName}
                defaultLastname={nextUser.lastName}
              />
              <BirthdayField default={nextUser.birthday.split("T")[0]} />
              <ContactFields
                defaultPhoneNumber={nextUser.phoneNumber}
                defaultEmail={nextUser.email}
              />
              <AddressFields defaultAddress={nextUser.address} />
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <FormButtons
                type={"user"}
                redirectOnCancelUrl={
                  user.role == "Manager" ? "/mpage" : "/tpage"
                }
              />
              {!showPasswordForm && !showSuccess && (
                <button
                  type="submit"
                  className="btn changeBtn "
                  onClick={() => setShowPasswordForm(true)}
                >
                  Change Password
                </button>
              )}
            </div>
          </form>
        </div>
      )}
    </AlignedContainer>
  );
}
