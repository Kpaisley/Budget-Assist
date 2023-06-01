import React, { useEffect, useState } from 'react';
import { BudgetForm } from './BudgetForm';
import { BudgetTable } from './BudgetTable';
import { CategoryTotals } from './CategoryTotals';
import { getTotal, getPercentages, getCategoryTotals } from './helper/PriceHelper.js';
import './Home.css';

export const Home = (props) => {


    const [itemCategories] = useState(['Entertainment', 'Groceries', 'Eating Out', 'Bills', 'Fuel', 'Pets', 'Savings', 'Other']);
    const [categoryTotals, setCategoryTotals] = useState([]);
    /*const [categoryPercentages, setCategoryPercentages] = useState([])*/ //WILL BE USED FOR PIE CHART

    useEffect(() => {
        
        const totals = getCategoryTotals(props.items, itemCategories);
        setCategoryTotals(totals);
        

        

        /*const totalCost = getTotal(props.items);*/
        /*setCategoryPercentages(getPercentages(totalCost, totals));*/

        

    }, [props.items, itemCategories])


    return (
        <>
            <div className="intro ">
                <h1>Welcome to Budget Assist V1.0.0</h1>
                <h3>Add items to your budget list below</h3>
            </div>

            <BudgetForm addItem={props.addItem} itemCategories={itemCategories} />

            <BudgetTable items={props.items} />

            <CategoryTotals items={props.items} categoryTotals={categoryTotals} />   

                
            
                

               

                      

            
        </>
    );
  
}

