import React from "react";
import { InputBox } from "./InputBox";

const BirthdayField = () => {
  return (
    <InputBox>
      <label className="details">Birthday</label>
      <input type="date" name="birthday" placeholder="Birthday" required />
    </InputBox>
  );
};
export default BirthdayField;