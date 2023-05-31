import { BudgetItem } from "./BudgetItem";
import { getTotal } from './helper/PriceHelper.js';
import './BudgetTable.css';
import { useState } from "react";


export const BudgetTable = (props) => {

    return props.items.length > 0 && (
        <>
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
        </>
    );
}