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

    return (
        <div class='principal'>
            <h1 class='principal-title'>Welcome to my Page!</h1>
            <hr/>
            { infoStructure }
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