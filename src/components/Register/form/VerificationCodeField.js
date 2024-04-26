import React from "react";
import { InputBox } from "../ui/InputBox";

const VerificationCodeField = () => {
  return (
    <InputBox>
      <label className="details">Verification Code</label>
      <br />
      <input
        type="text"
        name="verificationCode"
        placeholder="Enter the verification code provided by your manager."
        required
      />
    </InputBox>
  );
};
export default VerificationCodeField;
