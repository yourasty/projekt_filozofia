import React, { useState } from 'react';
import dbType from './interface';
import './Main.css';
import Pytanie from './pytanie/pytanie';
import pytaniaDb from './pytania.json'

function Main() {

  const [reset, setReset] = useState(false)

  const handleReset = () => { // state change to cause rerender to get new question pool
    setReset(!reset)
  };

  let questionPool : dbType[] = []
  let rounds = pytaniaDb.db.length < 5 ?  pytaniaDb.db.length : 5 // setting number of questions
  let rng = 0, safety = 0
  do{ // random questions in random sequence from "db"
    rng = Math.floor(Math.random() * pytaniaDb.db.length)
    if (!questionPool.includes(pytaniaDb.db[rng])) questionPool.push(pytaniaDb.db[rng])
    safety++
  }
  while(questionPool.length < rounds && safety < 1000)



  return (
    <div className="Main">
      <div className="Main-body">
        <Pytanie db={questionPool} reset={handleReset} rounds={rounds}/>
      </div>
    </div>
  );
}

export default Main;
