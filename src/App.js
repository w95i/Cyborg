import React from 'react'
import './App.css';
import { Container } from './components/export';
import {Header,Footer,Hero,MostPopular,GamingLibrary} from './Sections/export';


const App = () => {
  return (
    <>
      <Header/>
      <Container>
        <Hero />
        <MostPopular/>
        <GamingLibrary/>
      </Container>
      <Footer/>
    </>
  )
}

export default App