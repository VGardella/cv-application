import { useState } from 'react';

// export default function EducationalExperience() {
    
// }

export default function FormalEducation() {
    let edu = {
        bachelor: {
            university: 'Facultad de Ciencias Exactas, Universidad Nacional de La Plata',
            school: 'Facultad de Ciencias Exactas',
            career: 'Biotechnology and Molecular Biology',
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
                <input name='career' placeholder={education.name} onChange={handleInfo}></input>
                <br />
                <label>Institution: </label>
                <input name='school' placeholder={education.school} onChange={handleInfo}></input>
                , 
                <input name='university' placeholder={education.university} onChange={handleInfo}></input>
                <br />
                <label>Status: </label>
                <input name='status' placeholder={education.status} onChange={handleInfo}></input>
                <br />
                <label>Duration: </label>
                <input name='duration' placeholder={education.duration} onChange={handleInfo}></input>
            </form>
        );
        
        phdStructure = (
            <form class='cv-form'>
                <label>Career: </label>
                <input name='career' placeholder={education.name} onChange={handleInfo}></input>
                <br />
                <label>Institution: </label>
                <input name='institute' placeholder={education.institute} onChange={handleInfo}></input>
                 - 
                <input name='university' placeholder={education.university} onChange={handleInfo}></input>
                <br />
                <label>Status: </label>
                <input name='status' placeholder={education.status} onChange={handleInfo}></input>
                <br />
                <label>Duration: </label>
                <input name='duration' placeholder={education.duration} onChange={handleInfo}></input>
            </form>
        );
    } else {
        eduStructure = (
            <div>
                <b>Career: </b> {education.career}
                <br/>
                <b>Institute: </b> {education.school}, {education.university}
                <br/>
                <b>Status: </b> {education.status}
                <br/>
                <b>Duration: </b> {education.duration}
                <br/>
            </div>
        );
        
        phdStructure = (
            <div>
            <b>Career: </b> {education.career}
            <br/>
            <b>Institute: </b> {education.institute} - {education.university}
            <br/>
            <b>Status: </b> {education.status}
            <br/>
            <b>Duration: </b> {education.duration}
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
    
}

export function Certifications() {

}

export function Courses() {

}