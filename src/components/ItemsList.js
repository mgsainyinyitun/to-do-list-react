import React from 'react';
import Item from './Item';
import {connect} from 'react-redux';

const ItemsList  = (props) =>{
    console.log(props.items);
    const renderItems = props.items.map((item)=>{
        return <Item 
         key = {props.items.indexOf(item)}
         text = {item}
         />
    });

    return(
        <div className='item_list'>
            {renderItems}
        </div>
    );
}
const mapStateToProps = state =>{
    return {
        items:state
    }
}
export default connect(mapStateToProps)(ItemsList);