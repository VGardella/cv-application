import PersonalInfo from "./components/GeneralInfo";
import FormalEducation from "./components/education/Degrees";
import { Certifications } from "./components/education/Certifications";
import { Courses } from "./components/education/Courses";
import { PersonalProjects } from "./components/PersonalProjects";
import { WorkExperience } from "./components/WorkExperience";

export default function App() {
  return (
    <div>
      <PersonalInfo />
      <FormalEducation />
      <br/>
      <Certifications />
      <br/>
      <Courses />
      <PersonalProjects />
      <br/>
      <WorkExperience />
    </div>
  )
}