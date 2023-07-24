import { useState } from 'react';

// export default function EducationalExperience() {
    
// }

export default function FormalEducation() {
    let bachelor = {
            bachUniversity: 'Universidad Nacional de La Plata',
            bachSchool: 'Facultad de Ciencias Exactas',
            bachCareer: 'Bachelor\'s degree in Biotechnology and Molecular Biology',
            bachStatus: 'Complete',
            bachDuration: '2013-2018',
        };
        
    let doctorate = {
            docUniversity: 'Universidad Nacional de La Plata',
            docInstitute: 'Institute of Biotecnology and Molecular Biology',
            docCareer: 'PhD in Biotechnology and Molecular Biology',
            docStatus: 'Abandoned',
            docDuration: '2018-2022',
            docTheme: 'Developement of molecular strategies for the control of the citrus disease HuangLongBing.'
        };

    const [ isEditingBach, setEditingBach ] = useState(false);
    const [ isEditingPhd, setEditingPhd ] = useState(false);
    const [ bach, setBach ] = useState(bachelor);
    const [ phd, setPhd ] = useState(doctorate);

    let bachStructure;
    let phdStructure;

    if (isEditingBach) {
        bachStructure = (
            <form className='cv-form'>
                <label>Career: </label>
                <input name='bachCareer' value={bach.bachCareer} onChange={handleInfo}></input>
                <br />
                <label>Institution: </label>
                <input name='bachSchool' value={bach.bachSchool} onChange={handleInfo}></input>
                , 
                <input name='bachUniversity' value={bach.bachUniversity} onChange={handleInfo}></input>
                <br />
                <label>Status: </label>
                <input name='bachStatus' value={bach.bachStatus} onChange={handleInfo}></input>
                <br />
                <label>Duration: </label>
                <input name='bachDuration' value={bach.bachDuration} onChange={handleInfo}></input>
            </form>
        );
    } else {
        bachStructure = (
            <div>
                <b>Career: </b> {bach.bachCareer}
                <br/>
                <b>Institute: </b> {bach.bachSchool}, {bach.bachUniversity}
                <br/>
                <b>Status: </b> {bach.bachStatus}
                <br/>
                <b>Duration: </b> {bach.bachDuration}
                <br/>
            </div>
    )};
        
    if (isEditingPhd) {
        phdStructure = (
            <form className='cv-form'>
                <label>Career: </label>
                <input name='docCareer' value={phd.docCareer} onChange={handleInfo}></input>
                <br />
                <label>Institution: </label>
                <input name='docInstitute' value={phd.docInstitute} onChange={handleInfo}></input>
                 - 
                <input name='docUniversity' value={phd.docUniversity} onChange={handleInfo}></input>
                <br />
                <label>Theme: </label>
                <input name='docTheme' value={phd.docTheme} onChange={handleInfo}></input>
                <br />
                <label>Status: </label>
                <input name='docStatus' value={phd.docStatus} onChange={handleInfo}></input>
                <br />
                <label>Duration: </label>
                <input name='docDuration' value={phd.docDuration} onChange={handleInfo}></input>
            </form>
        );
    } else {
        phdStructure = (
            <div>
                <b>Career: </b> {phd.docCareer}
                <br/>
                <b>Institute: </b> {phd.docInstitute} - {phd.docUniversity}
                <br/>
                <b>Theme: </b> {phd.docTheme}
                <br/>
                <b>Status: </b> {phd.docStatus}
                <br/>
                <b>Duration: </b> {phd.docDuration}
                <br/>
            </div>
    )};


    function handleInfo(e) {
        setBach({
            ...bach,
            [e.target.name]: e.target.value,
        });

        setPhd({
            ...phd,
            [e.target.name]: e.target.value,
        })
    };
    
    return (
        <div>
            <div className='principal'>
                <h1 className='principal-title'>Education</h1>
                <h2 className='section-title'>Degrees</h2>
                <hr/>
                <h3 className='section-title'>Undergraduate Degree</h3>
                { bachStructure }
                <button onClick={() => {setEditingBach(!isEditingBach)}}>
                {isEditingBach
                ? 'Save Information'
                : 'Edit Information'
                }
                </button>
                <br />
                <h3 className='section-title'>Postgraduate Degree</h3>
                { phdStructure }
                <button onClick={() => {setEditingPhd(!isEditingPhd)}}>
                {isEditingPhd
                ? 'Save Information'
                : 'Edit Information'
                }
                </button>
            </div>
        </div>
    );
}

// export function Certifications() {
//     let certif = {
//         dataScience: {
//             title: 'Data Science Certification',
//             institution: 'Coderhouse',
//             date: 'September, 2022',
//             img: ''
//         },
//         dataAnalytics: {
//             title: 'Data Analytics Certification',
//             institution: 'Coderhouse',
//             date: 'May, 2021',
//             img: ''
//         },
//     };

//     const [ isEditing, setEditing ] = useState(false);
//     const [ certification, setCertification ] = useState(certif);

//     let certStructure;

//     if (isEditing) {
//         certStructure = (
//             <div className="principal">
//                 <div className='form-container'>
//                     <form className='cv-form'>
//                         <label>Title: </label>
//                         <input name='title' value={certification.title} onChange={handleInfo}></input>
//                         <br />
//                         <label>Institution: </label>
//                         <input name='institution' value={certification.institution} onChange={handleInfo}></input>
//                         <br />
//                         <label>Date: </label>
//                         <input name='date' value={certification.date} onChange={handleInfo}></input>
//                     </form>
//                 </div>
//                 <div className='img-container'>
//                     <img className='certification-img' src='' alt={certification.title} />
//                 </div>
//             </div>
//         );
        
//     } else {
//         certStructure = (
//             <div className="principal">
//                 <div className='form-container'>
//                     <b>Title: </b> {certification.title}
//                     <br/>
//                     <b>Institute: </b> {certification.institution}
//                     <br/>
//                     <b>Date: </b> {certification.date}
//                     <br/>
//                 </div>
//                 <div className='img-container'>
//                     <img className='certification-img' src='' alt={certification.title} />
//                 </div>
//             </div>

//         );
//     }

//     function handleEdit(e) {
//         setEditing(!isEditing);
//         console.log(certification);
//     }

//     function handleInfo(e) {
//         // setEducation({
//         //     ...education,
//         //     bachelor: {
//         //         ...education.bachelor,
//         //         [e.target.name]: e.target.value,
//         //     },
//         //     phd: {
//         //         ...education.phd,
//         //         [e.target.name]: e.target.value
//         //     }})
//         // };

//         setCertification({
//             ...certification,
//             [e.target.name.startsWith('dataScience') ? 'dataScience' : 'dataAnalytics']: {
//               ...certification[e.target.name.startsWith('dataScience') ? 'dateScience' : 'dataAnalytics'],
//               [e.target.name]: e.target.value,
//             },
//         });
//     };

//     return (
//         <div className='principal'>
//             <h2 className='section-title'>Certifications</h2>
//             <hr />
//             { certStructure }

//             <button onClick={handleEdit}>
//             {isEditing 
//             ? 'Save Information'
//             : 'Edit Information'
//             }
//             </button>
//         </div>
//     );

//     // Hacer que el proceso de renderizado sea general, agarrando cada elemento del ovjeto cert y renderizandolo
//     // sin necesidad de especificar cual es cual.
// }


// export function Courses() {

// }