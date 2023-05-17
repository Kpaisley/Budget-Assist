import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
/*import AppRoutes from './AppRoutes'; */
import { Counter } from './components/Counter';
import { FetchData } from './components/FetchData';
import { Home } from './components/Home';
import { Layout } from './components/Layout';
import './custom.css';

const App = () =>  {

    const [items, setItems] = useState([]);
    
    



    //ADD AN ITEM TO ITEMS ARRAY
    function addItem(e) {
        e.preventDefault();

        const itemToAdd = {
            name: e.target[0].value,
            price: e.target[1].value,
            category: e.target[2].value
        }


        setItems(items => [...items, itemToAdd]);
        //ADD ITEMS TO SESSIONSTORAGE SO IT WILL SAVE ON REFRESH
        
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
