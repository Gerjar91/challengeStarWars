"use client"

import React, { useEffect, useState } from 'react'
import style from "./Filters.module.css"
import { useDispatch } from 'react-redux'
import { addFilter } from '@/redux/action'

export interface Filters {
    order?: string
    gender?: string
    birth_year?: string
    eye_color?: string
}
function Filters() {

    const dispatch = useDispatch()
    const [filterObj, setFilterObj] = useState<any>({})

    //cargar filtros al estado 
    const handlerInput = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = event.target;
        if (value) {
            setFilterObj((filterObj: Filters) => ({
                ...filterObj,
                [name]: value,
            }));
        } else {
            setFilterObj((prevState: Filters) => {
                const updatedState: any = { ...prevState };
                delete updatedState[name];
                return updatedState;
            })
        }
    }
    //despachar una action por cada filtro que se agrega 
    useEffect(() => {
        dispatch(addFilter(filterObj))
    }, [filterObj])


    const deleteAllFilters = () => {
        setFilterObj({})
    }

    return (
        <div>
            <div className={style.containerFilters}>FILTERS
                <div className={style.containerType}>
                    <h5>ORDER</h5>
                    <select className={style.select} onChange={handlerInput} name='order' >
                        <option value={""}>All</option>
                        <option >A-Z</option>
                        <option>Z-A</option>
                    </select>
                </div>
                <div className={style.containerType}>
                    <h5>GENDER</h5>
                    <select className={style.select} onChange={handlerInput} name='gender' >
                        <option value={""}>All</option>
                        <option >male</option>
                        <option>female</option>
                        <option>unknown</option>
                    </select>
                </div>
                <div className={style.containerType}>
                    <h5>BIRTH YEAR</h5>
                    <select className={style.select} onChange={handlerInput} name='birth_year' >
                        <option value={""}>All</option>
                        <option>BBY</option>
                        <option>ABY</option>
                    </select>
                </div>
                <div className={style.containerType}>
                    <h5>EYE COLOR</h5>
                    <select className={style.select} onChange={handlerInput} name='eye_color' >
                        <option value={""}>All</option>
                        <option >blue</option>
                        <option>yellow</option>
                        <option>orange</option>
                        <option>brown</option>
                        <option>unknown</option>

                    </select>
                </div>
                <button
                    onClick={deleteAllFilters}
                    disabled={Object.keys(filterObj).length ? false : true}
                    className={style.button}
                >clear filters</button>
            </div>
        </div>
    )
}

export default Filters