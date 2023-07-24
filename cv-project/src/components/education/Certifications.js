// import { useState } from 'react';

export function Certifications() {
    let certif = [{
        id: 0,
        title: 'Data Science Certification',
        institution: 'Coderhouse',
        date: 'September, 2022',
        img: 'https://drive.google.com/file/d/1lX8t7Xi8tkuzDoZ_jcKCen7KKzEVk63g/view?usp=sharing'
    }, {
        id: 1,
        title: 'Data Analytics Certification',
        institution: 'Coderhouse',
        date: 'May, 2021',
        img: 'https://drive.google.com/file/d/1kDYhtmTyKQnWycvemGZhmZo6de4mh2iP/view?usp=sharing'
    }]

    return (
        <div className='cert-container'>
            <CertifCard values={certif} />
            <br />
        </div>
        
    );
};

function CertifCard({ values }) {
    const certList = values.map(certification =>
        <div>
            <div className="card-container">
                <div className='infoContainer'>
                    <b>Title: </b> {certification.title}
                    <br/>
                    <b>Institute: </b> {certification.institution}
                    <br/>
                    <b>Date: </b> {certification.date}
                </div>
                <img
                    src={certification.img}
                    alt={certification.title}
                    style={{ width: 300 }}
                />
            </div>
            <br/>
        </div>
    );

    return certList;
}
