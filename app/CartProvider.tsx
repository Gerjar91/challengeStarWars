"use client"
import store from '@/redux/store'
import React from 'react'
import { Toaster } from 'react-hot-toast'
import { Provider } from 'react-redux'

function CartProvider({ children }: { children: React.ReactNode }) {

    return (

        <Provider store={store}>
                {children}
        </Provider>
    )
}

export default CartProvider