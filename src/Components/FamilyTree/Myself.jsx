import React from 'react';
import Wife from './Wife';

const Myself = ({asset}) => {
    return (
        <div>
            <h3>Myself</h3>
            <section>
                <Wife name="Maria" asset={asset}></Wife>
            </section>
        </div>
    );
};

export default Myself;