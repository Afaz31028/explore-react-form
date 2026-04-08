import React, { useContext } from 'react';
import { MoneyContext } from './FamilyTree';

const Brothers = () => {

    const [money, setMoney] = useContext(MoneyContext);

    return (
        <div>
            <h3>Brothers</h3>
            <button style={{backgroundColor:"white", color:'black'}} onClick={()=> setMoney(money+1000)}>Add 1000</button>
        </div>
    );
};

export default Brothers;