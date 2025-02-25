import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import Contact from './assets/Contact'
import Hello from './assets/Hello'
import Counter from './assets/Counter'

function App() {
  const helloData = [
    {name: 'Nunnawit', message: 'Hi there'},
    {name: 'Ryu', message: 'Hello..'}
  ];
  return (
    <>
      <div>
        <Counter/>
        {helloData.map((data, index) => (
          <Hello key={index} name={data.name} message={data.message}/>
        ))}

        <Contact email="Nunnawit@gmail.com" phone="0982851451"/>
      </div>
    </>
  )
}

export default App
