import React from 'react'
import style from "./page.module.css"
import Cards from '@/components/cards/Cards'
import "../../styles/font.module.css"
import Navbar from '@/components/navBar/NavBar'
function home() {


    return (
        <>
            <Navbar />
            <div style={{ display: "flex", justifyContent: "space-between", padding: "35px" }}>
                <div className={style.containerCards}>
                    <Cards />
                </div>
                <div className={style.containerFilters}>FILTROS</div>
            </div>
        </>
    )
}

export default home