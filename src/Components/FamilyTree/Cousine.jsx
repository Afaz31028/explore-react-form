import React, { useContext } from 'react';
import {MoneyContext } from './FamilyTree';

const Cousine = ({name}) => {

    const [money, setMoney]= useContext(MoneyContext);
    return (
        <div>
            <h3>{name}</h3>
            {
                name === "Irfan" && <p>Total Money: {money}</p>
            }
        </div>
    );
};

export default Cousine;