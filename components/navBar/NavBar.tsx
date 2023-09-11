"use client";

import React, { useState } from 'react'
import style from "./NavBar.module.css"
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addCharacterByname } from '@/redux/action';


function Navbar() {
    const dispatch = useDispatch()

    //estado local para controlar input
    const [input, setInput] = useState("")
    const handlerChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value)
    }
    const searchCharacter = async () => {
        try {
            const url = `https://swapi.dev/api/people/?search=${input}`
            const response = await axios(url)
            response.data.results.forEach((el: any) => {
                dispatch(addCharacterByname(el))
            })
            setInput("")
        } catch (error) {
            console.log(error);
        }
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