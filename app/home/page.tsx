import React from 'react'
import style from "./page.module.css"
import Cards from '@/components/cards/Cards'

function home() {

    //https://swapi.dev/api/people/?search=yoda
    return (
        <div className={style.container}>
       <Cards/>
       <Cards/>
       <Cards/>
       <Cards/>

        </div>
    )
}

export default home