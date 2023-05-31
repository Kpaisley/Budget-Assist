import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Counter } from './components/Counter';
import { FetchData } from './components/FetchData';
import { Home } from './components/Home';
import { Layout } from './components/Layout';
import './custom.css';

const App = () =>  {

    const [items, setItems] = useState([]);

    //Set items[] array to itemsFound from session storage to prevent losing data on page refresh
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

        //Display error message if any input values are left blank.
        switch (e.target[0].value.length && e.target[1].value.length && e.target[2].value.length) {
            case 0:
                msg.style.color = "red";
                msg.innerHTML = "Please ensure all fields are filled out"
                break;
            default:
                //Initialize & capitalize item name
                const name = e.target[0].value.charAt(0).toUpperCase() + e.target[0].value.slice(1);
                //Initialize & parse string value to float with 2 decimal points.
                const price = parseFloat(e.target[1].value).toFixed(2);
                //Initialize item category
                const category = e.target[2].value;

                //Increment id based on the id of the last item in items[] array
                if (items.length > 0) {
                    id = items[items.length - 1].id + 1;
                }

                //Initialize itemToAdd with values above
                const itemToAdd = {
                    id: id,
                    name: name,
                    price: price,
                    category: category
                }
                //Push itemToAdd to items[] array and display success message
                setItems(items => [...items, itemToAdd]);
                msg.style.color = "black";
                msg.innerHTML = itemToAdd.name + " Added!";
                
                e.target[0].focus();
                e.target[0].value = '';
                e.target[1].value = '';
                e.target[2].value = 'Entertainment';
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
