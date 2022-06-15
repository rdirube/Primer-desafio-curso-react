import { createContext, useState, useEffect } from 'react'



const CartContext = createContext()


const CartProvider = ({ children }) => {

 const [cartListItems, setCartListItems] = useState([]);
 const [totalPrice, setPrice] = useState(0);
 const [totalQuantity, setQuantity] = useState(0);


    const addProduct = (product) => {
        const existProductIndex = cartListItems.find(x => product.id === x.id);
        if(!existProductIndex) {
            setCartListItems(cartListItems => [...cartListItems, product]);
        }
      
    }

  

 
    const calculateTotal = () => {
        if(cartListItems.length > 0) {
            const totalByProduct = cartListItems.map(c => {
                return (
                    c.price * c.quantity
                )
              }).reduce((acc, b) => acc + b);
                setPrice(totalByProduct);  
        }
     
    }


    const calculateTotalQuantity = () => {
        if(cartListItems.length > 0) {
            const totalQuant = cartListItems.map(c => {
                return(
                    c.quantity 
                )
             }).reduce((acc, b) => acc + b);
             setQuantity(totalQuant)
        }
        console.log()
     
    }


    const removeItem = (index) => {
      const newCart = cartListItems.filter((c,i) => i !== index)
      setCartListItems(cartListItems => [...newCart])
    } 


    useEffect(() => {
        calculateTotal();
        calculateTotalQuantity()
       }, [cartListItems])
   


    const data = {
        cartListItems,
        addProduct,
        removeItem,
        calculateTotal,
        totalPrice,
        totalQuantity
    }


    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext
export { CartProvider }