import useState from 'react';

export default function PersonalInfo() {
    const [ isEditing, setEditing ] = useState(false);

    let info = { 
                name: 'Victoria Macarena Gardella Ruiz',
                age: 28,
                DNI: '38.691.578',
                country: 'Argentinian',
            }
    
    let infoStructure;
    if (isEditing) {
        infoStructure = (
            <form class='cv-form'>
                <label forHTML='name'>Name: </label>
                <input id='name'></input>
                <br />
                <label forHTML='age'>Age: </label>
                <input id='age'></input>
                <br />
                <label forHTML='dni'>DNI: </label>
                <input id='dni'></input>
                <br />
                <label forHTML='country'>Country: </label>
                <input id='country'></input>
            </form>
        )
    } else {
        infoStructure = (
            //<b>Name: </b> {info.name}

        )
    }

    function handleEdit(e) {

    }

    return (
        <div class='principal'>
            <h1 class='principal-title'>Welcome to my Page!</h1>
            <hr/>
            { infoStructure };
            <button onClick={handleEdit}>
                Edit Information
            </button>
        </div>
    );
}