import StaffRegister from "../../features/register/formFields/StaffRegisterForm";
import { AlignedContainer } from "../../components/ui/styledComponents";

const TeacherRegister = () => {
  return (
    <AlignedContainer>
      <StaffRegister type="teacher" kg={null} />
    </AlignedContainer>
  );
};
export default TeacherRegister;
