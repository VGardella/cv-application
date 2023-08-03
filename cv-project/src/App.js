import PersonalInfo from "./components/GeneralInfo";
import FormalEducation from "./components/Education";
import { PersonalProjects } from "./components/PersonalProjects";
import { WorkExperience } from "./components/WorkExperience";

export default function App() {
  return (
    <div>
      <h1 className='principal-title'>Welcome to my Page!</h1>
      <hr/>
      <PersonalInfo />
      <br/>
      <FormalEducation />
      <br/>
      <PersonalProjects />
      <br/>
      <WorkExperience />
    </div>
  )
}