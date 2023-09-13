"use client"

import React from 'react'
import style from "./Filters.module.css"
import { useDispatch, useSelector } from 'react-redux'
import { addFilter } from '@/redux/action'
import { DataState } from '@/redux/reducer'

export interface Filters {
    filters: []
}
function Filters() {
    const dispatch = useDispatch()

    const handlerFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(addFilter(event.target.value))
    }
    //inhabilitar input de filtros 
    let disabled = true
    const characters = useSelector((state: DataState) => state.characters)
    if (characters.length) disabled = false
    return (
        <div>
            <div className={style.containerFilters}>FILTERS
                <div className={style.containerType}>
                    <h5>GENDER</h5>
                    <label>Male
                        <input
                            disabled={disabled}
                            name='gender'
                            type="checkbox"
                            value="male"
                            onChange={handlerFilter}
                        />
                    </label>
                    <label>Female
                        <input
                            disabled={disabled}
                            name='gender'
                            type="checkbox"
                            value="female"
                            onChange={handlerFilter}
                        />
                    </label>

                </div>
                <div className={style.containerType}>
                    <h5>BIRTH YEAR</h5>
                    <label>BBY
                        <input
                            disabled={disabled}
                            type="checkbox"
                            value="BBY"
                            onChange={handlerFilter}
                        />
                    </label>
                    <label>ABY
                        <input
                            disabled={disabled}
                            type="checkbox"
                            value="ABY"
                            onChange={handlerFilter}
                        />
                    </label>

                </div>
                <div className={style.containerType}>
                    <h5>EYES COLOR</h5>
                    <label>Blue
                        <input
                            disabled={disabled}
                            type="checkbox"
                            value="blue"
                            onChange={handlerFilter}
                        />
                    </label>
                    <label>Orange
                        <input
                            disabled={disabled}
                            type="checkbox"
                            value="orange"
                            onChange={handlerFilter}
                        />
                    </label>
                    <label>Brown
                        <input
                            disabled={disabled}
                            type="checkbox"
                            value="brown"
                            onChange={handlerFilter}
                        />
                    </label>
                    <label>Yellow
                        <input
                            disabled={disabled}
                            type="checkbox"
                            value="yellow"
                            onChange={handlerFilter}
                        />
                    </label>

                </div>
            </div>
        </div>
    )
}

export default Filters