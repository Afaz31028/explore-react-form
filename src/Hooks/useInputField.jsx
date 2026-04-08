import { useState } from "react";

const useInputField=(defaultValue)=>{

    const [field, setField]= useState(defaultValue);

    const handleFiledOnChange=(e)=>{
        setField(e.target.value);
    }

    return [field, handleFiledOnChange]

}

export default useInputField;