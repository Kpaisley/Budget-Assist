import React, { useEffect, useState } from 'react';
import { BudgetItem } from './BudgetItem';
import { getTotal, fillTotalsArray } from './helper/PriceHelper.js';
import './Home.css';
import { PieChart } from './PieChart';

export const Home = (props) => {

    const [totalsArray, setTotalsArray] = useState([]);
    const [itemCategories] = useState(['Entertainment', 'Groceries', 'Eating Out', 'Bills', 'Fuel', 'Pets', 'Savings', 'Other']);

    useEffect(() => {

        var totals = fillTotalsArray(props.items, itemCategories);

        setTotalsArray(totals);
        

    }, [props.items])


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
                    <option value={itemCategories[0]}>{itemCategories[0]}</option>
                    <option value={itemCategories[1]}>{itemCategories[1]}</option>
                    <option value={itemCategories[2]}>{itemCategories[2]}</option>
                    <option value={itemCategories[3]}>{itemCategories[3]}</option>
                    <option value={itemCategories[4]}>{itemCategories[4]}</option>
                    <option value={itemCategories[5]}>{itemCategories[5]}</option>
                    <option value={itemCategories[6]}>{itemCategories[6]}</option>
                    <option value={itemCategories[7]}>{itemCategories[7]}</option>
                </select>

                <input className="submit-btn" type="submit"></input>
                <span id="add-item-msg"></span>
            </form>

            <div hidden={props.items.length == 0}>
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

                <span>Total Items: {props.items.length}</span>
                <br />
                <span>Total Cost: ${getTotal(props.items)}</span>
                <br />

                <PieChart entertainment={totalsArray[0]} groceries={totalsArray[1]} eatingOut={totalsArray[2]} bills={totalsArray[3]} fuel={totalsArray[4]} pets={totalsArray[5]}
                          savings={totalsArray[6]} other={totalsArray[7]} />

            </div>            
            
        </div>
    );
  
}

