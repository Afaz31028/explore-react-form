import React from 'react';

const FormAction = () => {
    
    const handleFormAction=(formData)=>{
        console.log(formData.get('name'))
        console.log(formData.get('email'))
    }
    return (
        <div>
            <form action={handleFormAction}>
                <input name='name' type="text" />
                <br />
                <input type="text" name='email' /><br />
                <input style={{marginTop:'5px'}} type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default FormAction;