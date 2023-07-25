export function WorkExperience() {
    const work = [{
        id: 0,
        title: 'Assistant Professor',
        institution: 'Facultad de Ciencias Exactas, Universidad Nacional de La Plata',
        description: {
            1: 'Teaching tasks in the area of Basic Chemistry.',
            2: 'Explanation of abstract theorical concepts.',
            3: 'Team leading in complex laboratory tasks.'
        },
    }]

    return (
        <div className='work-container'>
            <hr />
            <h2 className='section-title'>Work Experience</h2>
            <WorkCard values={work} />
        </div>
    );
};