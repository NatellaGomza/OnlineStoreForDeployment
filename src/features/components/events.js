import {EventEmitter} from 'events';

let addToBasket=new EventEmitter(); 
let deleteFromBasket=new EventEmitter(); 

export {addToBasket, deleteFromBasket};