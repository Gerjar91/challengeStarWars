"use client"
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { DataState } from '@/redux/reducer';
import Card from '../card/Card';
import style from './Cards.module.css';
import { dataCharacterFilters } from '@/redux/selector';

export default function Cards() {
    let dataCharacters = useSelector(dataCharacterFilters)

    //agregar index a cada card 
    let index = 1
    dataCharacters.forEach((el => {
        el.index = index++
    }))

    //fracionar el estado para paginarlo 
    const dataCharactersPage = [];
    for (let i = 0; i < dataCharacters.length; i += 4) {
        const array = dataCharacters.slice(i, i + 4);
        dataCharactersPage.push(array);
    }
    const [page, setPage] = useState(dataCharactersPage.length)


    // controladores del index para paginado
    const advancePage = () => {
        setPage(page + 1)
    }
    const backPage = () => {
        setPage(page - 1)
    }


    return (
        <>{!dataCharacters.length ? (
            <>
                <h1 className={style.title}>Enter a star wars character to add to the list.</h1>
             {/* <img className={style.image} src='https://freepngimg.com/save/16912-star-wars-jedi-png/1023x877'></img>  */}
            </>
        ) : (
            <>
                {/* <img className={style.image} src='https://freepngimg.com/save/16912-star-wars-jedi-png/1023x877'></img> */} 
                <div style={{ display: "flex" }}>
                    <button
                        className={style.buttonPage}
                        onClick={backPage}
                        disabled={page == 0 ? true : false}
                    >
                        ⇦
                    </button>
                    <div className={style.page}>{page}</div>
                    <button
                        className={style.buttonPage}
                        onClick={advancePage}
                        disabled={page == dataCharactersPage.length - 1 ? true : false}>
                        ⇨
                    </button>
                </div>
                {dataCharactersPage[page].map((item) =>
                    <div key={item.name}>
                        <Card
                            name={item.name}
                            eye_color={item.eye_color}
                            height={item.height}
                            skin_color={item.skin_color}
                            birth_year={item.birth_year}
                            index={item.index}
                            gender={item.gender}
                            mass={item.mass}
                        />
                    </div>
                )}
            </>
        )}

        </>
    )
}
