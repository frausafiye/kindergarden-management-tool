import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import styles from "../styles/registerForm.module.scss";
import useSendFormData from "../../../hooks/useSendFormData";
import adjustFormData from "../../../hooks/adjustFormData";
import { InputBox } from "../formFields/InputBox";
import {
  NameFields,
  ContactFields,
  BirthdayField,
  VerificationCodeField,
  PasswordField,
  AddressFields,
  FormButtons,
} from "../formFields/index";

export default function ManagerRegisterFrom({ kg }) {
  const [formData, setFormData] = useState({});
  const history = useHistory();
  const [message, setMessage] = useState({
    submitting: false,
    status: null,
  });

  // Custom hook to handle form submission
  const {
    isLoading,
    error,
    responseData,
    handleSubmit: postRegisterForm,
  } = useSendFormData({
    ...formData,
    kg: kg,
  });

  const submitStaffForm = async (e) => {
    e.preventDefault();
    const adjustedFormData = adjustFormData(e);
    console.log(adjustedFormData);
    console.log(formData);
    setFormData({ manager: adjustedFormData, kg: kg });
    await postRegisterForm(adjustedFormData);
    if ((!error, !isLoading)) {
      handleMessage(true, "Thank you! Kindergarden and a manager added.");
    }
  };

  let timer;
  const handleMessage = (ok, msg) => {
    setMessage({
      submitting: false,
      status: { ok, msg },
    });
    timer = setTimeout(() => {
      history.push({ pathname: "/mpage" });
    }, 2000);
    return () => clearTimeout(timer);
  };

  return (
    <div className={styles.regForm}>
      <form
        className={styles.formContainer}
        onSubmit={(e) => submitStaffForm(e)}
      >
        <div className="reg">Register a Menager!</div>
        <div className="regBox">
          <NameFields />
          <BirthdayField />
          <>
            <InputBox>
              <label className="details">Group name</label>
              <br />
              <input type="text" name="groupName" placeholder="Group Name" />
            </InputBox>
            <VerificationCodeField />
          </>
          <PasswordField />
          <ContactFields />
          <AddressFields />
        </div>
        <FormButtons type={"manager"} />
      </form>
    </div>
  );
}
