import { createContext, useState, } from 'react';

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {

    const [count, setCount] = useState(0)
    const [productToShow, setProductToShow] = useState({})
    const [cartProducts, setCartProducts] =useState([])

    return (
        <CartContext.Provider value={{
            count, setCount,
            cartProducts, setCartProducts,
            productToShow, setProductToShow,

        }}>
            {children}
        </CartContext.Provider>
    )
}