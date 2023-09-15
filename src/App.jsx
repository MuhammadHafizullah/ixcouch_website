
import './App.css'
import Feature from './components/Feature'
import Hero from './components/Hero'
import Method from './components/Method'
import Team from './components/Team'
import Try from './components/Try'
import What_In_It from './components/What_In_It'
import Why_Join from './components/Why_Join'
import Working from './components/Working'
import '@splidejs/react-splide/css/core';


const App = ()=>{
  return (
    <>
      <Hero />
      <Working />
      <Try />
      <Method />
      <Why_Join />
      <What_In_It />
      <Feature />
      <Team />
    </>
  )
}

export default App
