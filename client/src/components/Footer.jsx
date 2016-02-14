import React from 'react';

export default (props) => {
    console.log(props.filter);
    let {filter} = props;
    return (
        <footer>
            <a style={filter === 'ALL' ? {fontWeight: 'bold'} : {}} href="#">All</a>
            <a style={filter === 'ACTIVE' ? {fontWeight: 'bold'} : {}} href="#/active">Active</a>
            <a style={filter === 'COMPLETED' ? {fontWeight: 'bold'} : {}} href="#completed">Completed</a>
        </footer>
    )
}