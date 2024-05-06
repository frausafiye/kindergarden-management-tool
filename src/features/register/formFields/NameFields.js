import React from "react";
import { InputBox } from "./InputBox";

const NameFields = ({ defaultFirstname, defaultLastname }) => {
  return (
    <>
      <InputBox>
        <label className="details">First name</label>
        <br />
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          defaultValue={defaultFirstname ? defaultFirstname : ""}
          required
        />
      </InputBox>
      <InputBox>
        <label className="details">Last name</label>
        <br />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          defaultValue={defaultLastname ? defaultLastname : ""}
          required
        />
      </InputBox>
    </>
  );
};
export default NameFields;
