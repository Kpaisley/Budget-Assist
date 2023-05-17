import React from 'react';
import './Home.css';

export const Home = (props) => {

  
    return (
        <div>
            <h1>Welcome to Budget Assist V1.0.0</h1>
            <h3>Add items to your budget list below</h3>

            <form id="add-item-form" onSubmit={(e) => props.addItem(e) }>
                <label htmlFor="expense-name">Expense Name</label>
                <input type="text" name="expense-name" id="expense-name" placeholder="Dog Food" autoFocus></input>

                <label htmlFor="item-cost">Total Cost $</label>
                <input type="number" step="0.01" name="item-cost" id="item-cost" placeholder="110.24"></input>

                <label>Category</label>
                <select>
                    <option value=""></option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Groceries">Groceries</option>
                    <option value="Eating Out">Eating Out</option>
                    <option value="Bills">Bills</option>
                    <option value="Fuel">Fuel</option>
                    <option value="Pets">Pets</option>
                    <option value="Savings">Savings</option>
                    <option value="Other">Other</option>
                </select>

                <input type="submit"></input>
            </form>
            {props.items.length}
        </div>
    );
  
}

