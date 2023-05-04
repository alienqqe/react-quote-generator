import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [quotes, setQuotes] = useState('')

  const getQuote = () =>{
    fetch('https://type.fit/api/quotes')
    .then((res) => res.json())
    .then((data) =>{
      let randomNumber = Math.floor(Math.random() * data.length)
      setQuotes(data[randomNumber])
    })
  }
  
  useEffect(() => {
    getQuote()
  }, []);

  return (
    <>
      <div className='quote'>
       <p>{quotes.text}</p> 
        <p>{quotes.author}</p>
        <div>
        <button onClick={getQuote}>Get Quote</button> 
        <a 
        href={`https://twitter.com/intent/tweet?text=${quotes.text}`} 
         className='btn'
         target='blank'
         rel='noopener noreferrer'
         >Tweet</a>
        
        </div>
     </div>    
      
    </>
  )
}

export default App
