import React from 'react'
import style from "./page.module.css"
import Cards from '@/components/cards/Cards'
import "../../styles/font.module.css"
import Navbar from '@/components/navBar/NavBar'
import Filters from '@/components/filters/Filters'
function home() {

    return (
        <>
            <Navbar />
            <div style={{ display: "flex", justifyContent: "space-between", padding: "20px" }}>
                <div className={style.containerCards}>
                    <Cards />
                </div>
                <Filters />
            </div>
        </>
    )
}

export default home