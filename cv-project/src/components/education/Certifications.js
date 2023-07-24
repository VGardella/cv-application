import { useState } from 'react';

export function Certifications() {
    let certif = [{
        id: 0,
        title: 'Data Science Certification',
        institution: 'Coderhouse',
        date: 'September, 2022',
        img: 'https://drive.google.com/file/d/1lX8t7Xi8tkuzDoZ_jcKCen7KKzEVk63g/view?usp=sharing'
    }, {
        id: 1,
        title: 'Data Analytics Certification',
        institution: 'Coderhouse',
        date: 'May, 2021',
        img: 'https://drive.google.com/file/d/1kDYhtmTyKQnWycvemGZhmZo6de4mh2iP/view?usp=sharing'
    }]

    const [ isEditing, setEditing ] = useState(false);
    const [ certification, setCertification ] = useState(certif);

    let certStructure;

    if (isEditing) {
        certStructure = (
            <div className="principal">
                <div className='form-container'>
                    <form className='cv-form'>
                        <label>Title: </label>
                        <input name='title' value={certification.title} onChange={handleInfo}></input>
                        <br />
                        <label>Institution: </label>
                        <input name='institution' value={certification.institution} onChange={handleInfo}></input>
                        <br />
                        <label>Date: </label>
                        <input name='date' value={certification.date} onChange={handleInfo}></input>
                    </form>
                </div>
                <div className='img-container'>
                    <img className='certification-img' src='{certification.}' alt={certification.title}/>
                </div>
            </div>
        );
        
    } else {
        certStructure = (
            <div className="principal">
                <div className='form-container'>
                    <b>Title: </b> {certification.title}
                    <br/>
                    <b>Institute: </b> {certification.institution}
                    <br/>
                    <b>Date: </b> {certification.date}
                    <br/>
                </div>
                <div className='img-container'>
                    <img className='certification-img' src='' alt={certification.title} />
                </div>
            </div>

        );
    }

    function handleEdit(e) {
        setEditing(!isEditing);
    }

    function handleInfo(e) {
    };

    return (
        <div className='principal'>
            <h2 className='section-title'>Certifications</h2>
            <hr />
            { certStructure }

            <button onClick={handleEdit}>
            {isEditing 
            ? 'Save Information'
            : 'Edit Information'
            }
            </button>
        </div>
    );
}
