import { useState } from 'react';

export default function PersonalInfo() {
    let info = { 
        name: 'Victoria Macarena Gardella Ruiz',
        age: 28,
        dni: '38.691.578',
        country: 'Argentinian',
    }

    const [ isEditing, setEditing ] = useState(false);
    const [ personalInfo, setPersonalInfo ] = useState(info);
    
    let infoStructure;

    if (isEditing) {
        infoStructure = (
            <form className='cv-form'>
                <label>Name: </label>
                <input name='name' value={personalInfo.name} onChange={handleInfo}></input>
                <br />
                <label>Age: </label>
                <input name='age' value={personalInfo.age} onChange={handleInfo}></input>
                <br />
                <label>DNI: </label>
                <input name='dni' value={personalInfo.dni} onChange={handleInfo}></input>
                <br />
                <label>Country: </label>
                <input name='country' value={personalInfo.country} onChange={handleInfo}></input>
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

    function handleEdit() {
        setEditing(!isEditing);
    }

    function handleInfo(e) {
        setPersonalInfo({
            ...personalInfo,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className='principal'>
            <h1 className='principal-title'>Welcome to my Page!</h1>
            <hr/>
            { infoStructure }
            <button onClick={handleEdit}>
            {isEditing 
            ? 'Save Information'
            : 'Edit Information'
            }
            </button>
        </div>
    );
}