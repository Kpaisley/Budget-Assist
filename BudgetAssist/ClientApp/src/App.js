import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Counter } from './components/Counter';
import { FetchData } from './components/FetchData';
import { Home } from './components/Home';
import { Layout } from './components/Layout';
import './custom.css';

const App = () =>  {

    const [items, setItems] = useState([]);

    useEffect(() => {
        const itemsFound = sessionStorage.getItem('storedItems');
        if (itemsFound) {
            setItems(JSON.parse(itemsFound));
        }
        

    }, [])


    //ADD ITEMS TO SESSION STORAGE 
    useEffect(() => {
        if (items.length > 0) {
            sessionStorage.setItem('storedItems', JSON.stringify(items));
        }
    }, [items])



    //ADD AN ITEM TO ITEMS ARRAY
    function addItem(e) {
        e.preventDefault();
        var msg = document.getElementById('add-item-msg');
        var id = 1;
        var name = e.target[0].value.charAt(0).toUpperCase() + e.target[0].value.slice(1); //CAPITALIZE ITEM NAME
        var price = parseFloat(e.target[1].value).toFixed(2); //PARSE STRING VALUE INTO FLOAT WITH 2 DECIMALS

        //INCREMENT ID BASED ON ID OF LAST ITEM IN ITEMS[]
        if (items.length > 0) {
            id = items[items.length - 1].id + 1;
        }

       

        const itemToAdd = {
            id: id,
            name: name,
            price: price,
            category: e.target[2].value
        }

        
        switch (itemToAdd.name && e.target[1].value) {
            case '': //DISPLAY ERROR IF EXPENSE NAME || TOTAL COST IS EMPTY
                msg.style.color = "red";
                msg.innerHTML = "Please ensure all fields are filled out"
                break;
            default:
                setItems(items => [...items, itemToAdd]);
                msg.style.color = "black";
                msg.innerHTML = itemToAdd.name + " Added!";

                for (let i = 0; i < 3; i++) {
                    e.target[i].value = "";
                }

                e.target[0].focus();
        }

        
        
    }
  
    return (
      <Layout>
        <Routes>
                <Route index="true" element={<Home items={items} addItem={addItem} />} />
                <Route path="/counter" element={ <Counter /> } />
                <Route path="/fetch-data" element={ <FetchData /> } />
        </Routes>
      </Layout>
    );
  
}

export default App;
