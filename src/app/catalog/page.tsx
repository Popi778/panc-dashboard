import Footer from '@/components/footer/footer'
import Nav from '@/components/nav/nav'
import DashboardPage from '@/components/plant/plant-exb'
import PlantView from '@/components/plant/plant-view'
import PlantInfo from '@/components/plant/plant_info'
import React from 'react'

function HomePage() {
  return (
    <div>
      <Nav />
      <DashboardPage />
      <Footer />
    </div>
  )
}

export default HomePage
