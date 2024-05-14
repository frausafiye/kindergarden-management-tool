import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import styles from "../styles/registerForm.module.scss";
import useSendFormData from "../../../hooks/useSendFormData";
import adjustFormData from "../../../hooks/adjustFormData";
import {
  NameFields,
  ContactFields,
  BirthdayField,
  PasswordField,
  AddressFields,
  FormButtons,
} from "../formFields/index";

export default function TeacherRegisterFrom() {
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
  });

  useEffect(() => {
    console.log(responseData);
  }, [responseData]);

  const submitStaffForm = async (e) => {
    e.preventDefault();
    const adjustedFormData = adjustFormData(e);
    console.log(adjustedFormData);
    console.log(formData);

    setFormData({ adjustedFormData });

    await postRegisterForm(adjustedFormData);
    if ((!error, !isLoading)) {
      handleMessage(true, "Thank you! Teacher added.");
    }
  };

  let timer;
  const handleMessage = (ok, msg) => {
    setMessage({
      submitting: false,
      status: { ok, msg },
    });
    timer = setTimeout(() => {
      history.push({
        pathname: "/login",
        state: {
          email: formData.email,
          password: formData.password,
        },
      });
    }, 2000);
    return () => clearTimeout(timer);
  };

  return (
    <div className={styles.regForm}>
      <form
        className={styles.formContainer}
        onSubmit={(e) => submitStaffForm(e)}
      >
        <div className="reg">Register a Teacher!</div>
        <div className="regBox">
          <NameFields />
          <BirthdayField />
          <PasswordField />
          <ContactFields />
          <AddressFields />
        </div>
        <FormButtons type={"teacher"} />
      </form>
    </div>
  );
}
