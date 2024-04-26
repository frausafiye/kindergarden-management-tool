import { InputBox } from "../ui/InputBox";

const PasswordField = () => {
  return (
    <InputBox>
      <label className="details">Password</label>
      <br />
      <input type="password" name="password" placeholder="Password" required />
    </InputBox>
  );
};
export default PasswordField;
