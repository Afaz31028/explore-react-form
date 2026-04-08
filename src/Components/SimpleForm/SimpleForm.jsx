import React from 'react';

const SimpleForm = () => {
    const handleSubmit=(e)=>{
        e.preventDefault();
        // console.log(e.target)
        // console.log(e.target.name)
        // console.log(e.target.name.value)
        // console.log(e.target.email.value)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input name='name' type="text" />
                <br />
                <input type="text" name='email' /><br />
                <input style={{marginTop:'5px'}} type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SimpleForm;