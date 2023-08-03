import { useState } from 'react';

export function Certifications() {
    let certif = [{
        id: 0,
        title: 'Data Science Certification',
        institution: 'Coderhouse',
        date: 'September, 2022',
        img: 'https://imgur.com/eSfuR4m.jpg'
    }, {
        id: 1,
        title: 'Data Analytics Certification',
        institution: 'Coderhouse',
        date: 'May, 2021',
        img: 'https://imgur.com/hHu4hyC.jpg'
    }]

    return (
        <div>
            <div className='principal'>
                <hr />
                <h2 className='section-title'>Certifications</h2>
                {certif.map(item =>
                    <CertifCard key={item.id} values={item} />
                )}
            </div>
        </div>
    );
};

function CertifCard({ values }) {
    const [ isEditing, setEditing ] = useState(false);
    const [ certifications, setCertifications ] = useState(values);
    let certList = null;

    if (!isEditing) {
        certList = 
            <div>
                <div className="card-container">
                    <div className='info-container'>
                        <b>Title: </b> {certifications.title}
                        <br/>
                        <b>Institution: </b> {certifications.institution}
                        <br/>
                        <b>Date: </b> {certifications.date}
                    </div>
                    <div className="img-container">
                        <a href={certifications.img} target="_blank" rel="noreferrer">
                            <img
                                src={certifications.img}
                                alt={certifications.title}
                                style={{ width: 200 }}
                            />
                        </a>
                    </div>
                    <button onClick={() => setEditing(!isEditing)}>
                    {isEditing
                    ? 'Save Information'
                    : 'Edit Information'
                    }
                    </button>
                </div>
                <br/>
            </div>;
    } else {
        certList = 
            <div>
                <div className="card-container">
                    <div className='form-container'>
                        <form className='cv-form'>
                            <label>Title: </label>
                            <input name='title' value={certifications.title} onChange={handleInfo}></input>
                            <br />
                            <label>Institution: </label>
                            <input name='institution' value={certifications.institution} onChange={handleInfo}></input>
                            <br />
                            <label>Date: </label>
                            <input name='date' value={certifications.date} onChange={handleInfo}></input>
                        </form>
                    </div>
                    <div className="img-container">
                        <form className='form-container'>
                            <a href={certifications.img} target="_blank" rel="noreferrer">
                                <img
                                    src={certifications.img}
                                    alt={certifications.title}
                                    style={{ width: 200 }}
                                />
                            </a>
                            <label>New image:</label>
                            <input name='img' value={certifications.img} onChange={handleInfo}></input>
                        </form>
                    </div>
                    <button onClick={handelEditing}>
                    {isEditing
                    ? 'Save Information'
                    : 'Edit Information'
                    }
                    </button>
                </div>
                <br/>
            </div>
    }

    function handleInfo(e) {
        setCertifications({
            ...certifications,
            [e.target.name]: e.target.value
        });
    };

    function handelEditing() {
        setEditing(!isEditing);
    }

    return certList;
}
