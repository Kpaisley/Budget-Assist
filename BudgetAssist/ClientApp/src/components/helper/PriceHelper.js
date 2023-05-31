
//GET THE TOTAL OF ALL ITEMS
export function getTotal(items) {
    var total = 0.00;
    for (let i = 0; i < items.length; i++) {
        total += parseFloat(items[i].price);
    }
    return total.toFixed(2);
}


export function fillTotalsArray(items, itemCategories) {
    const totalsMap = {};

    for (let i = 0; i < itemCategories.length; i++) {
        totalsMap[itemCategories[i]] = 0;
    }
    for (let x = 0; x < items.length; x++) {
        const category = items[x].category;
        const price = parseFloat(items[x].price);

        totalsMap[category] += price;
    }
    
    const totalsArray = Object.values(totalsMap).map(total => total.toFixed(2));
    return totalsArray;
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


export function getPercentages(totalCost, itemTotals) {
    const percentages = [];

    if (totalCost !== 0) {
        for (let i = 0; i < itemTotals.length; i++) {
            const categoryPercentage = ((itemTotals[i] / totalCost) * 100).toFixed(1);
            percentages.push(categoryPercentage);
        }
    }
    return percentages;
}



