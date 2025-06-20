import React, { useState } from 'react'
import "./App.css"

const emojiDictionary={
  happy:"😀",
  love:"😍",
  angry:"🤬",
  cool:"😎",
  sad:"😔",
  fire:"🔥",
  party:"🥳",
  sleep:"😴",
  ok:"👌"
  
}

function App ()  {
const [input, setInput] = useState("")
const [translated, setTranslated] = useState("")

const handleChange = (e)=>{
  const text=e.target.value.toLowerCase()
  setInput(text) 

  const words = text.split(" ")
  const result=words.map((word)=>emojiDictionary[word]|| word).join(" ");
    setTranslated(result)
  
}
  return (
    <div className='App'>
       <h1>😊Emoji Translator</h1>
       <input type="text" placeholder='Type somtheing like : happy love fire' value={input} onChange={handleChange} />
       <p style={{fontsize:"24px",marginTop:"20px"}}>{translated}</p>
    </div>
  )
}

export default App