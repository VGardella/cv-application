import PersonalInfo from '../GeneralInfo'
import FormalEducation from '../Education'
import PersonalProjects from '../PersonalProjects'
import WorkExperience from '../WorkExperience'

export default function Body() {
    return (
        <div className='body'>
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