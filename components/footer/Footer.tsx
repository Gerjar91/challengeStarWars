import React from 'react'
import style from "./Footer.module.css"
import Link from 'next/link'
function Footer() {
    return (
        <div className={style.container}>
            <div style={{ padding: 17 }}>
                <h5>Este challenge fue realizado para la empresa Kairox con el objetivo de mostrar conocimientos basicos para cubrir un puesto de trabajo como desarollador Front-end.</h5>
                <p>Tecnologias utilizadas : </p>
                <p>#Next.js - #React.js - #Redux.js - #TypeScript - #CSS</p>
            </div>
            <div className={style.redes}>
                <h5>Codigo</h5>
                <Link href={"https://github.com/Gerjar91/challengeStarWars"}>
                    <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="" />
                </Link>
            </div>
            <div>
            </div>
        </div>
    )
}

export default Footer