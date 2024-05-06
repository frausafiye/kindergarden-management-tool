import React, { useState } from "react";
import { Link } from "react-router-dom";
import ManagerRegister from "./ManagerRegister";
import styles from "../../features/register/styles/registerForm.module.scss";
import { submitForm } from "../../lib/registerLogic";
import {
  AddressFields,
  ContactFields,
} from "../../features/register/formFields/index";
import { InputBox } from "../../features/register/formFields/InputBox";
import { AlignedContainer } from "../../components/ui/styledComponents";

export default function KgRegister() {
  const [data, setData] = useState({});

  const saveKgForm = (e) => {
    e.preventDefault();
    let kgObj = submitForm(e);
    setData({ kg: { ...kgObj, verificationCodes: [] } });
  };

  return (
    <AlignedContainer>
      <div className={styles.regForm}>
        {!data.kg && (
          <form
            className={styles.formContainer}
            onSubmit={(e) => {
              saveKgForm(e);
            }}
            name="kgForm"
          >
            <div className="reg">Register Kindergarten!</div>
            <div>
              <div className="regBox">
                <InputBox>
                  <label className="details">Kindergarten name</label>
                  <br />
                  <input
                    type="text"
                    name="name"
                    placeholder="Kindergarten Name"
                    required
                  />
                </InputBox>
                <ContactFields />
                <AddressFields />
              </div>
              <div className={styles.btnContainer}>
                <button type="submit" value="Next" className="next btn">
                  Next
                </button>
                <Link to="/">
                  <button className="cancel btn">Cancel</button>
                </Link>
              </div>
            </div>
          </form>
        )}
        {data.kg && <ManagerRegister kg={data.kg} />}
      </div>
    </AlignedContainer>
  );
}
