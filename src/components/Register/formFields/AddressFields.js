import React from "react";
import { InputBox } from "./InputBox";

const AddressFields = () => {
  return (
    <>
      <InputBox>
        <label className="details">Street</label>
        <br />
        <input type="text" name="street" placeholder="Street" required />
      </InputBox>
      <InputBox>
        <label className="details">Number</label>
        <br />
        <input type="text" name="number" placeholder="Number" required />
      </InputBox>
      <InputBox>
        <label className="details">City</label>
        <br />
        <input type="text" name="city" placeholder="City" required />
      </InputBox>
      {/* <div className="smallBox"> */}
      <InputBox>
        <label className="details">Post code</label>
        <br />
        <input type="number" name="postcode" placeholder="Postcode" required />
      </InputBox>
    </>
  );
};
export default AddressFields;
