


const Item = ({id,title, price, pictureUrl}) => {
   
   
   
   return (
       <div>
           <p>{title}</p>
           <img src={pictureUrl}></img>
           <p>{price}</p>
       </div>
   ) 
}



export default Item; 