import React, { createContext, useState } from 'react';
import GrandPa from './GrandPa';
import './FamilyTree.css'

export const AssetContext= createContext('');
export const MoneyContext= createContext(0);

const FamilyTree = () => {
    const asset ='Dimond';
    const newAsset= 'Gold';

    const [money, setMoney] = useState(0);

    return (
        <div className='family-tree'>
            <h3 style={{marginBottom:"20px"}}>Family Tree</h3>
            <h3>Family's total Earn: {money}</h3>
            <MoneyContext value={[money, setMoney]}>
                <AssetContext.Provider value={newAsset}>
                    <GrandPa asset={asset}></GrandPa>
                </AssetContext.Provider>
            </MoneyContext>
        </div>
    );
};

export default FamilyTree;<h3>Family Tree</h3>