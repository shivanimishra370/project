import React from 'react'
import { mainCarosaldata } from './MainCarosaldata'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css';

const MainCarosal = () => {
    const items = mainCarosaldata.map((item)=><img classname='cursor-pointer -z-10 ' role='presentation' src={item.image} alt=""/>)

  return (
  <AliceCarousel
  items={items}
  disableButtonsControls
  autoPlay
  autoPlayInterval={1500}
  infinite
  />


  )
}

export default MainCarosal
