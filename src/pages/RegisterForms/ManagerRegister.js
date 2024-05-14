import ManagerRegisterForm from "../../features/register/forms/ManagerRegistration";
import { AlignedContainer } from "../../components/ui/styledComponents";

const ManagerRegister = (props) => {
  return (
    <AlignedContainer>
      <ManagerRegisterForm kg={props.kg || null} />
    </AlignedContainer>
  );
};

export default ManagerRegister;
