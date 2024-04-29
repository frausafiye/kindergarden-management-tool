import StaffRegister from "../../components/Register/form/StaffRegisterForm";
import { AlignedContainer } from "../../components/ui/styledComponents";

const ManagerRegister = (props) => {
  return (
    <AlignedContainer>
      <StaffRegister type="manager" kg={props.kg || null} />
    </AlignedContainer>
  );
};

export default ManagerRegister;
