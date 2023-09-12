"use client"
import React from 'react'
import { useSelector } from 'react-redux';
import { DataState } from '@/redux/reducer';
import Card from '../card/Card';
import style from './Cards.module.css';

export default function Cards() {

    let dataCharacters = useSelector((state: DataState) => state.characters)


    return (
        <>{!dataCharacters.length ? (
            <>
                <h1 className={style.title}>Enter a star wars character to add to the list.</h1>
{/*                 <img className={style.image} src='https://freepngimg.com/save/16912-star-wars-jedi-png/1023x877'></img>
 */}            </>
        ) : (
            <>
{/*                 <img className={style.image} src='https://freepngimg.com/save/16912-star-wars-jedi-png/1023x877'></img>
 */}                {dataCharacters.map((item, index) =>
                    <div key={item.name}>
                        <Card
                            name={item.name}
                            eye_color={item.eye_color}
                            height={item.height}
                            skin_color={item.skin_color}
                            birth_year={item.birth_year}
                            index={index}
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
