import React from 'react';
import Cousine from './Cousine';

const Uncle = () => {
    return (
        <div>
            <h3>Uncle</h3>
            <section className='flex'>
                <Cousine name="Irfan"></Cousine>
                <Cousine name="Israt Jahan"></Cousine>
            </section>
        </div>
    );
};

export default Uncle;