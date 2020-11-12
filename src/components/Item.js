import React from 'react';
import './Item.css';

const Item = (props) =>{
    //console.log(props);
    return(
        <div className = "item">
            <div className='mess-wrap'>
                <input type="checkbox" className="check-box" />
                <p className="message">{props.text.item}</p>
            </div>
            <div className='del-wrap'>
                <button className="del"> DEL </button>
            </div>  
        </div>
    );
}


export default Item;
