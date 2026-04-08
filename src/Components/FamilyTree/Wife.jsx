import React, { useContext } from 'react';
import { AssetContext } from './FamilyTree';

const Wife = ({name, asset}) => {

    const newAsset= useContext(AssetContext);

    return (
        <div>
            <h3>{name}</h3>
            <p>Asset: {asset}</p>
            <p>NewAsset: {newAsset}</p>
        </div>
    );
};

export default Wife;