import React from 'react';
import useInputField from '../../Hooks/useInputField';

const HookForm = () => {
    const [name, setNameOnChange]=useInputField('')
    const [email, setEmailOnChange]= useInputField('')
    const [password, setPasswordOnChange]= useInputField('');

   const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(name, email, password)
   }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={setNameOnChange} defaultValue={name} type="text" name="name" placeholder='Your Name' /><br />
                <input onChange={setEmailOnChange} defaultValue={email} type="email" name="email" placeholder='Your Email' /><br />
                <input onChange={setPasswordOnChange} defaultValue={password} type="password" name="password" placeholder='Password' /><br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;