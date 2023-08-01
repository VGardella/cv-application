export function PersonalProjects() {
    const projects = [{
        id: 0,
        title: 'Film Library',
        description: 'Library containing multiple movie titles clasified as "Seen" and "Unseen", with information like genre and year of release. Add, edit and delete your oun entries!.',
        languages: 'HTML, CSS, JavaScript',
        repository: 'https://github.com/vicky-unlp/film-library.git',
        livepreview: 'https://vicky-unlp.github.io/film-library/'
    }, {
        id: 1,
        title: 'Gif Generator',
        description: 'Search for gifs from Giphy.com with this simple web page.',
        languages: 'HTML, CSS, JavaScript',
        repository: 'https://github.com/vicky-unlp/gif-generator.git',
        livepreview: 'https://vicky-unlp.github.io/gif-generator/'
    }, {
        id: 2,
        title: 'Admin Dashboard',
        description: 'Design of an admin dashboard using CSS Grid',
        languages: 'HTML, CSS',
        repository: 'https://github.com/vicky-unlp/admin-dashboard.git',
        livepreview: 'https://vicky-unlp.github.io/admin-dashboard/'
    }, {
        id: 3,
        title: 'Etck-a-Sketch',
        description: 'Etch-a-Sketch board.',
        languages: 'HTML, CSS, JavaScript',
        repository: 'https://github.com/vicky-unlp/etch-a-sketch.git',
        livepreview: 'https://vicky-unlp.github.io/etch-a-sketch/'
    }, {
        id: 4,
        title: 'Personal Web',
        description: 'Personal web with my information, current proyects and education.',
        languages: 'HTML, CSS, Python',
        repository: 'https://github.com/vicky-unlp/personalweb.git',
        livepreview: null
    }, {
        id: 5,
        title: 'Personal Web - Flask',
        description: 'Personal web with my information, current proyects and education - Made with Flask.',
        languages: 'HTML, CSS, Python',
        repository: 'https://github.com/vicky-unlp/flask-personalweb.git',
        livepreview: null
    }, {
        id: 6,
        title: 'Calculator',
        description: 'Simple calculator app.',
        languages: 'HTML, CSS, JavaScript',
        repository: 'https://github.com/vicky-unlp/calculator.git',
        livepreview: 'https://vicky-unlp.github.io/calculator/'
    }, {
        id: 7,
        title: 'Data Science Certification Final Project: Market Analysis - Bank of Portugal',
        description: 'Database analysis and training of machine learning algorithms.',
        languages: 'Python',
        repository: 'https://github.com/vicky-unlp/data-science-project',
        livepreview: null
    }, {
        id: 8,
        title: 'Data Analytics Certification Final Project: Air Polution and Contaminant Identification Dashboard.',
        description: 'Database analysis and dashboard creation.',
        languages: 'SQL, Python, PowerShell',
        repository: 'https://github.com/vicky-unlp/Data-Analytics---Proyecto-Final.git',
        livepreview: null
    }, {
        id: 9,
        title: 'Data Engineering Project: Technical Excercise',
        description: 'Pipeline for extracting, cleaning and exporting data to a persistent database.',
        languages: 'SQL, Python',
        repository: 'https://github.com/vicky-unlp/GELT_data.git',
        livepreview: null
    }];

    return (
        <div className='project-container'>
            <hr />
            <h2 className='section-title'>Projects</h2>
            {projects.map(item => 
                <ProjectCard key={item.id} values={item} />
            )}
        </div>
        
    );
};

function ProjectCard({ values }) {
    const projectList = values.map(project => 
        <div key={project.id}>
            <div className="proj-container">
                <div className='info-container'>
                    <b>Title: </b> {project.title}
                    <br/>
                    <b>Description: </b> {project.description}
                    <br/>
                    <b>Languages: </b> {project.languages}
                    <br/>
                </div>
                <div class="links-container">
                    <a href={project.repository} target="_blank" rel="noreferrer">
                        <button>Go to Repository!</button>
                    </a>
                    <a href={project.livepreview} target="_blank" rel="noreferrer">
                        <button>Go to Live Preview!</button>
                    </a>
                </div>
            </div>
            <br/>
        </div>
    )

    return projectList
};