import React, { useState } from 'react'

function ToDoList() {

    const [text, setText] = useState("");
    const [textList, setTextList] = useState([]);

    const handleChange = (event) => {
        setText(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setTextList([text, ...textList]);
        setText("")
    }



    return (
        <>
            <div className='form'>
                <h1>ToDo List</h1>
                <form onSubmit={handleSubmit} method='POST'>
                    <input required onChange={handleChange} value={text} placeholder='Your text' type="text" />
                    <button type='submit'>Add</button>
                    {textList.map((item, i) => (
                        <p key={i}>{item}</p>
                    ))}
                </form>
            </div>
        </>
    )
}

export default ToDoList