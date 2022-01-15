import React, { useRef, useState } from 'react';
import dbType from './interface';
import './Main.css';
import Pytanie from './components/pytanie';
import pytaniaDb from './pytania.json'
import Start from './components/start';
import End from './components/end';

function Main() {

  const [stage, setStage] = useState(0)
  const scoreRef = useRef(0)

  const handleStage = () => { // change stage of the game
    if (stage < 2) setStage((prevStage) => { return prevStage + 1 })
    else {
      setStage(0)
      scoreRef.current = 0 // set score to 0 before new game
    }
  };

  const handleScore = () => { // score count 
    scoreRef.current++
  };
  let quizSize = 25
  let questionPool: dbType[] = []
  let rounds = pytaniaDb.db.length < quizSize ? pytaniaDb.db.length : quizSize // setting number of questions

  console.log(pytaniaDb)

  if (stage === 1) {
    let rng = 0, safety = 0
    do { // random questions in random sequence from "db"
      rng = Math.floor(Math.random() * pytaniaDb.db.length)
      if (!questionPool.includes(pytaniaDb.db[rng])) questionPool.push(pytaniaDb.db[rng])
      safety++
    }
    while (questionPool.length < rounds && safety < 1000)
  }




  return (
    <div className="Main">
      <div className="Main-body">
        {
          stage === 0 ? <Start handleStage={handleStage}/>
            : stage === 1 ? <Pytanie 
                              db={questionPool} 
                              handleStage={handleStage} 
                              rounds={rounds} 
                              handleScore={handleScore} 
                            />
              : stage === 2 ? <End 
                                handleStage={handleStage}
                                score={scoreRef.current}
                                maxScore={rounds}
                              />
                : ''
        }
      </div>
    </div>
  );
}

export default Main;
