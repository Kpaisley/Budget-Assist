import './CategoryTotals.css';

export const CategoryTotals = (props) => {


    return props.items.length > 0 && (
        <div className="category-table">
            {props.categoryTotals.map((category) =>
                <div key={category.categoryName} className="category-item">
                    <span className="category-name">{category.categoryName}</span>
                    <span className="category-total">${category.categoryTotal}</span>
                </div>
                
            )}

        </div>
    );
}
