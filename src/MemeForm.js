import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux'

const MemeForm = () => {
    const dispatch = useDispatch();
    const {meme, memeTop, memeBtm} = useSelector(store => ({meme: store.meme, memeTop: store.memeTop, memeBtm: store.memeBtm}))
    const [inputs, setInputs] = useState({meme, memeTop, memeBtm}) 
    


    const handleChange = (evt) => {
        const {value, name} = evt.target;
        setInputs(inputs => ({...inputs, [name]: value}))
    };
    
    const handleClick = (meme) => {
        dispatch({
            type: 'CHANGE_IMAGE',
            meme,
            value: inputs[meme]
        })
    };
    
    return (
    <div>
    <h3>Enter your info you meme</h3>
    <label htmlFor="top-txt">Top-text:</label>
    <input
        id="top-txt"
        name="memeTop"
        type="text"
        value={inputs.memeTop}
        onChange={handleChange}
    />
     <button onClick={() => handleClick('memeTop')}>Update</button>
    <label htmlFor="btm-txt">Bottom-Text:</label>
    <input
        id="btm-txt"
        name="memeBtm"
        type="text"
        value={inputs.memeBtm}
        onChange={handleChange}
    />
     <button onClick={() => handleClick('memeBtm')}>Update</button>
    <label htmlFor="url">Image URL:</label>
    <input
        id="url"
        name="meme"
        type="text"
        value={inputs.meme}
        onChange={handleChange}
    />
    <button onClick={() => handleClick('meme')}>Update</button>
</div>
    )
}

export default MemeForm;