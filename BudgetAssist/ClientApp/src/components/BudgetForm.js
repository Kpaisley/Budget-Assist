

export const BudgetForm = (props) => {


    return (
        <form id="add-item-form" onSubmit={(e) => props.addItem(e)}>
            <label htmlFor="expense-name">Expense Name</label>
            <input className="form-input" type="text" name="expense-name" id="expense-name" placeholder="Car Payment" autoFocus></input>

            <label htmlFor="item-cost">Total Cost $</label>
            <input className="form-input" type="number" step="0.01" name="item-cost" id="item-cost" placeholder="150.49"></input>

            <label>Category</label>
            <select>
                {
                    props.itemCategories.map((itemCategory) =>
                        <option key={itemCategory} value={itemCategory}>{itemCategory}</option>
                    )
                }
            </select>

            <input className="submit-btn" type="submit"></input>
            <span id="add-item-msg"></span>
        </form>
    );
}