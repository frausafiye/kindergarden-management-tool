import React, { useState, useEffect, useContext } from "react";
import styles from "./ChildStyle/ChildRegister.module.scss";
import { sendData, submitForm } from "../../../lib/registerLogic";
import { MyContext } from "../../../Container";
import {
  AddressFields,
  BirthdayField,
  NameFields,
  FormButtons,
  EmergencyContactFields,
  Heading,
} from "./index";

export default function ChildRegister(props) {
  const { kg, user } = useContext(MyContext);
  const [formData, setFormData] = useState("");
  const [categories, setCategories] = useState([
    { _id: "0", name: "Eggs" },
    { _id: "1", name: "Milk" },
    { _id: "2", name: "Peanuts" },
    { _id: "3", name: "Soy" },
    { _id: "4", name: "Wheat" },
    { _id: "5", name: "Tree Nuts" },
    { _id: "6", name: "Seefood" },
    { _id: "7", name: "Fish" },
    { _id: "8", name: "Raw Fruit" },
    { _id: "9", name: "Raw Veggies" },
  ]);
  const [message, setMessage] = useState({
    submitting: false,
    status: null,
  });

  useEffect(() => {
    if (formData.child) {
      sendData("child registration", {
        ...formData.child,
        kg: kg._id,
        attendance: [
          {
            attendanceStatus: "notHere",
            date: new Date().toISOString().split("T")[0],
            // date: "yyyy-mm-dd"
          },
        ],
      });
    } else {
      return;
    }
  }, [formData]);

  const submitChildForm = (e) => {
    e.preventDefault();
    let childObj = submitForm(e);
    setFormData({ child: childObj });
    handleMessage(true, "Thank you! Child added.");
    console.log(childObj);
  };

  let timer;
  const handleMessage = (ok, msg) => {
    setMessage({
      submitting: false,
      status: { ok, msg },
    });
    timer = setTimeout(() => {
      props.history.push({ pathname: "/children" });
    }, 2000);
    return () => clearTimeout(timer);
  };

  return (
    <div className={styles.formContainter}>
      <form
        onSubmit={(e) => submitChildForm(e)}
        name="childForm"
        className={styles.childForm}
      >
        <div className={styles.childFormContainerInner}>
          <div className={styles.childFormInner}>
            <Heading text="Child Information" />
            <NameFields />
            <BirthdayField />

            {/* <div className={styles.inputBox}>
              <label className={styles.details}>Profile Image</label> <br />
              <input type="" name="img" placeholder="img" />
            </div> */}

            <Heading text="Address" />
            <AddressFields />
          </div>

          <div className={styles.childFormInner}>
            <Heading text="Allergies and Dietary Requirements" />
            <div className={styles.listUnstyled}>
              {categories.map((c, i) => (
                <li key={i}>
                  <input
                    type="checkbox"
                    className={styles.checkBox}
                    name={c.name}
                  />
                  <label className={styles.formCheckLabel}>{c.name}</label>
                </li>
              ))}
            </div>

            <div className={styles.inputBox}>
              <label className={styles.details}>
                Other Dietary Requirements
              </label>
              <br />
              <input
                type="text"
                name="dietaryNeeds"
                placeholder="Other allergies or dietary requirements"
              />
            </div>
          </div>

          <div className={styles.childFormInner}>
            <Heading text="Emergency Contact 1:" />
            <EmergencyContactFields index={1} />
            <Heading text="Emergency Contact 2:" />
            <EmergencyContactFields index={2} />
            <FormButtons type="child" />
          </div>
        </div>
      </form>
    </div>
  );
}
