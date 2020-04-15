import React from 'react';
import {useState} from 'react'
import TextInput from './common/TextInput'

/*interface GreeterProps {
    companyName: string;
}*/

//type GreeterPropType = {companyName: string};

const handleClickArrow = () => {
    console.log('You Clicked Button')
}


function Greeter() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    //TODO: Capture events and update needed input fields

    return (
        <form>
            <TextInput 
                label="Please enter your First name"
                id = "first-name"
                updateField={setFirstName}
                value={firstName}/>

            <TextInput 
                label="Please enter your Last name"
                id = "last-name"
                updateField={setLastName}
                />



            {/* <div className="form-group">
                <label htmlFor="first-name">What is your First name?</label>
                <input type="text" id="first-name" className="form-control" onChange={(event) => setFirstName(event.currentTarget.value)}
                value={firstName}/>
                <br></br>
                <button onClick={handleClickArrow} type="submit" className="btn btn-primary">Say Hi!</button>
            </div>
            <div className="form-group">
                <label htmlFor="last-name">What is your Last name?</label>
                <input type="text" id="last-name" className="form-control" onChange={(event) => setLastName(event.currentTarget.value)}
                value={lastName}/>
                <br></br>
                <button onClick={handleClickArrow} type="submit" className="btn btn-primary">Say Hi!</button>
            </div> */}

            <div>
                <p>Hello {firstName} {lastName}! </p>
            </div>
        </form>
        
    );
}

export default Greeter;