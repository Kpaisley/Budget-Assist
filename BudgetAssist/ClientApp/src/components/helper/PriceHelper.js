
//GET THE TOTAL OF ALL ITEMS
export function getTotal(items) {
    var total = 0.00;
    for (let i = 0; i < items.length; i++) {
        total += parseFloat(items[i].price);
    }
    return total.toFixed(2);
}

//export function fillTotalsArray(items, itemCategories) {
//    var totalsArray = [];


//    for (let i = 0; i < itemCategories.length; i++) {
//        const category = itemCategories[i];
//        var total = 0.00;

//        for (let x = 0; x < items.length; x++) {
//            if (category === items[x].category) {
//                total += parseFloat(items[x].price);
//            }


//        }

//        totalsArray.push(total.toFixed(2));

//    }


//    return totalsArray;

//}


export function fillTotalsArray(items, itemCategories) {
    const totalsMap = {};

    for (let i = 0; i < itemCategories.length; i++) {
        totalsMap[itemCategories[i]] = 0;
    }
    console.log(totalsMap)
    for (let x = 0; x < items.length; x++) {
        const category = items[x].category;
        const price = parseFloat(items[x].price);
        totalsMap[category] += price;
    }

    const totalsArray = Object.values(totalsMap).map(total => total.toFixed(2));

    return totalsArray;
}



