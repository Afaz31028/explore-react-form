import React, { useRef } from 'react';

const UncontrolledField = () => {

    const emailRef= useRef('');
    const passwordRef= useRef('');

    const handleSubmit=e=>{
        e.preventDefault();
        const email= emailRef.current.value;
        const password= passwordRef.current.value;
        console.log(email, password)

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={emailRef} name='email' type="email" placeholder='Your Email'/>
                <br />
                <input ref={passwordRef} type="password" name='password' placeholder='Password' />
                <br />
                <input style={{marginTop:'5px'}} type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default UncontrolledField;