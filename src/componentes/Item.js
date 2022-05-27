


const Item = ({item}) => {
   
   return (
       <div style={{width:'35vh', height:'60vh' , border: '1px solid #ADD8E6', borderRadius:'15px', display:'flex', flexDirection:'column' ,justifyContent:'space-evenly', alignItems:'center'}}>
           <p style={{color:'black'}}>{item.title}</p>
           <img style={{width:'80%', height: '60%'}} src={item.pictureUrl}></img>
           <p style={{color:'black'}}>{item.price}$</p>
       </div>
   ) 
}



export default Item; 