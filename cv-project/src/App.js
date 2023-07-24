import PersonalInfo from "./components/GeneralInfo";
import FormalEducation from "./components/education/EducationalExperience";
import { Certifications } from "./components/education/Certifications";

export default function App() {
  return (
    <div>
      <PersonalInfo />
      <FormalEducation />
      <br/>
      <Certifications />
    </div>
  )
}