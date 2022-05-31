// TEST CODE
const SupermarketItems  = require('../src/supermarketItems.js')

describe("Supermarket items", () => {
  it("returns total of the items in the shopping list", () => {
    // setup
    const supermarketItems = new SupermarketItems()
    const currentBasket = [{item: "yoghurt", price: 0.60, quantity: 2}, {item: "milk", price: 1.00, quantity: 1}]
    // execute
    const basketTotal = supermarketItems.totalCost(currentBasket)
    // verify
    expect(basketTotal).toEqual("total cost of basket is: ", 2.20)
  })

  it("returns a string with all of the properties of the items in the basket", () => {
    // setup
    const supermarketItems = new SupermarketItems()
    const currentBasket = [{"item 1": "yoghurt", "price": 0.60, "quantity": 2}, {"item 2": "milk", "price": 1.00, "quantity": 1}]
    // execute
    const receipt = supermarketItems.createReceipt(currentBasket) + supermarketItems.totalCost(currentBasket)
    // verify
    expect(receipt).toEqual([{item: "yoghurt", price: 0.60, quantity: 2}, 
                              {item: "milk", price: 1.00, quantity: 1},]) + "total cost of basket is: ", 2.20
  })
})