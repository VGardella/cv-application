// import { useState } from 'react';

export function Certifications() {
    let certif = [{
        id: 0,
        title: 'Data Science Certification',
        institution: 'Coderhouse',
        date: 'September, 2022',
        img: 'https://imgur.com/eSfuR4m.jpg'
    }, {
        id: 1,
        title: 'Data Analytics Certification',
        institution: 'Coderhouse',
        date: 'May, 2021',
        img: 'https://imgur.com/hHu4hyC.jpg'
    }]

    return (
        <div className='cert-container'>
            <hr />
            <h2 className='section-title'>Certifications</h2>
            <CertifCard values={certif} />
        </div>
        
    );
};

function CertifCard({ values }) {
    const certList = values.map(certification =>
        <div>
            <div className="card-container">
                <div className='info-container'>
                    <b>Title: </b> {certification.title}
                    <br/>
                    <b>Institute: </b> {certification.institution}
                    <br/>
                    <b>Date: </b> {certification.date}
                </div>
                <div class="img-container">
                    <a href={certification.img} target="_blank" rel="noreferrer">
                        <img
                            src={certification.img}
                            alt={certification.title}
                            style={{ width: 200 }}
                        />
                    </a>
                </div>
            </div>
            <br/>
        </div>
    );

    return certList;
}
