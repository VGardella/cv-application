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
        <div className='works-container'>
            <hr />
            <h2 className='section-title'>Work Experience</h2>
            {work.map(item =>
                <WorkCard key={item.id} values={item} />    
            )}
        </div>
    );
};

function WorkCard({ values }) {
    const workList = values.map(work => 
        <div key={work.id}>
            <div className="work-container">
                <div className='info-container'>
                    <b>Title: </b> {work.title}
                    <br/>
                    <b>Institution: </b> {work.institution}
                    <br/>
                    <b>Description: </b>
                    <ul>
                        {work.description.map((description) => (
                            <li key={description.id}>
                                {description.desc}
                            </li>
                        ))}
                    </ul>
                    <br/>
                </div>
            </div>
            <br/>
        </div>
    )

    return workList;
}