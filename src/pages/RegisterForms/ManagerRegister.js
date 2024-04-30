import StaffRegister from "../../features/register/formFields/StaffRegisterForm";
import { AlignedContainer } from "../../components/ui/styledComponents";

const ManagerRegister = (props) => {
  return (
    <AlignedContainer>
      <StaffRegister type="manager" kg={props.kg || null} />
    </AlignedContainer>
  );
};

export default ManagerRegister;
