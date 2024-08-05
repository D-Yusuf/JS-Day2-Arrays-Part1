const groceries = ["item1", "item2", "item3", "item4", "item5", "item6",]
console.log(groceries.length) // items count
console.log(groceries[groceries.length - 1]) // get last item
groceries.pop() //remove last item
groceries.push("new1", "new2")
const firstThreeItems = groceries.slice(0, 3) // return from 0 index to 2 
groceries.splice(2, 1) // removed third item
groceries.unshift("newFirstItem1") // added element to start of array
firstThreeItems.splice(0, 2, "ketchup", "chili") // replace first and second item with these
console.log(firstThreeItems)
