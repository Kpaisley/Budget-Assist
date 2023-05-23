import './BudgetItem.css';

export const BudgetItem = (props) => {


    return (
        <table className="item-table">
            <tbody>
                <tr>
                    <td>{props.item.name}</td>
                    <td>${props.item.price}</td>
                    <td>{props.item.category}</td>
                </tr>
            </tbody>
        </table>
    );
}