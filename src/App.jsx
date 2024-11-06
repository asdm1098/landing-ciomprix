import { useState } from 'react';
import './App.css';
import { Hero } from './components/Hero';
import { Article } from './components/Article';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hero />
      <Article />
    </>
  )
}

export default App
