import React from 'react';
import './App.css';
import {Provider} from 'react-redux';

import AddItem from './AddItem';
import ItemsList from './ItemsList';
import {store} from '../redux/store';
class App extends React.Component{
    render(){
        return(
            <Provider store={store}>
            <div className="container">
                <h1 className="header">To-Do-List</h1>
                <AddItem/>
                <ItemsList
                />
            </div>
            </Provider>
        );
    };
}

export default App;