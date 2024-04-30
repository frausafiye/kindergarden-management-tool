import React, { useState, useEffect } from "react";
import styles from "../styles/registerForm.module.scss";
import { sendData, submitForm } from "../../../lib/registerLogic";
import { InputBox } from "./InputBox";
import {
  NameFields,
  ContactFields,
  BirthdayField,
  VerificationCodeField,
  PasswordField,
  AddressFields,
  FormButtons,
} from "./index";

export default function StaffRegister(props) {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (formData.manager) {
      if (props.kg) {
        sendData("kg registration", {
          ...formData,
          kg: props.kg,
        });
      } else {
        sendData("manager registration", formData);
      }
    }
    if (formData.teacher) {
      sendData("teacher registation", formData.teacher);
      props.history.push({
        pathname: "/login",
        state: {
          email: formData.teacher.email,
          password: formData.teacher.password,
        },
      });
    }
  }, [formData]);

  const submitStaffForm = (e) => {
    e.preventDefault();
    let staffObj = submitForm(e);
    if (props.type === "teacher") {
      setFormData({ teacher: staffObj });
    }
    if (props.type === "manager") {
      setFormData({ manager: staffObj });
    }
  };

  return (
    <div className={styles.regForm}>
      <form
        className={styles.formContainer}
        onSubmit={(e) => submitStaffForm(e)}
      >
        <div className="reg">
          Register a {props.type === "manager" ? "Menager" : "Teacher"}!
        </div>
        <div className="regBox">
          <NameFields />
          <BirthdayField />

          {props.type === "teacher" && (
            <>
              <InputBox>
                <label className="details">Group name</label>
                <br />
                <input type="text" name="groupName" placeholder="Group Name" />
              </InputBox>
              <VerificationCodeField />
            </>
          )}
          <PasswordField />
          <ContactFields />
          <AddressFields />
        </div>
        <FormButtons type={props.type} />
      </form>
    </div>
  );
}
