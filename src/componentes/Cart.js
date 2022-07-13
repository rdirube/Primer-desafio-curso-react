import CartContext from './CartContext';
import { useContext, useState } from 'react';
import './../App.css';
import 'react-materialize/lib/Icon';
import { Link } from 'react-router-dom';
import { collection, setDoc , doc} from 'firebase/firestore';
import db from '../utils/firebaseConfig'
import { v4 as uuidv4 } from 'uuid'; 

const CompleteCart = ({ }) => {

    const { cartListItems, removeItem, totalPrice,  setCartListItems, items , setItems} = useContext(CartContext)

    const [completeTransaction, setTransaccion] = useState(false)
    const [value, setValue] = useState({
        name: '',
        phone: '',
        eMail: ''
    })

    const tableHeader = ['Producto', 'Cantidad', 'Precio', 'Por producto', 'Eliminar']
    const tableResult = ['Total', '', '', `${totalPrice}.00`, '']
    const formularyValues = [{
        name:'name',
        value: value.name,
        placeHolder:'Nombre y apellido'
    }, {
        name:'phone',
        value: value.phone,
        placeHolder:'Teléfono'
    }, {
        name:'eMail',
        value: value.eMail,
        placeHolder:'Correo electrónico'
    }]

    function activateTransaction() {
        if (!completeTransaction) {
            setTransaccion(true);
        }
    }


    function desactivateTransaction() {
        if (completeTransaction) {
            setTransaccion(false);
        }
    }

    function cancelTransaction () {
        setTransaccion(false);
    }


    const handleChange = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value })
    }


    function updateAvaiableItems()  {
    console.log(cartListItems)
     const itemsInTheCart = items.map(item => {
     const itemIsOnCart = cartListItems.find(it => it.id === item.id);
        return {
           ...item, stock: item.stock - (itemIsOnCart !== undefined ? itemIsOnCart.quantity : 0)
        }    
     });
     setItems(itemsInTheCart)
     }
    

    
    const handleSubmit = () => {
        insertDataInDatabase();
        updateAvaiableItems() 
        desactivateTransaction();
        setCartListItems([]);
    }


    const headerTable =
        tableHeader.map((header) => {
            return (
                <span className='header-opt'>{header}</span>
            )
        })

    const totalTable =
        tableResult.map((total) => {
            return (
                <span className='header-opt'>{total}</span>
            )
        })


   const formulary = formularyValues.map((val) => {
    return (
        <input type="text" name={val.name} value={val.value} onChange={handleChange} className='submit' placeholder={val.placeHolder}></input>

    )
   })
 
        
    const insertDataInDatabase = async () => {
        const docref = doc(collection(db, 'orders'));
        await setDoc(docref,  {
            id:uuidv4().replaceAll("-", "1"),
            buyer: {
                email: value.eMail,
                name: value.name,
                phone: value.phone
                },
            items: cartListItems,
            total:totalPrice
        })

    }



    {
        return (
            cartListItems.length > 0 ? (
                <div style={{ width: '100%', height: '100%', position: 'relative' }}>
                    <div className='cart-line'>
                        {headerTable}
                    </div>
                    {cartListItems.map((item, i) => {
                        return (
                            <div className='cart-line' key={item.id}>
                                <span className='header-opt'>{item.title}</span>
                                <span className='header-opt'> {item.quantity}</span>
                                <span className='header-opt'> $ {item.price}.00</span>
                                <span className='header-opt'>$ {item.quantity * item.price}.00</span>
                                <span className='header-opt' style={{ cursor: 'pointer' }} onClick={() => removeItem(i)}> <i className="material-icons">delete</i></span>
                            </div>
                        )
                    })}
                    <div className='cart-line'>
                        {totalTable}
                    </div>
                    <div style={{ width: '100%', display: 'flex', justifyContent: "center", marginTop: '2vh' }}>
                        <button className='button-9' onClick={() => activateTransaction()} style={{ width: '39vh' }}>Completar compra</button>
                    </div>
                    {completeTransaction && <div style={{ width: '100%', height: '85vh', backgroundColor: 'rgb(100,100,100,0.7)', justifyContent: 'center', alignItems: 'center', position: 'absolute', top: '0', bottom: '0', display: 'flex' }}>
                        <div className='submit-container'>
                            <h4 style={{ transform: 'translateY(-2vh)' }}>Formulario de contacto</h4>
                             {formulary}
                             <div style={{display:'flex', justifyContent: 'center', width:'100%'}}>
                            <input type="button" onClick={() => handleSubmit()} className='submit button' value="Enviar"  style={{backgroundColor:'#4ee44e'}}></input>
                            <input type="button" onClick={() => cancelTransaction()} className='submit button' value="Cancelar"></input>
                            </div>
                        </div>
                    </div>}
                </div>
            ) : (
                <div style={{ height: '60vh', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                    <p style={{ fontSize: '4vh' }}>No hay productos en tu carrito</p>
                    <Link to="/"><button className="button-28" role="button">Volver al home</button></Link>

                </div>)
        )
    }




}

export default CompleteCart;