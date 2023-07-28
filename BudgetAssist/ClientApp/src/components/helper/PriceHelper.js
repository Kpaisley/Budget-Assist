
//GET THE TOTAL OF ALL ITEMS
export function getTotal(items) {
    var total = 0.00;
    for (let i = 0; i < items.length; i++) {
        total += parseFloat(items[i].price);
    }
    return total.toFixed(2);
}



export function getCategoryTotals(items, itemCategories) {

    const categoryTotals = {};

    // Initialize category totals
    for (const category of itemCategories) {
        categoryTotals[category] = 0;
    }


    // Calculate category totals
    for (const item of items) {
        categoryTotals[item.category] += parseFloat(item.price);
    }

    // Format category totals to two decimal places and create array of objects
    const totalsArray = Object.keys(categoryTotals).map((categoryName) => ({
        categoryName,
        categoryTotal: categoryTotals[categoryName].toFixed(2),
    }));

    
    return totalsArray;
}


export function getPercentages(totalCost, categoryTotals) {
    const percentages = [];
    
    if (totalCost !== 0) {
        for (let i = 0; i < categoryTotals.length; i++) {
            const itemToAdd = {
                categoryName: categoryTotals[i].categoryName,
                categoryPercentage: ((categoryTotals[i].categoryTotal / totalCost) * 100).toFixed(1)
            }
            percentages.push(itemToAdd);
        }
    }
    return percentages;
}



