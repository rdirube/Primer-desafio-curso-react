import jean from './assets/jean.jpeg'
import tShirt from './assets/t-shirt.jpg'  
import socks from './assets/socks.jpeg';
import straightJean from './assets/straight-jean.jpeg';
import brownShirt from './assets/brown-fit-t.jpeg';
import greySocks from './assets/grey-socks.jpeg'
import vShirt from './assets/v-shirt.jpeg';
import jeggins from './assets/jeggins-jean.jpeg'



const Items =[
    {
        id:1,   
        title:'Skinny jean',
        description: 'tight jeans, long height',
        price:150,
        categorie:1,
        pictureUrl: jean,
        stock:7
    }, {
        id:2,
        title:'T-shirt nomad',
        description: 'long t shirt, colorless',
        price:70,
        pictureUrl:tShirt,
        categorie:2,
        stock:6

    },
    {
        id:3,
        title:'Sport socks',
        description: 'White casual socks',
        price:20,
        pictureUrl:socks,
        categorie:3,
        stock:11 
    },
    {
        id:4,
        title:'Straight jean',
        description: 'Loose jeans, shorter height',
        price:170,
        pictureUrl: straightJean,
        categorie:1,
        stock:8
    }, {
        id:5,
        title:'T-shirt fit',
        description: 'Fit shirt, strong brown',
        price:70,
        pictureUrl:brownShirt,
        categorie:2,
        stock:3

    },
    {
        id:6,
        title:'Office socks',
        description: 'grey fancy socks',
        price:35,
        pictureUrl:greySocks,
        categorie:3,
        stock:10
    },
    {
        id:7,
        title:'Jeggings jean',
        description: 'Blue classic Jean',
        price:165,
        categorie:1,
        pictureUrl: jeggins,
        stock:4
    }, {
        id:8,
        title:'T-shirt V',
        description: 'Fit shirt V-type, deep black',
        price:75,
        pictureUrl:vShirt,
        categorie:2,
        stock:9

    }
];


export default Items;