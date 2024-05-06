import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./styles/Editprofile.module.scss";
import { MyContext } from "../../Container";
import { submitForm } from "../../lib/registerLogic";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import { AlignedContainer } from "../../components/ui/styledComponents";

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
          console.log(result); //work on error cases!!!!!
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
      <div className={styles.regForm}>
        {showSuccess && (
          <div className={styles.updateBox}>
            <h3>Your profile has been succeessfully updated </h3>
          </div>
        )}
        {/* form for changing password: */}
        {showPasswordForm && !showSuccess && (
          <form
            className={styles.formContainer}
            onSubmit={(e) => changePasswordHandler(e)}
          >
            <div>
              <div>
                <label className="details">Your current password: </label>
                <br />
                <input
                  type="password"
                  name="currentPassword"
                  placeholder="current password"
                />
              </div>
              <div>
                <label className="details">Your new password: </label>
                <br />
                <input
                  type="password"
                  name="newPassword"
                  placeholder="new password"
                />
              </div>
              <br />
              <div className={styles.btnContainer}>
                <button
                  className="cancel btn"
                  onClick={() => setShowPasswordForm(false)}
                >
                  Cancel
                </button>
                <button type="submit" value="Register" className="att btn">
                  Submit
                </button>
              </div>
            </div>
          </form>
        )}

        {/* edit form without password: */}
        {!showSuccess && !showPasswordForm && (
          <form
            className={styles.formContainer}
            onSubmit={(e) => editHandler(e)}
          >
            <div className={styles.regBox}>
              <div>
                <div>
                  <label className="details">First name</label>
                  <br />
                  <input
                    type="text"
                    name="firstName"
                    defaultValue={nextUser.firstName}
                  />
                </div>

                <div>
                  <label className="details">Last name</label>
                  <br />
                  <input
                    type="text"
                    name="lastName"
                    defaultValue={nextUser.lastName}
                  />
                </div>

                <div>
                  <label className="details">Birthday</label>
                  <br />
                  <input
                    type="date"
                    name="birthday"
                    defaultValue={nextUser.birthday.split("T")[0]}
                    required
                  />
                </div>

                <div>
                  <label className="details">Phone number</label>
                  <br />
                  <input
                    type="text"
                    name="phoneNumber"
                    defaultValue={nextUser.phoneNumber}
                  />
                </div>

                <div>
                  <label className="details">Email</label>
                  <br />
                  <input
                    type="email"
                    name="email"
                    defaultValue={nextUser.email}
                  />
                </div>
              </div>

              <div className={styles.address}>
                <div>
                  <label className="details">Street</label>
                  <br />
                  <input
                    type="text"
                    name="street"
                    defaultValue={nextUser.address.street}
                  />
                </div>

                <div>
                  <label className="details">Number</label>
                  <br />
                  <input
                    type="text"
                    name="number"
                    defaultValue={nextUser.address.number}
                  />
                </div>

                <div>
                  <label className="details">City</label>
                  <br />
                  <input
                    type="text"
                    name="city"
                    defaultValue={nextUser.address.city}
                  />
                </div>

                <div>
                  <label className="details">Post code</label>
                  <br />
                  <input
                    type="number"
                    name="postcode"
                    defaultValue={nextUser.address.postcode}
                  />
                </div>

                <br />
                <div className={styles.editBtns}>
                  <Link to={user.role == "Manager" ? "/mpage" : "/tpage"}>
                    <button className="cancel btn">Cancel</button>
                  </Link>
                  <button type="submit" value="Register" className="att btn">
                    Submit
                  </button>
                  {!showPasswordForm && !showSuccess && (
                    <button
                      type="submit"
                      value="Register"
                      className="att btn"
                      onClick={() => setShowPasswordForm(true)}
                    >
                      Change Password
                    </button>
                  )}
                </div>
                <br />
              </div>
            </div>
          </form>
        )}
      </div>
    </AlignedContainer>
  );
}
