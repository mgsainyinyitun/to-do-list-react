
import {ADD_ITEM} from '../actions/constant';

const initial =[
        { 
            item : 'buy something'
        }
]
export const itemReducer= (state=initial,action)=>{
    switch(action.type){
        case ADD_ITEM: return [...state,action.payload]; 
        default: return state;
    }
};