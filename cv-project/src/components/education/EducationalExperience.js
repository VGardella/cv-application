import { useState } from 'react';

export default function FormalEducation() {
    let bachelor = {
            university: 'Universidad Nacional de La Plata',
            school: 'Facultad de Ciencias Exactas',
            career: 'Bachelor\'s degree in Biotechnology and Molecular Biology',
            status: 'Complete',
            duration: '2013-2018',
        };
        
    let doctorate = {
            university: 'Universidad Nacional de La Plata',
            institution: 'Institute of Biotecnology and Molecular Biology',
            career: 'PhD in Biotechnology and Molecular Biology',
            status: 'Abandoned',
            duration: '2018-2022',
            theme: 'Developement of molecular strategies for the control of the citrus disease HuangLongBing.'
        };

    return (
        <div>
            <div className='principal'>
                <h1 className='principal-title'>Education</h1>
                <h2 className='section-title'>Degrees</h2>
                <hr/>
                <h3 className='section-title'>Undergraduate Degree</h3>
                    <BachelorCard values={bachelor} />
                <br />
                <h3 className='section-title'>Postgraduate Degree</h3>
                    {/* <PhdCard values={doctorate} /> */}
            </div>
        </div>
    );
}

function BachelorCard({ values }) {
    const [ isEditingBach, setEditingBach ] = useState(false);
    const [ bach, setBach ] = useState(values);
    let bachStructure = null;

    if (isEditingBach) {
        bachStructure = (
            <form className='cv-form'>
                <label>Career: </label>
                <input name='bachCareer' value={bach.career} onChange={handleInfo}></input>
                <br />
                <label>Institution: </label>
                <input name='bachSchool' value={bach.school} onChange={handleInfo}></input>
                , 
                <input name='bachUniversity' value={bach.university} onChange={handleInfo}></input>
                <br />
                <label>Status: </label>
                <input name='bachStatus' value={bach.status} onChange={handleInfo}></input>
                <br />
                <label>Duration: </label>
                <input name='bachDuration' value={bach.duration} onChange={handleInfo}></input>
            </form>
        );
    } else {
        bachStructure = (
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
    )};

    function handleInfo(e) {
        setBach({
            ...bach,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div>
            { bachStructure }
            <button onClick={() => {setEditingBach(!isEditingBach)}}>
            {isEditingBach
            ? 'Save Information'
            : 'Edit Information'
            }
            </button>
            <br />
        </div>
    );
}


// function PhdCard({ values }) {
//     const [ isEditingPhd, setEditingPhd ] = useState(false);
//     const [ phd, setPhd ] = useState(values);
// }



    
//     let phdStructure;


        
//     if (isEditingPhd) {
//         phdStructure = (
//             <form className='cv-form'>
//                 <label>Career: </label>
//                 <input name='docCareer' value={phd.docCareer} onChange={handleInfo}></input>
//                 <br />
//                 <label>Institution: </label>
//                 <input name='docInstitute' value={phd.docInstitute} onChange={handleInfo}></input>
//                  - 
//                 <input name='docUniversity' value={phd.docUniversity} onChange={handleInfo}></input>
//                 <br />
//                 <label>Theme: </label>
//                 <input name='docTheme' value={phd.docTheme} onChange={handleInfo}></input>
//                 <br />
//                 <label>Status: </label>
//                 <input name='docStatus' value={phd.docStatus} onChange={handleInfo}></input>
//                 <br />
//                 <label>Duration: </label>
//                 <input name='docDuration' value={phd.docDuration} onChange={handleInfo}></input>
//             </form>
//         );
//     } else {
//         phdStructure = (
//             <div>
//                 <b>Career: </b> {phd.docCareer}
//                 <br/>
//                 <b>Institute: </b> {phd.docInstitute} - {phd.docUniversity}
//                 <br/>
//                 <b>Theme: </b> {phd.docTheme}
//                 <br/>
//                 <b>Status: </b> {phd.docStatus}
//                 <br/>
//                 <b>Duration: </b> {phd.docDuration}
//                 <br/>
//             </div>
//     )};


    // function handleInfo(e) {
    //     setBach({
    //         ...bach,
    //         [e.target.name]: e.target.value,
    //     });

    //     setPhd({
    //         ...phd,
    //         [e.target.name]: e.target.value,
    //     })
    // };
    
//     return (
//         <div>
//             <div className='principal'>
//                 <h1 className='principal-title'>Education</h1>
//                 <h2 className='section-title'>Degrees</h2>
//                 <hr/>
//                 <h3 className='section-title'>Undergraduate Degree</h3>
//                 { bachStructure }
//                 <button onClick={() => {setEditingBach(!isEditingBach)}}>
//                 {isEditingBach
//                 ? 'Save Information'
//                 : 'Edit Information'
//                 }
//                 </button>
//                 <br />
//                 <h3 className='section-title'>Postgraduate Degree</h3>
//                 { phdStructure }
//                 <button onClick={() => {setEditingPhd(!isEditingPhd)}}>
//                 {isEditingPhd
//                 ? 'Save Information'
//                 : 'Edit Information'
//                 }
//                 </button>
//             </div>
//         </div>
//     );
// }
