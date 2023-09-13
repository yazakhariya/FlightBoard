
export type DataType = {
  legs: L
}

type L = {
  [index:number]: Legs
}

export type Legs = {
  segments: Item
  duration: number
}

type Item = {
  map(arg0: (el: El) => void): import("react").ReactNode
  length: number
  [index:number]: El
}

type El = {
  airline: City
  arrivalAirport: City
  departureAirport: City
  length: number
  departureCity: City
  arrivalCity: City
}

type City = {
  caption: string
  uid: string
}
