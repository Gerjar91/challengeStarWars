"use client"
import React from 'react'
import style from "./Card.module.css"
import { StarWarsCharacter } from '@/redux/reducer';

export default function Card(props: StarWarsCharacter) {

    return (
        <div className={style.container}>
            <div className={style.title}>
                <h1 >{props.name}</h1>
            </div>
            <div className={style.imageContainer}>
            <img  src={props.image}/>
            </div>
            <div className={style.infoContainer}>
                <h4>GENDER :  <p> {props.gender}</p> </h4>
                <h4>HEIGHT :  <p>{props.height} cm</p> </h4>
                <h4>SKIN COLOR :  <p> {props.skin_color}</p></h4>
            </div>
            <div className={style.infoContainer}>
                <h4>EYE COLOR :  <p> {props.eye_color}</p> </h4>
                <h4>MASS :  <p>{props.mass} kg</p> </h4>
                <h4>YEAR OF BIRTH : <p> {props.birth_year}</p></h4>

            </div>
            <h1 className={style.number}>{(props.index != undefined && props.index < 10) ? `0${props.index}` : props.index}</h1>
        </div>

    )
}