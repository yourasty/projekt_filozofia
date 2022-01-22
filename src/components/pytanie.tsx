import React, { useRef, useState } from 'react';
import dbType from '../interface';
import Btn from './btn';
import img from './img/img.png'

type prop = {
  db: dbType[],
  handleStage: VoidFunction,
  handleScore: VoidFunction,
  rounds: number
}

function Pytanie(props: prop) {

  const [round, setRound] = useState(0)

  const db = props.db[round]
  let clicked = false

  // handle the selected answer
  const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const button: HTMLButtonElement = event.currentTarget;

    if (!clicked) { 
      clicked = true //lock the answer button

      if (button.textContent === db.correct) {// show if selected answer is correct
        button.style.backgroundColor = "green"
        props.handleScore()
      }
      else button.style.backgroundColor = "red"

      if (round < props.rounds-1) { //update round if there are still rounds to go
        setTimeout(() => { // let it sit for 1.5 sec before updating
          setRound((prevState) => { return prevState + 1 })
          clicked = false // release answer button
        }, 1500)
      }
      else {
        setTimeout(() => props.handleStage(), 1500) // let it sit then  
      }                                             // change stage if no rounds left to go
    }
  };

  const getOdp = () => { // getting answers in random sequence every time
    let answers: string[] = []
    let odp: JSX.Element[] = []

    if (db.answers && round < props.rounds) { // check if everything loaded before processing 
      let rngAnswers: string[] = []

      let questionNo = db.answers.length // getting number of answers
      let rng = 0, safety = 0

      do { // random sequence
        rng = Math.floor(Math.random() * db.answers.length)
        if (!rngAnswers.includes(db.answers[rng])) rngAnswers.push(db.answers[rng])
        safety++
      }
      while (rngAnswers.length < questionNo && safety < 1000) 
      answers = rngAnswers

      answers.forEach(e => { // creating JSX Button elements
        odp.push(<Btn key={e + round} text={e} onClick={buttonHandler} />)
      });
    }

    return odp;
  }

  let odp: JSX.Element[] = getOdp();

  //console.log(round, "score: ", scoreRef.current)

  return (
    <div className="Pytanie">
      <div className='Pytanie-img'>
        <img className='Pytanie-img-img' alt="" src={img}></img>
      </div>
      <h2 className="Pytanie-header-title">Pytanie {round+1}</h2>
      <h1 className="Pytanie-header">
        {db.question}
      </h1>
      <div className="Pytanie-body">
        {odp}
      </div>
    </div>
  );
}

export default Pytanie;
