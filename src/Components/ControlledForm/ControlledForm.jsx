import React, { useState } from 'react';

const ControlledForm = () => {

    const [password, setPassword] =useState('')
    const [error, setError]= useState('');

    const handleSubmit=e=>{
        e.preventDefault();
        console.log(e.target.password.value)
    }

    const handleOnChange=e=>{
        console.log(e.target.value)
        setPassword(e.target.value);

        if(password.length < 6){
            setError('Password must be 6 characters or longer');
        }
        else{
            setError('');
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input name='email' type="email" placeholder='Your Email' required/>
                <br />
                <input type="password" name='password' onChange={handleOnChange} defaultValue={password} placeholder='Your Password' required/><br />
                <input style={{marginTop:'5px'}} type="submit" value="Submit"/>
            </form>
            <p>
                <small style={{color:"red"}}>{error}</small>
            </p>
        </div>

    );
};

export default ControlledForm;