import React from 'react'
import Titleh2 from '../global/Titleh2'
import MainDonationsCafecito from './MainDonationsCafecito'
import MainTopSeparatorTitle from './MainTopSeparatorTitle'

const MainDonations = () => {
  return (
    <div>
      <MainTopSeparatorTitle />
      <Titleh2 title='Ayudame a seguir mejorando la plataforma' />
      <MainDonationsCafecito />
    </div>
  )
}

export default MainDonations
