import React from 'react';
import './Wine.css';

const Wine = (props) => {
    return (
        <div className="wine">
        <span>{props.id}</span>
        <span>{props.name}</span>
        </div>
    );
}

export default Wine;