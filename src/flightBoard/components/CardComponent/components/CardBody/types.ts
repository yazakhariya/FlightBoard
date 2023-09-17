type Caption = {
    caption: string
    uid: string
  }
  
  type Info = {
    airline: Caption
    departureCity: Caption
    departureAirport: Caption
    arrivalAirport: Caption
  }
  
  type Segments = {
    [index: number]: Info
  }
  
  export type LegElement = {
    duration: number
    segments: Segments
  }
  
  export type Legs = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    legs?: any
    [index: number]: LegElement
  }
  