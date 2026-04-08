import React, { use } from 'react';
import Cousine from './Cousine';
import { MoneyContext } from './FamilyTree';

const Aunt = () => {
    const [money, setMoney]= use(MoneyContext)

    const addMoney=()=>{
        setMoney(money+5000);
    }
    return (
        <div>
            <h3>Aunt</h3>
            <section>
                <Cousine name="Sayma"></Cousine>
            </section>
            <button onClick={addMoney} style={{backgroundColor:"white", color:'black', marginTop:"10px"}}>Add 5000</button>
        </div>
    );
};

export default Aunt;