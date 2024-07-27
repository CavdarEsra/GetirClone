import { useState,useEffect } from "react"
import CardsData from 'api/cards.json'

export default function Cards() {

  const [cards,setCards] = useState([]);
  useEffect (()=>{
    setCards(CardsData)
  },[])

  return (
    <div className="grid grid-cols-3 gap-x-4">
      {cards.length && cards.map(card => (
        <div className="bg-white rounded-lg shadow-lg p-14 flex flex-col items-center text-center">
          <img src={card.image} className="w-[150] h-[150] mb-6"/>
          <h6 className="font-semibold text-lg text-primary-brand-color">{card.title}</h6>
          <p className="mt-2 text-sm text-gray-700">{card.description}</p>
        </div>
      ))}
    </div>
  )
}
