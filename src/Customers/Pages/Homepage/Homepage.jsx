import React from 'react'
import MainCarosal from '../../Components/HomeCarol/MainCarosal'
import Homesectioncarosal from '../../Components/Homesectioncarosal/Homesectioncarosal'
import { Menskurta } from '../../../Data/Menskurta'

const Homepage = () => {
  return (
    <div>
     <MainCarosal/> 
     <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
        <Homesectioncarosal data={Menskurta} sectionName={"Women's Saree"}/>
        <Homesectioncarosal data={Menskurta} sectionName={"Women's Lehenga"}/>
        <Homesectioncarosal data={Menskurta} sectionName={"Men's Shoes"}/>
        <Homesectioncarosal data={Menskurta} sectionName={"Men's Shirt"}/>
        <Homesectioncarosal data={Menskurta} sectionName={"Men's Kurta"}/>
     </div>
    </div>
  )
}

export default Homepage
