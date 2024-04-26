import StaffRegister from "../../components/Register/form/StaffRegisterForm";

const ManagerRegister = (props) => {
  return <StaffRegister type="manager" kg={props.kg || null} />;
};

export default ManagerRegister;
