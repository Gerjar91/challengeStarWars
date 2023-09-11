"use client";

import React, { useState } from 'react'
import style from "./NavBar.module.css"
import { getCharacter } from './getCharacterByName';


function Navbar() {
    
    const [input, setInput] = useState("")
    const handlerChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value)
    }
    const searchCharacter = async() => {
        getCharacter(input)
        setInput("")
    }
    return (
        <div className={style.navbar}>
            <h2 > Challenge Star Wars</h2>
            <ul>
                <input
                    onChange={handlerChangeInput}
                    value={input}
                    className={style.input}
                    placeholder='Search Character ....'>

                </input>
                <button
                    className={style.button}
                    onClick={searchCharacter}>
                    Search
                </button>
            </ul>
        </div>
    )
}

export default Navbar