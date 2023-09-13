"use client"
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import Card from '../card/Card';
import style from './Cards.module.css';
import { dataCharacterFilters } from '@/redux/selector';
import { DataState } from '@/redux/reducer';
import { Toaster, toast } from 'react-hot-toast';

export default function Cards() {
    let dataCharactersFilters = useSelector(dataCharacterFilters)
    let filters = useSelector((state: DataState) => state.filters)

    //agregar index a cada card 
    let index = 1
    dataCharactersFilters.forEach((el => {
        el.index = index++
    }))

    //fracionar el estado para paginarlo 
    const dataCharactersPage = [];
    for (let i = 0; i < dataCharactersFilters.length; i += 4) {
        const array = dataCharactersFilters.slice(i, i + 4);
        dataCharactersPage.push(array);
    }
    const [page, setPage] = useState(0)


    // controladores del index para paginado
    const advancePage = () => {
        setPage(page + 1)
    }
    const backPage = () => {
        setPage(page - 1)
    }
    //seterar a pagina 0 cuando se aplican filtros 
    useEffect(() => {
        setPage(0);
    }, [dataCharactersFilters.length]);
   
    

    // arrojar un error si no se encurntran filtros 
    useEffect(() => {
        if (filters.length > 0 && dataCharactersFilters.length == 0) {
            toast.error("There are no characters for those filters")
        }
    }, [filters])

    return (
        <>{!dataCharactersFilters.length ? (
            <>
                <h1 className={style.title}>Enter a star wars character to add to the list.</h1>
                <Toaster />

             <img className={style.image} src='https://freepngimg.com/save/16912-star-wars-jedi-png/1023x877'></img>  
            </>
        ) : (
            <div style={{ display: "flex", flexDirection: "column" }}>
                 <img className={style.image} src='https://freepngimg.com/save/16912-star-wars-jedi-png/1023x877'></img> 
                <div style={{ display: "flex", alignItems: "center" }}>
                    <h4 className={style.pageTitle}>PAGES</h4>
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
                {dataCharactersPage[page]?.map((item) =>
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
            </div>
        )}

        </>
    )
}
