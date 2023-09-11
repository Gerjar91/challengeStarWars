import React from 'react'
import style from "./Cards.module.css"
import '../../styles/font.module.css'; // Importa el archivo CSS de la fuente

export default function Cards() {
    return (
        <div className={style.container}>
            <div className={style.title}>
                <h1 >Luke Skywalker</h1>
            </div>
            <div className={style.title}>
                <h1 >yoda</h1>
            </div>
        </div>
    )
}
