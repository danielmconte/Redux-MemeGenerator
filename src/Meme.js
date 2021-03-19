import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import './Meme.css'


const Meme = () => {
    const {meme, memeTop, memeBtm} = useSelector(store => ({
        meme: store.meme, 
        memeTop: store.memeTop, 
        memeBtm: store.memeBtm}))

    return(
        <>
        <h3>{memeTop}</h3>
        <img src={meme}></img>
        <h3>{memeBtm}</h3>
        </>
    )
}

export default Meme;