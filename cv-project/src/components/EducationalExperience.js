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

    if (isEditing) {
        eduStructure = (
            <form class='cv-form'>
                <label>Career: </label>
                <input name='career' value={education.bachelor.career} onChange={handleInfo}></input>
                <br />
                <label>Institution: </label>
                <input name='school' value={education.bachelor.school} onChange={handleInfo}></input>
                , 
                <input name='university' value={education.bachelor.university} onChange={handleInfo}></input>
                <br />
                <label>Status: </label>
                <input name='status' value={education.bachelor.status} onChange={handleInfo}></input>
                <br />
                <label>Duration: </label>
                <input name='duration' value={education.bachelor.duration} onChange={handleInfo}></input>
            </form>
        );
        
        phdStructure = (
            <form class='cv-form'>
                <label>Career: </label>
                <input name='career' value={education.phd.career} onChange={handleInfo}></input>
                <br />
                <label>Institution: </label>
                <input name='institute' value={education.phd.institute} onChange={handleInfo}></input>
                 - 
                <input name='university' value={education.phd.university} onChange={handleInfo}></input>
                <br />
                <label>Status: </label>
                <input name='status' value={education.phd.status} onChange={handleInfo}></input>
                <br />
                <label>Duration: </label>
                <input name='duration' value={education.phd.duration} onChange={handleInfo}></input>
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
        setEditing(!isEditing);
        console.log(education);
    }

    function handleInfo(e) {
        // setEducation({
        //     ...education,
        //     bachelor: {
        //         ...education.bachelor,
        //         [e.target.name]: e.target.value,
        //     },
        //     phd: {
        //         ...education.phd,
        //         [e.target.name]: e.target.value
        //     }})
        // };

        setEducation({
            ...education,
            [e.target.name.startsWith('bachelor') ? 'bachelor' : 'phd']: {
              ...education[e.target.name.startsWith('bachelor') ? 'bachelor' : 'phd'],
              [e.target.name]: e.target.value,
            },
        });
    };
    
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

            <button onClick={handleEdit}>
            {isEditing 
            ? 'Save Information'
            : 'Edit Information'
            }
            </button>
        </div>
    );
}

export function Certifications() {
    let certif = {
        dataScience: {
            title: 'Data Science Certification',
            institution: 'Coderhouse',
            date: 'September, 2022',
            img: ''
        },
        dataAnalytics: {
            title: 'Data Analytics Certification',
            institution: 'Coderhouse',
            date: 'May, 2021',
            img: ''
        },
    };

    const [ isEditing, setEditing ] = useState(false);
    const [ certification, setCertification ] = useState(certif);

    let certStructure;
}

export function Courses() {

}