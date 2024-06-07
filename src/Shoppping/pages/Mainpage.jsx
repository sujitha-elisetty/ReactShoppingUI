import React, {useState} from 'react'
import Header from '../Components/Header'
import Banner from '../Components/Banner'
import Footer from '../Components/Footer'
import LadiesCollection from '../Components/LadiesCollection'
import Collection from '../Components/Collection'
import {Gents, Ladies} from '../data'
const Mainpage = () => {
  const [gentsFashion , setGentsFashion] = useState(Gents)
  const[ladiesFashion, setLadiesFashion] =useState(Ladies)
  console.log(Gents)

  return (
    <div>
      <Header />
      <Banner />
      <Collection gentsFashion = {gentsFashion} />
     <LadiesCollection ladiesFashion ={ladiesFashion} />
      <Footer />

    </div>
  )
}

export default Mainpage
