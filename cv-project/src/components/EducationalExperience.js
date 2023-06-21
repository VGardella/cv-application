import { useState } from 'react';

export default function EducationalExperience() {
    
}

export function FormalEducation() {
    let edu = {
        bachelor: {
            university: 'Universidad Nacional de La Plata',
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

    let infoStructure;
    let newInfo = {};

    if (isEditing) {
        infoStructure = (
            <form class='cv-form'>
                <label>Name: </label>
                <input name='name' placeholder={personalInfo.name} onChange={handleInfo}></input>
                <br />
                <label>Age: </label>
                <input name='age' placeholder={personalInfo.age} onChange={handleInfo}></input>
                <br />
                <label>DNI: </label>
                <input name='dni' placeholder={personalInfo.dni} onChange={handleInfo}></input>
                <br />
                <label>Country: </label>
                <input name='country' placeholder={personalInfo.country} onChange={handleInfo}></input>
            </form>
        )
    } else {
        infoStructure = (
            <div>
                <b>Name: </b> {personalInfo.name}
                <br/>
                <b>Age: </b> {personalInfo.age}
                <br/>
                <b>DNI: </b> {personalInfo.dni}
                <br/>
                <b>Country: </b> {personalInfo.country}
                <br/>
            </div>
            

        )
    }

    function handleEdit(e) {
        setEditing(true);
    }

    function handleInfo(e) {
        newInfo = {
            ...personalInfo,
            [e.target.name]: e.target.value,
        };
    };

    function handleSave(e) {
        e.preventDefault();
        setPersonalInfo(newInfo);
        setEditing(false);
    }
    
}

export function Certifications() {

}

export function Courses() {

}