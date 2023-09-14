"use client";

import React, { useEffect, useState } from 'react'
import style from "./NavBar.module.css"
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addCharacterByname } from '@/redux/action';
import { LoaderIcon, Toaster, toast } from 'react-hot-toast';
import { DataState, StarWarsCharacter } from '@/redux/reducer';

export interface DataImages {
    name: string;
    image: string
}

function Navbar() {
    const dispatch = useDispatch()

    //estado local para controlar input
    const [input, setInput] = useState("")
    const [loading, setLoading] = useState(false); // Estado para controlar la carga

    const handlerChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInput(event.target.value)
    }


    const loadingImages = async () => {
        let dataImages = new Map()
        const data = await axios("https://akabab.github.io/starwars-api/api/all.json")
        data.data.forEach((element: DataImages) => {
            dataImages.set(element.name, element.image)
    
        });
        return dataImages
    }

    let characters = useSelector((state: DataState) => state.characters)
    //solicitud de info a la APi 
    const searchCharacter = async () => {
        setLoading(true)
        try {
            setInput("");
            const url = `https://swapi.dev/api/people/?search=${input}`;
            const response = await axios(url);
            if (!response.data.results.length) {
                toast.error("Opps there are no characters.");
                setLoading(false)
                return
            }
            //obtener solo los personajes que no estan en el estado
            const charactersToAdd = response.data.results.filter((newCharacter: StarWarsCharacter) => {
                for (const existCharacter of characters) {                    
                    if (newCharacter.name === existCharacter.name) {
                        return false;
                    }
                }
                return true;
            });
    
            if (charactersToAdd.length === 0) {
                setLoading(false);
                toast.error("These characters are already in the list.");
            } else {
                let imagesMap = await loadingImages()
                charactersToAdd.forEach((item: StarWarsCharacter) => {
                    item.image = imagesMap.get(item.name)
                    dispatch(addCharacterByname(item));
                });
                setLoading(false);
                // Mostrar el toast con la cantidad de elementos agregados
                toast.success(`Added ${charactersToAdd.length} characters to the list.`);
            }
        } catch (error) {
            console.log(error);
            toast.error("An error occurred. Please try again later.");
        }
    }

    return (
        <div className={style.navbar}>
            <Toaster />
            <h2 > Challenge Star Wars</h2>
            <ul>{loading ? (
                <>
                    <h2>Searching  </h2>
                    <LoaderIcon style={{ width: 40, height: 40 }} />
                </>
            ) : (null)}
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