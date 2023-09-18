
type Carrier = {
  airlineCode: string
  caption: string
  uid: string
}

type Total = {
  amount: string
  currency?: string
  currencyCode: string
}

type SinglePassengerTotal = {
  total: Total
  singlePassengerTotal: Total
}

type PassPrice = {
  [index: number]: SinglePassengerTotal
}

type Rates = {
  totalEur: Total
  totalUsd: Total
}

type Price = {
  passengerPrices: PassPrice
  total: Total
  rates: Rates
}

export type Flight = {
  price: Price
  carrier: Carrier
}

export type Data = {
  flight: Flight
}

export type UpData = {
  [index:number]: Data
}
