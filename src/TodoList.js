import React from 'react';
import Todo from './Todo'
import { v4 as uuidv4 } from 'uuid';
import {useSelector, useDispatch} from 'react-redux'

const TodoList= () => {
    const dispatch = useDispatch(); 
    const {todo} = useSelector(store => ({
        todo: store.todo
    }));
    console.log(todo);

    const handleDelete= (id) => {
        dispatch({type: 'DELETE_TODO', id});
        }
    
    return (
        <>
        <ul>
        {todo.map(((t, idx)=> (
            <Todo message={t} id = {idx} handleDelete = {()=>handleDelete(idx)} />
        )))}
        </ul>
        </>
    
        )
    }


export default TodoList;