import { createContext, useState, useEffect } from 'react'
import { collection, getDocs } from 'firebase/firestore';
import db from '../utils/firebaseConfig'



const CartContext = createContext()


const CartProvider = ({ children }) => {

 const [cartListItems, setCartListItems] = useState([]);
 const [totalPrice, setPrice] = useState(0);
 const [totalQuantity, setQuantity] = useState(0);



 const [items, setItems] = useState([])



 

   useEffect(() => {
    getProducts()
    console.log(items)
   }, [])



 
 
  const getProducts = async () => {
     const querySnapshot = await getDocs(collection(db, 'items'));
      const itemList = querySnapshot.docs.map((doc) => {
        let item = doc.data()
        item.id = doc.id;
        return item
      })    
      setItems([...itemList]);
    }

 



 useEffect(() => {
    calculateTotal();
    calculateTotalQuantity();

   }, [cartListItems])





//  const getProducts = async () => {
//     const querySnapshot = await getDocs(collection(db, 'items'));
//      const itemList = querySnapshot.docs.map((doc) => {  
//       setItems(items => [...items,doc.data()])
//      })
//      console.log(items)
//    }




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
    }


    const removeItem = (index) => {
      const newCart = cartListItems.filter((c,i) => i !== index)
      setCartListItems(cartListItems => [...newCart])
    } 


    


    const data = {
        cartListItems,
        addProduct,
        removeItem,
        calculateTotal,
        setCartListItems,
        setQuantity,
        totalPrice,
        totalQuantity,
        items,
        setItems
    }


    return (
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext
export { CartProvider }