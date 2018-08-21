import React from 'react';
import Wine from './Wine';

const winelist = (props) => {
    return (
        <div>
        {props.wine.map(c => <Wine key={c.id} name={c.name} />)}
        </div> 
    );
}

export default winelist;