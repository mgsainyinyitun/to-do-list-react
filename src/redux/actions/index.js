
import {ADD_ITEM} from './constant';

const addItem = (item)=>{
    return{
        type:ADD_ITEM,
        payload:{
            item:item
        }
    }
}

export default addItem;