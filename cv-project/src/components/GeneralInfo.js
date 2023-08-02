import { useState } from 'react';

export default function PersonalInfo() {
    let info = { 
        name: 'Victoria Macarena Gardella Ruiz',
        age: 28,
        dni: '38.691.578',
        country: 'Argentinian',
        img: 'https://i.imgur.com/CjepkMr.png'
    }

    const [ isEditing, setEditing ] = useState(false);
    const [ personalInfo, setPersonalInfo ] = useState(info);
    
    let infoStructure;

    if (isEditing) {
        infoStructure = (
            <div className="principal-container">
                <div className='avatar-container'>
                    <form className='form-container'>
                        <a href={personalInfo.img} target="_blank" rel="noreferrer">
                            <img src={personalInfo.img} alt='Profile' style={{ width: 200 }}/>
                        </a>
                        <label>New profile picture: </label>
                        <input name='img' value={personalInfo.img} onChange={handleInfo}></input>
                    </form>
                </div>
                <form className='info-container'>
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
            </div>
        )
    } else {
        infoStructure = (
            <div className="principal-container">
                <div className='avatar-container'>
                    <img src={personalInfo.img} alt='Profile' style={{ width: 200 }}></img>
                </div>
                <div className='info-container'>
                    <label>Name: </label> {personalInfo.name}
                    <br/>
                    <label>Age: </label> {personalInfo.age}
                    <br/>
                    <label>DNI: </label> {personalInfo.dni}
                    <br/>
                    <label>Country: </label> {personalInfo.country}
                    <br/>
                </div>
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
            <button className='edit-button' onClick={handleEdit}>
            {isEditing 
            ? 'Save Information'
            : 'Edit Information'
            }
            </button>
        </div>
    );
}