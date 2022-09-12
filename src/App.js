import React from 'react'
import Feature from './components/Feature'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import { featureItems } from './data/featureItems'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Feature props={featureItems[0]} />
      <Feature props={featureItems[1]} />
      <Feature props={featureItems[2]} />
    </div>
  )
}

export default App