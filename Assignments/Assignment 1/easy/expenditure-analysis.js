/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions){
  //create an empty object to store total spent per category
  const categoryTotals= {};
  
  //iterate through each transaction 
  transactions.forEach(function(transaction){
    //exctracting specific properties from transaction object
    const { category, price } = transaction;

    // If category exists, add the price to its total spent
    if(category in categoryTotals){
      categoryTotals[category] += price;
    }
    // If category doesn't exist, create a new category and set its total spent
    else
      categoryTotals[category] = price ;
    
  });

  // Convert the category totals object into the required output format
  const result= Object.keys(categoryTotals).map(function(category){
    return {
      category, 
      totalSpent: categoryTotals[category]
    };
  });
  return result;
}

module.exports = calculateTotalSpentByCategory;
