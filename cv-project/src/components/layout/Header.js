export default function Header() {
    return (
        <div className='header'>
            <div className='header-top'>
                <h1 className='my-name'>Victoria Gardella Ruiz</h1>
            </div>
            <div className='header-bottom'>
                <div className='bottom-description'>
                    <p className='my-description'>Developer - Data Analyst</p>
                </div>
                <div className='nav-bar'>
                    <a href='#edu' alt='Education'>Education</a>
                    <a href='#proj' alt='Projects'>Projects</a>
                    <a href='#work' alt='Work Experience'>Work Experience</a>
                </div>
            </div>
        </div>
    );
}