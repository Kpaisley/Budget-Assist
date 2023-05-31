import React, { useEffect, useState } from 'react';
import { BudgetForm } from './BudgetForm';
import { BudgetItem } from './BudgetItem';
import { BudgetTable } from './BudgetTable';
import { getTotal, fillTotalsArray, getPercentages, getCategoryTotals } from './helper/PriceHelper.js';
import './Home.css';
import { PieChart } from './PieChart';

export const Home = (props) => {


    const [itemCategories] = useState(['Entertainment', 'Groceries', 'Eating Out', 'Bills', 'Fuel', 'Pets', 'Savings', 'Other']);
    const [totalsArray, setTotalsArray] = useState([]);
    const [categoryPercentages, setCategoryPercentages] = useState([])

    useEffect(() => {
        const totalCost = getTotal(props.items);
        const totals = fillTotalsArray(props.items, itemCategories);

        var test = getCategoryTotals(props.items, itemCategories);

        setTotalsArray(totals);
        setCategoryPercentages(getPercentages(totalCost, totals));

        

    }, [props.items, itemCategories])


    return (
        <div>
            <h1>Welcome to Budget Assist V1.0.0</h1>
            <h3>Add items to your budget list below</h3>
            
            <BudgetForm addItem={props.addItem} itemCategories={itemCategories} />

            <BudgetTable items={props.items} />
                

                

                

               

                      

            <PieChart categoryTotals={totalsArray} entertainmentTotal={totalsArray[0]} groceriesTotal={totalsArray[1]} eatingOutTotal={totalsArray[2]} billsTotal={totalsArray[3]} fuelTotal={totalsArray[4]}
                petsTotal={totalsArray[5]} savingsTotal={totalsArray[6]} otherTotal={totalsArray[7]} />
        </div>
    );
  
}

