import React from 'react';
import { BudgetItem } from './BudgetItem';
import './Home.css';

export const Home = (props) => {

  
    return (
        <div>
            <h1>Welcome to Budget Assist V1.0.0</h1>
            <h3>Add items to your budget list below</h3>

            <form id="add-item-form" onSubmit={(e) => props.addItem(e) }>
                <label htmlFor="expense-name">Expense Name</label>
                <input className="form-input" type="text" name="expense-name" id="expense-name" placeholder="Car Payment" autoFocus></input>

                <label htmlFor="item-cost">Total Cost $</label>
                <input className="form-input" type="number" step="0.01" name="item-cost" id="item-cost" placeholder="150.49"></input>

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

                <input className="submit-btn" type="submit"></input>
                <span id="add-item-msg"></span>
            </form>

            <table className="description-table">
                <thead>
                    <tr>
                        <th><h5>Name</h5></th>
                        <th><h5>Price</h5></th>
                        <th><h5>Category</h5></th>
                    </tr>
                </thead>
            </table>
            <hr className="color-blue" />

            {props.items.map((item) => (
                <BudgetItem key={item.id} item={item} />
                ))}

            <span>TOTAL ITEMS: {props.items.length}</span>
        </div>
    );
  
}

