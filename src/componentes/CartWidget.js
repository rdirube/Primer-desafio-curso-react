import 'react-materialize/lib/Icon';



const Cart = ()=> {
    return (
        <div style={{margin: '0 4vh 0 2vh', backgroundColor:'rgb(220,220,220)', width:'48px', height:'48px',display:'flex' ,justifyContent:'center', alignItems:'center', border:'1px solid black' ,borderRadius:'50%', cursor:'pointer'}}>
        <i class="material-icons" >add_shopping_cart
         </i>
         <p style={{fontSize:'15px', transform:'translateY(5px)'}}>0</p>
        </div>
    )
}


export default Cart;