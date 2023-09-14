import { flights } from 'src/mockData/flights'

export default function Hooks(valueS: string) {

  const els = flights[0].result.flights

  const filtered = []

  if(valueS === '- по возрастанию цены') {
    filtered.push(els.sort((a, b) => a.flight.legs[0].duration - b.flight.legs[0].duration))
  } else {
    console.log('n')
  }
 console.log(filtered)
}



