import PersonalInfo from '../GeneralInfo'
import FormalEducation from '../Education'
import PersonalProjects from '../PersonalProjects'
import WorkExperience from '../WorkExperience'

export default function Body() {
    return (
        <div className='body'>
            <PersonalInfo />
            <FormalEducation />
            <PersonalProjects />
            <WorkExperience />
        </div>
    )
}