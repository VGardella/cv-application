import { Certifications } from "./education/Certifications";
import { Courses } from "./education/Courses";
import { Degrees } from "./education/Degrees";

export default function FormalEducation() {
    return (
        <div>
            <h1 className='principal-title' id='edu'>Education</h1>
            <Degrees />
            <Certifications />
            <Courses />
        </div>
    )
}