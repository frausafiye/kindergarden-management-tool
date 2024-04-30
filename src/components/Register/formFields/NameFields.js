import React from "react";
import { InputBox } from "./InputBox";

const NameFields = () => {
  return (
    <>
      <InputBox>
        <label className="details">First name</label>
        <br />
        <input type="text" name="firstName" placeholder="First Name" required />
      </InputBox>
      <InputBox>
        <label className="details">Last name</label>
        <br />
        <input type="text" name="lastName" placeholder="Last Name" required />
      </InputBox>
    </>
  );
};
export default NameFields;
