
//   /**
//    * @param {Item[]} items - array of items
//    * @returns {number} the total quantity of all items
//    */
  function countItems(items) {
    // TODO: use `reduce`
    const initialValue = 0
    const reducedArray = items.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.quantity;}, initialValue);
    console.log(reducedArray);
    return reducedArray;
    // accumulator and currentValue are general reference point 
    // return items.reduce ((accumulator, currentValue) => accumulator + currentValue.quantity, 0);
  }



//   /**
//  * @param {Item[]} items - array of items
//  * @returns {number} the total quantity of all items
//  */
// function countItems(items) {
//     const initialValue = 0;
//     const totalQuantity = items.reduce((accumulator, currentValue) => {
//       return accumulator + currentValue.quantity;
//     }, initialValue);
    
//     // Logging for debugging
//     console.log(totalQuantity); // Optional: you can keep this for debugging
//     return totalQuantity; // Ensure you return the computed total
//   }
  
  
  // --------------------- DO NOT CHANGE THE CODE BELOW ------------------------ //
  
  /** @type {Item[]} */
  const INVENTORY = [
    { id: 1, name: "apple", price: 1.75, category: "fruit", quantity: 100 },
    { id: 2, name: "banana", price: 0.25, category: "fruit", quantity: 137 },
    { id: 3, name: "orange", price: 1.0, category: "fruit", quantity: 10 },
    { id: 4, name: "broccoli", price: 3.0, category: "vegetable", quantity: 67 },
    { id: 6, name: "milk", price: 5.75, category: "dairy", quantity: 90 },
    { id: 7, name: "cheddar", price: 4.0, category: "dairy", quantity: 63 },
    { id: 8, name: "sourdough", price: 5.5, category: "grains", quantity: 81 },
  ];

  console.log(`In total, we have ${countItems(INVENTORY)} items in stock.`);




