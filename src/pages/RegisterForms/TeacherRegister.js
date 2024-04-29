import StaffRegister from "../../components/Register/form/StaffRegisterForm";
import { AlignedContainer } from "../../components/ui/styledComponents";

const TeacherRegister = () => {
  return (
    <AlignedContainer>
      <StaffRegister type="teacher" kg={null} />
    </AlignedContainer>
  );
};
export default TeacherRegister;
