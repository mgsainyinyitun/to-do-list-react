import React from 'react';
import './App.css';

import AddItem from './AddItem';
import ItemsList from './ItemsList';



class App extends React.Component{
    render(){
        return(
            <div className="container">
                <h1 className="header">To-Do-List</h1>
                <AddItem/>
                <ItemsList/>
            </div>
        );
    };
}
export default App;