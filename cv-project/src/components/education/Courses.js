import { useState } from 'react';

export function Courses() {
    let courses = [{
        id: 0,
        title: 'Introduction to Containers w/ Docker, Kubernetes & OpenShift',
        institution: 'IBM',
        date: 'July, 2023',
        img: 'https://coursera.org/share/f1372b1a346dd8d02972da78a1e46841'
    }, {
        id: 1,
        title: 'Introduction to NoSQL Databases',
        institution: 'IBM',
        date: 'July, 2023',
        img: 'No Certificate'
    }, {
        id: 2,
        title: 'Introduction to Agile Development and Scrum',
        institution: 'IBM',
        date: 'April, 2023',
        img: 'https://coursera.org/share/2db6dca2ba7e683d979be265c7a21ae4'
    }, {
        id: 3,
        title: 'Python from Zero to Master with Python 3',
        institution: 'Udemy',
        date: 'January, 2023',
        img: 'https://www.udemy.com/certificate/UC-3b79a6f9-89eb-4c9a-a485-214e54a9dc08/'
    }, {
        id: 4,
        title: 'Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization',
        institution: 'Deeplearning.ai',
        date: 'July, 2022',
        img: 'https://coursera.org/share/8d523d29a4c716eb162eb5def899d9db'
    }, {
        id: 5,
        title: 'Introduction to Git and GitHub',
        institution: 'Google',
        date: 'July, 2022',
        img: 'https://coursera.org/share/ba79f813245b5c670999acbf2be1c8b2'
    }, {
        id: 6,
        title: 'ETL and Data Pipelines with Shell, Airflow and Kafka',
        institution: 'Coderhouse',
        date: 'May, 2021',
        img: 'https://coursera.org/share/0c2f302731c0f31ba84c2cfb3c16fd2c'
    }, {
        id: 7,
        title: 'Neural Networks and Deep Learning',
        institution: 'Deeplearning.ai',
        date: 'June, 2022',
        img: 'https://coursera.org/share/76797bf995836c15e53a4e390f2de986'
    }, {
        id: 8,
        title: 'Excel Basics for Data Analysis',
        institution: 'IBM',
        date: 'June, 2022',
        img: 'https://coursera.org/share/3b0202aebfb2f605bc272b37e40c6b70'
    }, {
        id: 9,
        title: 'Probability and Statistics for Experimental Physics',
        institution: 'Facultad de Ciencias Exactas, Universidad Nacional de La Plata',
        date: 'Second Semester, 2020',
        img: 'https://imgur.com/tY4PNf0.jpg'
    }]

    return (
        <div className='cert-container'>
            <hr />
            <h2 className='section-title'>Certifications</h2>
            
        </div>
        
    );
}