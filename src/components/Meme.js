import React, { useState } from "react";
import memesData from "../memesData.js";

export default function Meme() {
  const [memes, setMemes] = useState();
  const [topText, setTopText] = useState();
  const [downText, setDownText] = useState();
  function setMemesFunc() {
    setMemes(undefined);
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setMemes(memesArray[randomNumber].url);
  }
  return (
    <main>
      <div className="form">
        <input
          type="text"
          onChange={(e) => setTopText(e.target.value)}
          value={topText}
          placeholder="Top text"
          className="form--input"
        />
        <input
          type="text"
          onChange={(e) => setDownText(e.target.value)}
          value={downText}
          placeholder="Bottom text"
          className="form--input"
        />
        <button className="form--button" onClick={() => setMemesFunc()}>
          Get a new meme image 🖼
        </button>
      </div>
      {memes && (
        <div className="relative max-w-4xl mx-auto mt-11 bg-red-400 flex justify-center items-center ">
          <h1 className="top-0 absolute text-4xl leading-9 font-bold text-white uppercase">
            {topText}
          </h1>
          <img src={memes} alt="meme" className="w-full" />
          <h1 className="bottom-0 absolute text-4xl leading-9 font-bold text-white uppercase">
            {downText}
          </h1>
        </div>
      )}
    </main>
  );
}
