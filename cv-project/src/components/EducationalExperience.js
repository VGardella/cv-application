import { useState } from 'react';

// export default function EducationalExperience() {
    
// }

export default function FormalEducation() {
    let edu = {
        bachelor: {
            university: 'Universidad Nacional de La Plata',
            school: 'Facultad de Ciencias Exactas',
            career: 'Bachelor\'s degree in Biotechnology and Molecular Biology',
            status: 'Complete',
            duration: '2013-2018',
        },
        phd: {
            university: 'Universidad Nacional de La Plata',
            institute: 'Institute of Biotecnology and Molecular Biology',
            career: 'PhD in Biotechnology and Molecular Biology',
            status: 'Abandoned',
            duration: '2018-2022',
            theme: 'Developement of molecular strategies for the control of the citrus disease HuangLongBing.'
        } 
    }

    const [ isEditing, setEditing ] = useState(false);
    const [ education, setEducation ] = useState(edu);

    let eduStructure;
    let phdStructure;
    let newEdu = {};

    if (isEditing) {
        eduStructure = (
            <form class='cv-form'>
                <label>Career: </label>
                <input name='career' placeholder={education.bachelor.career} onChange={handleInfo}></input>
                <br />
                <label>Institution: </label>
                <input name='school' placeholder={education.bachelor.school} onChange={handleInfo}></input>
                , 
                <input name='university' placeholder={education.bachelor.university} onChange={handleInfo}></input>
                <br />
                <label>Status: </label>
                <input name='status' placeholder={education.bachelor.status} onChange={handleInfo}></input>
                <br />
                <label>Duration: </label>
                <input name='duration' placeholder={education.bachelor.duration} onChange={handleInfo}></input>
            </form>
        );
        
        phdStructure = (
            <form class='cv-form'>
                <label>Career: </label>
                <input name='career' placeholder={education.phd.career} onChange={handleInfo}></input>
                <br />
                <label>Institution: </label>
                <input name='institute' placeholder={education.phd.institute} onChange={handleInfo}></input>
                 - 
                <input name='university' placeholder={education.phd.university} onChange={handleInfo}></input>
                <br />
                <label>Status: </label>
                <input name='status' placeholder={education.phd.status} onChange={handleInfo}></input>
                <br />
                <label>Duration: </label>
                <input name='duration' placeholder={education.phd.duration} onChange={handleInfo}></input>
            </form>
        );
    } else {
        eduStructure = (
            <div>
                <b>Career: </b> {education.bachelor.career}
                <br/>
                <b>Institute: </b> {education.bachelor.school}, {education.bachelor.university}
                <br/>
                <b>Status: </b> {education.bachelor.status}
                <br/>
                <b>Duration: </b> {education.bachelor.duration}
                <br/>
            </div>
        );
        
        phdStructure = (
            <div>
            <b>Career: </b> {education.phd.career}
            <br/>
            <b>Institute: </b> {education.phd.institute} - {education.phd.university}
            <br/>
            <b>Theme: </b> {education.phd.theme}
            <br/>
            <b>Status: </b> {education.phd.status}
            <br/>
            <b>Duration: </b> {education.phd.duration}
            <br/>
        </div>
        );
    }

    function handleEdit(e) {
        setEditing(true);
    }

    function handleInfo(e) {
        newEdu = {
            ...education,
            [e.target.name]: e.target.value,
        };
    };

    function handleSave(e) {
        e.preventDefault();
        setEducation(newEdu);
        setEditing(false);
    }
    
    return (
        <div class='principal'>
            <h1 class='principal-title'>Education</h1>
            <h2 class='section-title'>Degrees</h2>
            <hr/>
            <h3 class='section-title'>Undergraduate Degree</h3>
            { eduStructure }
            <br />
            <h3 class='section-title'>Postgraduate Degree</h3>
            { phdStructure }

            {isEditing 
            ? <button onClick={handleSave}>
                Save Information
            </button>
            : <button onClick={handleEdit}>
                Edit Information
            </button>
            }
        </div>
    );
}

export function Certifications() {

}

export function Courses() {

}