"use client"

import React, { useState } from 'react'
import style from "./Filters.module.css"
import { useDispatch, useSelector } from 'react-redux'
import { DataState } from '@/redux/reducer'
import { addFilter } from '@/redux/action'

export interface Filters {
    filters: []
}
function Filters() {
    const dispatch = useDispatch()

    const handlerFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
        let obj =[event.target.name,event.target.value]
        console.log(obj);

        dispatch(addFilter(event.target.value))
    }

    return (
        <div>
            <div className={style.containerFilters}>FILTERS
                <div className={style.containerType}>
                    <h5>GENDER</h5>
                    <label>Male
                        <input
                            name='gender'
                            type="checkbox"
                            value="male"
                            onChange={handlerFilter}
                        />
                    </label>
                    <label>Female
                        <input
                            name='gender'
                            type="checkbox"
                            value="female"
                            onChange={handlerFilter}
                        />
                    </label>
                    <label>unknown
                        <input
                            name='gender'
                            type="checkbox"
                            value="unknown"
                            onChange={handlerFilter}
                        />
                    </label>
                    <label>n/a
                        <input
                            name='gender'
                            type="checkbox"
                            value="n/a"
                            onChange={handlerFilter}
                        />
                    </label>
                </div>
                <div className={style.containerType}>
                    <h5>BIRTH YEAR</h5>
                    <label>BBY
                        <input
                            type="checkbox"
                            value="BBY"
                            onChange={handlerFilter}
                        />
                    </label>
                    <label>ABY
                        <input
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
                            type="checkbox"
                            value="blue"
                            onChange={handlerFilter}
                        />
                    </label>
                    <label>Orange
                        <input
                            type="checkbox"
                            value="orange"
                            onChange={handlerFilter}
                        />
                    </label>
                    <label>Brown
                        <input
                            type="checkbox"
                            value="brown"
                            onChange={handlerFilter}
                        />
                    </label>
                    <label>Yellow
                        <input
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