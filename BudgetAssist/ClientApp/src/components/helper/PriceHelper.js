
//GET THE TOTAL OF ALL ITEMS
export function getTotal(items) {
    var total = 0.00;
    for (let i = 0; i < items.length; i++) {
        total += parseFloat(items[i].price);
    }
    return total.toFixed(2);
}

//GET THE TOTAL OF ALL ITEMS IN A SPECIFIC CATEGORY
export function getTotals(category, items) {
    var total = 0.00;
    for (let i = 0; i < items.length; i++) {
        if (items[i].category === category) {
            total += parseFloat(items[i].price);
        }
    }
    return total.toFixed(2);
}

