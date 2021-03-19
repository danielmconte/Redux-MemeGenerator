import React from 'react';



const Todo = ({message, id, handleDelete}) => {

    return (
    <>
    
        <li id={id} onClick={handleDelete}>{message} ({id})</li>
    </>
    )
    
}

export default Todo;