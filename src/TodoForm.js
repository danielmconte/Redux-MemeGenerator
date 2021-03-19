import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux'

const TodoForm = () => {
    const dispatch = useDispatch();
    const todo = useSelector(store => ({todo: store.todo}))
    const [inputs, setInputs] = useState(todo)
    
   
    const handleTodoChange = (evt) => {
        const {value, name} = evt.target;
        setInputs(inputs => ({...inputs, [name]: value}))
    };

    const handleClick = (todo) => {
        dispatch({
            type: 'ADD_TODO',
            todo,
            value: inputs[todo]
        })
        
    };
    
    return (
    <div>
    <h3>Enter your todo</h3>
    <label htmlFor="todo">Todo:</label>
    <input
        id="todo"
        name="todo"
        type="text"
        value={inputs[todo]}
        onChange={handleTodoChange}
    />
    <button onClick={() => handleClick('todo')}>Confirm</button>
    </div>
    )
}

export default TodoForm;