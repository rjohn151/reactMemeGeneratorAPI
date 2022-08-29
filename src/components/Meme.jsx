import React from "react";
import './Meme.css'
import memesData from "./memesData.jsx";
import { useState } from 'react';
import { useEffect } from 'react'

const Meme = () => {

  // const [memeImage, setMemeImage] = useState("https://i.imgflip.com/28j0te.jpg")

  const [meme, setMeme] = useState({
      topText: "",
      bottomText: "",
      randomImage: "https://i.imgflip.com/28j0te.jpg"
  })

  // const [allMemes, setAllMemes] = useState([memesData])
  const [allMemes, setAllMemes] = useState([])
  // console.log(memesData)

  useEffect(() => {
    fetch(`https://api.imgflip.com/get_memes`)
      .then(res => res.json()) 
      // .then(data => console.log(data))
      .then(data => setAllMemes(data.data.memes))
  }, [])
  console.log(allMemes)

  const handleClick = () => {
    // return console.log("I was clicked b!")
    // const memesArray = memesData.data.memes
    // const allMemes = allMemes.data.memes
    const randomNumber = Math.floor(Math.random() * allMemes.length)
    const url = allMemes[randomNumber].url
    setMeme(prevMeme => {
      return {
          ...prevMeme,
          randomImage: url
      }
    })
    // console.log(url)
  }

  const handleChange = (event) => {
    const {name, value} = event.target
      setMeme(prevMeme => {
          return {
              ...prevMeme,
              [name]: value
          }
    })
  } 

  return (
    <main>
          <div className="form" action="">
            <input 
                type="text" 
                className="form-input" 
                placeholder="First Caption"
                name="topText"
                value={meme.topText}
                onChange={handleChange}
             />
            <input 
                type="text" 
                className="form-input" 
                placeholder="Second Caption" 
                name="bottomText"
                value={meme.bottomText}
                onChange={handleChange}
              />
            <button className="form-button" onClick={handleClick}>
                  Get a new meme image
              </button>
          </div>

          <div className="meme">
              <img src={meme.randomImage} className="meme-image" alt="" />
              <h2 className="meme--text top">{meme.topText}</h2>
              <h2 className="meme--text bottom">{meme.bottomText}</h2>
          </div>
          
    </main>

  )
}

export default Meme