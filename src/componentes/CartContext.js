import { createContext, useState } from 'react'



const CartContext = createContext()


const CartProvider = ({ children }) => {

 const [cartListItems, setCartListItems] = useState([]);

    const addProduct = (product) => {
        const existProductIndex = cartListItems.find(x => product.id === x.id);
        if(!existProductIndex) {
            setCartListItems(cartListItems => [...cartListItems, product]);
        } 
    }

    const removeItem = (index) => {
      const newCart = cartListItems.filter((c,i) => i !== index)
      setCartListItems(cartListItems => [...newCart])
    } 


    const data = {
        cartListItems,
        addProduct,
        removeItem
    }


    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext
export { CartProvider }