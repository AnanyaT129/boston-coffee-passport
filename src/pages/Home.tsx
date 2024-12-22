import React from 'react'
import AppHeader from '../components/Header';
import { InfoGrid, InfoType } from '../components/InfoGrid';

function Home() {
  const homeGridInfo: InfoType[] = [
    {
      type: "Img",
      src: "./cafeStock.jpeg",
      alt: "Cafe Stock"
    },
    {
      type: "Card",
      title: "Where to Go?",
      description: "Get personalized recommendations on which cafe to visit.",
      actions: [
        {
          link: "/",
          text: "I'm Ready"
        }
      ]
    },
    {
      type: "Card",
      title: "Scared of AI?",
      description: "Browse all the Cafes on our list.",
      actions: [
        {
          link: "/allCafes",
          text: "I'm Ready"
        }
      ]
    },
    {
      type: "Img",
      src: "./cafeStock.jpeg",
      alt: "Cafe Stock"
    }
  ]
  
  return (
    <div>
      <AppHeader></AppHeader>
      <InfoGrid info={homeGridInfo}></InfoGrid>
    </div>
  )
}

export default Home
