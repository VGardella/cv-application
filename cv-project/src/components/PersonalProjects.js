import { useState } from "react";

export default function PersonalProjects() {
    const projects = [{
        id: 0,
        title: 'Film Library',
        description: 'Library containing multiple movie titles clasified as "Seen" and "Unseen", with information like genre and year of release. Add, edit and delete your oun entries!.',
        languages: 'HTML, CSS, JavaScript',
        repository: 'https://github.com/vicky-unlp/film-library.git',
        livepreview: 'https://vicky-unlp.github.io/film-library/',
        img: 'https://i.imgur.com/ITQlbBN.png'
    }, {
        id: 1,
        title: 'Gif Generator',
        description: 'Search for gifs from Giphy.com with this simple web page.',
        languages: 'HTML, CSS, JavaScript',
        repository: 'https://github.com/vicky-unlp/gif-generator.git',
        livepreview: 'https://vicky-unlp.github.io/gif-generator/',
        img: 'https://i.imgur.com/rVVI60x.png'
    }, {
        id: 2,
        title: 'Admin Dashboard',
        description: 'Design of an admin dashboard using CSS Grid',
        languages: 'HTML, CSS',
        repository: 'https://github.com/vicky-unlp/admin-dashboard.git',
        livepreview: 'https://vicky-unlp.github.io/admin-dashboard/',
        img: 'https://i.imgur.com/sGwFFVT.png'
    }, {
        id: 3,
        title: 'Etck-a-Sketch',
        description: 'Etch-a-Sketch board.',
        languages: 'HTML, CSS, JavaScript',
        repository: 'https://github.com/vicky-unlp/etch-a-sketch.git',
        livepreview: 'https://vicky-unlp.github.io/etch-a-sketch/',
        img: 'https://i.imgur.com/gVdVQFc.png'
    }, {
        id: 4,
        title: 'Personal Web',
        description: 'Personal web with my information, current proyects and education.',
        languages: 'HTML, CSS, Python',
        repository: 'https://github.com/vicky-unlp/personalweb.git',
        livepreview: null,
        img: 'https://i.imgur.com/n8aFg0y.png'
    }, {
        id: 5,
        title: 'Personal Web - Flask',
        description: 'Personal web with my information, current proyects and education - Made with Flask.',
        languages: 'HTML, CSS, Python',
        repository: 'https://github.com/vicky-unlp/flask-personalweb.git',
        livepreview: null,
        img: 'https://i.imgur.com/XpB28Fg.png'
    }, {
        id: 6,
        title: 'Calculator',
        description: 'Simple calculator app.',
        languages: 'HTML, CSS, JavaScript',
        repository: 'https://github.com/vicky-unlp/calculator.git',
        livepreview: 'https://vicky-unlp.github.io/calculator/',
        img: 'https://i.imgur.com/pSYH9bh.png'
    }, {
        id: 7,
        title: 'Data Science Certification Final Project: Market Analysis - Bank of Portugal',
        description: 'Database analysis and training of machine learning algorithms.',
        languages: 'Python',
        repository: 'https://github.com/vicky-unlp/data-science-project',
        livepreview: null,
        img: 'https://i.imgur.com/OoPCZYx.png'
    }, {
        id: 8,
        title: 'Data Analytics Certification Final Project: Air Polution and Contaminant Identification Dashboard.',
        description: 'Database analysis and dashboard creation.',
        languages: 'SQL, Python, PowerShell',
        repository: 'https://github.com/vicky-unlp/Data-Analytics---Proyecto-Final.git',
        livepreview: null,
        img: 'https://i.imgur.com/96AgkKv.png'
    }, {
        id: 9,
        title: 'Data Engineering Project: Technical Excercise',
        description: 'Pipeline for extracting, cleaning and exporting data to a persistent database.',
        languages: 'SQL, Python',
        repository: 'https://github.com/vicky-unlp/GELT_data.git',
        livepreview: null,
        img: 'https://i.imgur.com/LIoVq14.png'
    }];

    return (
        <div>
            <hr />
            <h1 className='section-title' id='proj'>Projects</h1>
            <div className='principal'>
                {projects.map(item =>
                    <ProjectCard key={item.id} values={item} />
                )}
            </div>
        </div>
        
    );
};

function ProjectCard({ values }) {
    const [ isEditing, setEiditing ] = useState(false);
    const [ projects, setProjects ] = useState(values);
    let projectList = null;

    if (!isEditing) {
        projectList =  
            <div key={projects.id}>
                <div className='img-proj-container'>
                    <a href={projects.img} target="_blank" rel="noreferrer">
                        <img
                            src={projects.img}
                            alt={projects.title}
                            style={{ width: 400 }}
                        />
                    </a>
                </div>
                <div className="proj-container">
                    <div className='info-container'>
                        <b>Title: </b> {projects.title}
                        <br/>
                        <b>Description: </b> {projects.description}
                        <br/>
                        <b>Languages: </b> {projects.languages}
                        <br/>
                    </div>
                    <div className="links-container">
                        <a href={projects.repository} target="_blank" rel="noreferrer">
                            <button>Go to Repository!</button>
                        </a>
                        <a href={projects.livepreview} target="_blank" rel="noreferrer">
                            <button>Go to Live Preview!</button>
                        </a>
                    </div>
                </div>
                <br/>
                <button onClick={handleEditing}>
                {isEditing
                ? 'Save Information'
                : 'Edit Information'
                }
                </button>
            </div>
    } else {
        projectList =  
            <div key={projects.id}>
                <div className='img-proj-container'>
                    <p>Filler text</p>
                </div>
                <div className="proj-container">
                    <div className='form-container'>
                        <form className='cv-form'>
                            <label>Title: </label>
                            <input name='title' value={projects.title} onChange={handleInfo}></input>
                            <br />
                            <label>Description: </label>
                            <input name='description' value={projects.description} onChange={handleInfo}></input>
                            <br />
                            <label>Languages: </label>
                            <input name='languages' value={projects.languages} onChange={handleInfo}></input>
                        </form>
                    </div>
                    <div className="links-container">
                        <a href={projects.repository} target="_blank" rel="noreferrer">
                            <label>Repository:</label>
                            <input name='repository' value={projects.repository} onChange={handleInfo}></input>
                        </a>
                        <a href={projects.livepreview} target="_blank" rel="noreferrer">
                            <label>Live Preview:</label>
                            <input name='livepreview' value={projects.livepreview} onChange={handleInfo}></input>
                        </a>
                    </div>
                </div>
                <br/>
                <button onClick={handleEditing}>
                {isEditing
                ? 'Save Information'
                : 'Edit Information'
                }
                </button>
            </div>
    }

    function handleInfo(e) {
        setProjects({
            ...projects,
            [e.target.name]: e.target.value,
        })
    };

    function handleEditing() {
        setEiditing(!isEditing);
    };

    return projectList
};