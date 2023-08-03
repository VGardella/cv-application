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
                    <PhdCard values={doctorate} />
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
    } else {
        bachStructure = (
            <div>
                <label>Career: </label> {bach.career}
                <br/>
                <label>Institute: </label> {bach.school}, {bach.university}
                <br/>
                <label>Status: </label> {bach.status}
                <br/>
                <label>Duration: </label> {bach.duration}
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
        <div className='card-container'>
            { bachStructure }
            <button onClick={() => {setEditingBach(!isEditingBach)}}>
            {isEditingBach
            ? 'Save Information'
            : 'Edit Information'
            }
            </button>
        </div>
    );
}


function PhdCard({ values }) {
    const [ isEditingPhd, setEditingPhd ] = useState(false);
    const [ phd, setPhd ] = useState(values);
    let phdStructure = null;

    if (isEditingPhd) {
        phdStructure = (
            <form className='cv-form'>
                <label>Career: </label>
                <input name='career' value={phd.career} onChange={handleInfo}></input>
                <br />
                <label>Institution: </label>
                <input name='institution' value={phd.institution} onChange={handleInfo}></input>
                 - 
                <input name='university' value={phd.university} onChange={handleInfo}></input>
                <br />
                <label>Theme: </label>
                <input name='theme' value={phd.theme} onChange={handleInfo}></input>
                <br />
                <label>Status: </label>
                <input name='status' value={phd.status} onChange={handleInfo}></input>
                <br />
                <label>Duration: </label>
                <input name='duration' value={phd.duration} onChange={handleInfo}></input>
            </form>
        );
    } else {
        phdStructure = (
            <div>
                <label>Career: </label> {phd.career}
                <br/>
                <label>Institute: </label> {phd.institution} - {phd.university}
                <br/>
                <label>Theme: </label> {phd.theme}
                <br/>
                <label>Status: </label> {phd.status}
                <br/>
                <label>Duration: </label> {phd.duration}
                <br/>
            </div>
    )};


    function handleInfo(e) {
        setPhd({
            ...phd,
            [e.target.name]: e.target.value,
        })
    };

    return (
        <div className='card-container'>
            { phdStructure }
            <button onClick={() => {setEditingPhd(!isEditingPhd)}}>
            {isEditingPhd
            ? 'Save Information'
            : 'Edit Information'
            }
            </button>
            <br />
        </div>
    );

}