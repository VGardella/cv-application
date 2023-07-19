import { useState } from 'react';

// export default function EducationalExperience() {
    
// }

export default function FormalEducation() {
    let bachelor = {
            university: 'Universidad Nacional de La Plata',
            school: 'Facultad de Ciencias Exactas',
            career: 'Bachelor\'s degree in Biotechnology and Molecular Biology',
            status: 'Complete',
            duration: '2013-2018',
        }
        
    let doctorate = {
            university: 'Universidad Nacional de La Plata',
            institute: 'Institute of Biotecnology and Molecular Biology',
            career: 'PhD in Biotechnology and Molecular Biology',
            status: 'Abandoned',
            duration: '2018-2022',
            theme: 'Developement of molecular strategies for the control of the citrus disease HuangLongBing.'
    }

    const [ isEditing, setEditing ] = useState(false);
    const [ bach, setBach ] = useState(bachelor);
    const [ phd, setPhd ] = useState(doctorate);

    let eduStructure;
    let phdStructure;

    if (isEditing) {
        eduStructure = (
            <form className='cv-form'>
                <label>Career: </label>
                <input name='career' value={bach.career} onChange={handleInfo}></input>
                <br />
                <label>Institution: </label>
                <input name='school' value={bach.school} onChange={handleInfo}></input>
                , 
                <input name='university' value={bach.university} onChange={handleInfo}></input>
                <br />
                <label>Status: </label>
                <input name='status' value={bach.status} onChange={handleInfo}></input>
                <br />
                <label>Duration: </label>
                <input name='duration' value={bach.duration} onChange={handleInfo}></input>
            </form>
        );
        
        phdStructure = (
            <form className='cv-form'>
                <label>Career: </label>
                <input name='career' value={phd.career} onChange={handleInfo}></input>
                <br />
                <label>Institution: </label>
                <input name='institute' value={phd.institute} onChange={handleInfo}></input>
                 - 
                <input name='university' value={phd.university} onChange={handleInfo}></input>
                <br />
                <label>Status: </label>
                <input name='status' value={phd.status} onChange={handleInfo}></input>
                <br />
                <label>Duration: </label>
                <input name='duration' value={phd.duration} onChange={handleInfo}></input>
            </form>
        );
    } else {
        eduStructure = (
            <div>
                <b>Career: </b> {bach.career}
                <br/>
                <b>Institute: </b> {bach.school}, {bach.university}
                <br/>
                <b>Status: </b> {bach.status}
                <br/>
                <b>Duration: </b> {bach.duration}
                <br/>
            </div>
        );
        
        phdStructure = (
            <div>
            <b>Career: </b> {phd.career}
            <br/>
            <b>Institute: </b> {phd.institute} - {phd.university}
            <br/>
            <b>Theme: </b> {phd.theme}
            <br/>
            <b>Status: </b> {phd.status}
            <br/>
            <b>Duration: </b> {phd.duration}
            <br/>
        </div>
        );
    }

    function handleEdit(e) {
        setEditing(!isEditing);
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
        <div>
            <div className='principal'>
                <h1 className='principal-title'>Education</h1>
                <h2 className='section-title'>Degrees</h2>
                <hr/>
                <h3 className='section-title'>Undergraduate Degree</h3>
                { eduStructure }
                <br />
                <h3 className='section-title'>Postgraduate Degree</h3>
                { phdStructure }
                <button onClick={handleEdit}>
                {isEditing
                ? 'Save Information'
                : 'Edit Information'
                }
                </button>
            </div>
            <Certifications />
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
                    <img className='certification-img' src='' alt={certification.title} />
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
        console.log(certification);
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

        setCertification({
            ...certification,
            [e.target.name.startsWith('dataScience') ? 'dataScience' : 'dataAnalytics']: {
              ...certification[e.target.name.startsWith('dataScience') ? 'dateScience' : 'dataAnalytics'],
              [e.target.name]: e.target.value,
            },
        });
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

    // Hacer que el proceso de renderizado sea general, agarrando cada elemento del ovjeto cert y renderizandolo
    // sin necesidad de especificar cual es cual.
}


export function Courses() {

}