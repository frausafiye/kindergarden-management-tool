import React from "react";
import { InputBox } from "../ui/InputBox";

const ContactFields = () => {
  return (
    <>
      <InputBox>
        <label className="details">Phone number</label>
        <br />
        <input
          type="text"
          name="phoneNumber"
          placeholder="Phone Number"
          required
        />
      </InputBox>
      {/* <div className="smallBox"> */}
      <InputBox>
        <label className="details">Email</label>
        <br />
        <input type="email" name="email" placeholder="E-mail" required />
      </InputBox>
      {/* </div> */}
    </>
  );
};
export default ContactFields;
