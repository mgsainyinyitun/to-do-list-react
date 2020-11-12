import React from 'react';
import {connect} from 'react-redux';
import addItemAction from '../redux/actions/index';

const inputText = React.createRef();

const AddItem = (props)=> {
    
    const addItem = (event) =>{
        event.preventDefault();
        //console.log(inputText.current.value);
        props.addItemToStore(inputText.current.value);
        inputText.current.value="";
    }

    //console.log(props)

    return(
        <form className='form' onSubmit={addItem}>
                <input className = 'input' ref={inputText}/>
                <input type="submit" value="ADD" className='add'/>
        </form> 
    );
}
const mapStateToProps = state =>{
    return {
        items:state
    }
}
const mapDispatchToProps = dispatch =>{
    return {
        addItemToStore: (item)=>{
            dispatch(addItemAction(item));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(AddItem);

