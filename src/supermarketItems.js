// SOURCE CODE
class SupermarketItems {
  constructor() {      
      this.basket = []    
    }  

  totalCost (currentBasket) {

    let basketTotal = 0

    const currentBasket = [ {
      item: "juice",
      price: 1.00,
      quantity: 1
    }, {
      item: "bread",
      price: 1.20,
      quantity: 2
    }
  ]

    for (let i = 0; i < currentBasket.length; i++) {
      basketTotal += (currentBasket[i].price * currentBasket[i].quantity)
    }
  

    return "total cost of basket is: ", basketTotal
  }

  createReceipt (currentBasket) {
  
    const currentBasket = [ {
      item: "juice",
      price: 1.00,
      quantity: 1
    }, {
      item: "bread",
      price: 1.20,
      quantity: 2
    }
  ]

    return currentBasket
  }

module.exports = SupermarketItems

