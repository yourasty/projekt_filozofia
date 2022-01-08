import React from "react";
import Btn from "./btn";
import img from "./img/end.png"

type prop = {
  handleStage : VoidFunction
  score : number
  maxScore: number
}

function End(props : prop) {
    return (
        <div className="End">
         <div className='End-img'>
          <img className='End-img-img' alt="" src={img}></img>
        </div>
          <div className="End-header">
            <h1>Poprawne odpowiedzi: {props.score} z {props.maxScore}</h1>
          </div>
          <div className="End-body">
            <Btn text="Koniec" onClick={props.handleStage}/>
          </div>
        </div>
      );

}

export default End;