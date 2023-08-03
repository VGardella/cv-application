import { useState } from "react";

export function WorkExperience() {
    const work = [{
        id: 0,
        title: 'Assistant Professor',
        institution: 'Facultad de Ciencias Exactas, Universidad Nacional de La Plata',
        description: [
            { id: 1, desc: 'Teaching tasks in the area of Basic Chemistry.' },
            { id: 2, desc: 'Explanation of abstract theorical concepts.' },
            { id: 3, desc: 'Team leading in complex laboratory tasks.' }
        ],
    }]

    return (
        <div>
            <div className='principal'>
                <hr />
                <h2 className='section-title'>Work Experience</h2>
                {work.map(item =>
                    <WorkCard key={item.id} values={item} />
                )}
            </div>
        </div>
    );
};

function WorkCard({ values }) {
    const [ isEditing, setEditing ] = useState(false);
    const [ works, setWorks ] = useState(values);
    let workList = null;

    if (!isEditing) {
        workList = 
            <div key={works.id}>
                <div className="work-container">
                    <div className='info-container'>
                        <b>Title: </b> {works.title}
                        <br/>
                        <b>Institution: </b> {works.institution}
                        <br/>
                        <b>Description: </b>
                        <ul>
                            {works.description.map((description) => (
                                <li key={description.id}>
                                    {description.desc}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <button onClick={handleEditing}>
                    {isEditing
                    ? 'Save Information'
                    : 'Edit Information'
                    }
                    </button>
                </div>
                <br/>
            </div>
    } else {
        workList = 
            <div key={works.id}>
                <div className="work-container">
                    <div className='form-container'>
                        <label>Title: </label>
                        <input name='title' value={works.title} onChange={handleInfo}></input>
                        <br/>
                        <label>Institution: </label>
                        <input name='institution' value={works.institution} onChange={handleInfo}></input>
                        <br/>
                        <label>Description: </label>
                        <ul>
                            {works.description.map(description => 
                                <li key={description.id}>
                                    <input name={description.id} value={description.desc} onChange={(e) => handleDescription(e, description.id)}></input>
                                </li>
                            )}
                        </ul>
                    </div>
                    <button onClick={handleEditing}>
                    {isEditing
                    ? 'Save Information'
                    : 'Edit Information'
                    }
                    </button>
                </div>
                <br/>
            </div>
    }

    function handleEditing() {
        setEditing(!isEditing);
    }

    function handleInfo(e) {
        setWorks({
            ...works,
            [e.target.name]: e.target.value,
        })
    }

    function handleDescription(e, itemId) {
        const tempArray = [...works.description];
        let index = tempArray.findIndex(item => item.id === itemId);
        
        tempArray[index] = {
            id: tempArray[index].id,
            desc: e.target.value,
        }

        setWorks({
            ...works,
            description: tempArray
        })
    }

    return workList;
}