import React, { useEffect, useRef, useState } from "react";
import { letters, words } from "../data/letters";
// import hangman from '../hangman-removebg-preview.png'
import hangman1 from "../hangman1.png";
import hangmanHead from "../hangmanhead.png";
import mid from "../mid.png";
import leftHand from "../lefthand.png";
import rightHand from "../righthand.png";
import leftLeg from "../leftLeg.png";
import rightLeg from "../rightLeg.png";
import "./Home.css";
export const Home = () => {
  const [hangmanWord, setHangManWord] = useState("");
  const [length, setLength] = useState([]);
  const [alphabet, setAlphabet] = useState("");
  const [wrongAttempt, setWrongAttempt] = useState(1);
  // const [flag ,setFlag] = useState("none")
  const div_ImageRef = useRef()
  const headRef = useRef()
  const midRef = useRef()
  const leftHandRef = useRef()
  const rightHandRef = useRef();
  const leftLegRef = useRef();
  const rightLegRef = useRef()
  let index;
  var count = 0;
  useEffect(() => {
    let tempWord = words[Math.floor(Math.random() * words.length)];
    setHangManWord(tempWord.toUpperCase());
    setLength(tempWord.toUpperCase().split(""));
  }, []);
 
  const handleClickLetters = (t) => {
    console.log(t.target.value);
    
    // let flag =false;
    index = length.indexOf(t.target.value);
    if (index <= length.length && index >= 0) {
      // for (var i = length.length; i > index; i--) {
        if (length.includes(t.target.value) && hangmanWord.includes(t.target.value)) {
          setAlphabet(t.target.value);
          console.log("hsdhsd");
        }
    }
    else{
     setWrongAttempt(prev=>prev+1) 
     console.log("wrongAttempt :"+ wrongAttempt)
     if(wrongAttempt === 1){
      headRef.current.style.display = "block"
     }
     else if(wrongAttempt === 2){
      midRef.current.style.display = "block"
     }
     else if(wrongAttempt === 3){
      leftHandRef.current.style.display = "block"
     }
     else if(wrongAttempt === 4){
      rightHandRef.current.style.display = "block"
     }
     else if(wrongAttempt === 5){
      leftLegRef.current.style.display = "block"
     }
     else if(wrongAttempt === 6){
      rightLegRef.current.style.display = "block"
     }
    }
  };

  return (
    <>
      <div className="header">
        <h2>Play Hangman</h2>
      </div>
      <div className="container">
        <div className="row">
          <div className="left">
            <div>
              <img src={hangman1} alt="as"/>
            </div>
            <div className="head" ref={headRef}>
              <img src={hangmanHead} alt="as"/>
            </div>
            <div className="mid" ref={midRef}>
              <img src={mid} alt="as"/>
            </div>
            <div className="leftHand" ref={leftHandRef}>
              <img src={leftHand} alt="as"/>
            </div>
            <div className="rightHand" ref={rightHandRef}>
              <img src={rightHand} alt="as"/>
            </div>
            <div className="leftLeg" ref={leftLegRef}>
              <img src={leftLeg} alt="as"/>
            </div>
            <div className="rightLeg" ref={rightLegRef}>
              <img src={rightLeg} alt="as"/>
            </div>
          </div>
          <div className="right">
            <div className="box">
              {console.log(length)}
              {console.log(hangmanWord)}
              {length.map((t, index) => (
                <span key={index}>
                  <input
                    type="text"
                    value={length[index] === alphabet ? alphabet : undefined}
                    className="box_input"
                  />
                </span>
              ))}
            </div>
            <div className="box_letter">
              {letters.map((t, add) => (
                <span key={add}>
                  <button
                    className="letters_btn"
                    value={t}
                    onClick={(t) => handleClickLetters(t)}
                  >
                    {t}
                  </button>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
