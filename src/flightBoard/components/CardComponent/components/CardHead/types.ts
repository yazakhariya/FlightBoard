type Carrier = {
    airlineCode: string
    caption: string
    uid: string
  }
  
  type Total = {
    amount: string
    currency: string
    currencyCode: string
  }
  
  type SinglePassengerTotal = {
    singlePassengerTotal: Total
  }
  
  type PassengerPrices = {
    [index: number]: SinglePassengerTotal
  }
  
  type Price = {
    passengerPrices: PassengerPrices
  }
  
  export type DataType = {
    price: Price
    carrier: Carrier
  }
  