import React from 'react'
import style from "./page.module.css"
import Cards from '@/components/cards/Cards'
import "../../styles/font.module.css"
import Navbar, { } from '@/components/navBar/NavBar'
import Filters from '@/components/filters/Filters'
import Image from 'next/image';
import star01 from "../../assets/star01.png"


function home() {
    return (
        <>
            <Navbar />
            <div style={{ display: "flex", justifyContent: "space-between", padding: "20px" }}>
                <div className={style.containerCards}>
                    <Cards />
                </div>
                <Image className={style.image} src={star01} alt=""/>
                <Filters />
            </div>
        </>
    )
}

export default home