"use client";

import React, { useState } from 'react'
import style from "./NavBar.module.css"
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addCharacterByname } from '@/redux/action';
import { Toaster, toast } from 'react-hot-toast';
import { DataState } from '@/redux/reducer';


function Navbar() {
    const dispatch = useDispatch()

    //estado local para controlar input
    const [input, setInput] = useState("")
    const handlerChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value)
    }

    let characters = useSelector((state: DataState) => state.characters)

    // Verificar si existe algún personaje con el mismo nombre

    for (let i = 0; i < characters.length; i++) {
        let name = characters[i].name
        if (name?.toLowerCase().includes(input)) { }
    }


    //solicitud de info a la APi 
    const searchCharacter = async () => {
        try {
            setInput("");
            const url = `https://swapi.dev/api/people/?search=${input}`;
            const response = await axios(url);
            if (response.data.results.length === 0) {
                toast.error("Opps there are no characters.");
            } else {
                response.data.results.forEach((el: any) => {
                    dispatch(addCharacterByname(el));
                });
                toast.success("Characters added to the list.");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className={style.navbar}>
            <Toaster />
            <h2 > Challenge Star Wars</h2>
            <ul>
                <input
                    onChange={handlerChangeInput}
                    value={input}
                    className={style.input}
                    placeholder='Search Character ....'>

                </input>
                <button
                    disabled={input.length > 1 ? false : true}
                    className={style.button}
                    onClick={searchCharacter}>
                    Search
                </button>
            </ul>
        </div>
    )
}

export default Navbar