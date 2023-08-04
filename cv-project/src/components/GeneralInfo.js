import { useState } from 'react';

export default function PersonalInfo() {
    let info = { 
        name: 'Victoria Macarena Gardella Ruiz',
        mail: 'v.gardella.ruiz@gmail.com',
        phone: '+549 (221) 3XX XXXX',
        location: 'Buenos Aires, Argentina',
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
                    </form>
                </div>
                <form className='info-container'>
                    <h3 className='info-title'>About myself:</h3>
                    <hr/>
                    <div className="data-input">
                        <label>Name: </label>
                        <input name='name' value={personalInfo.name} onChange={handleInfo}></input>
                        <br />
                        <label>Mail: </label>
                        <input name='mail' value={personalInfo.mail} onChange={handleInfo}></input>
                        <br />
                        <label>Phone: </label>
                        <input name='phone' value={personalInfo.phone} onChange={handleInfo}></input>
                        <br />
                        <label>Location: </label>
                        <input name='location' value={personalInfo.location} onChange={handleInfo}></input>
                    </div>
                    <div className='img-input'>
                        <label>New profile picture: </label>
                        <input name='img' value={personalInfo.img} onChange={handleInfo}></input>
                    </div>
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
                    <h3 className='info-title'>About myself:</h3>
                    <hr/>
                    <div className="data-input">
                        <label>Name: </label> {personalInfo.name}
                        <br/>
                        <label>Mail: </label> {personalInfo.mail}
                        <br/>
                        <label>Phone: </label> {personalInfo.phone}
                        <br/>
                        <label>Location: </label> {personalInfo.location}
                        <br/>
                    </div>
                    <div className='img-input'>

                    </div>
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
        <div>
            <div className='principal' id='general-information'>
                { infoStructure }
                <button className='edit-button' onClick={handleEdit}>
                {isEditing
                ? 'Save Information'
                : 'Edit Information'
                }
                </button>
            </div>
        </div>
    );
}