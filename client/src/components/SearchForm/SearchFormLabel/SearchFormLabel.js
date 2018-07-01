import React from 'react';

const aux = (props) => props.children;

const SearchFormLabel = (props) => (
    <Aux>
        <label htmlFor={props.name}>{props.name}:</label>
        <input
        value={props.value}
        onChange={props.changed}
        type="text"
        className="form-control"
        />
        <br></br>
        </Aux>
);

export default SearchFormLabel