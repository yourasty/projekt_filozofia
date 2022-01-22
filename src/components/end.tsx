import React from "react";
import Btn from "./btn";
import img1 from "./img/1.jpg"
import img2 from "./img/2.jpg"
import img3 from "./img/3.jpg"
import img4 from "./img/4.jpg"

type prop = {
  handleStage : VoidFunction
  score : number
  maxScore: number
}

function End(props : prop) {
  let score = props.score
  let mScore = props.maxScore
  let pScore = (score / mScore) * 100
    return (
        <div className="End">
         <div className='End-img'>
          <img className='End-img-img' alt="" src={
            pScore < 40 ? img1 :
            pScore < 70 ? img2 :
            pScore < 91 ? img3 :
            img4
            }></img>
        </div>
          <div className="End-header">
            <h1>Twój wynik to: {score} z {mScore}</h1>
            <h2>
              {
                pScore < 40 ? "Dopiero zaczynasz swoją przygodę z filozofią? Głowa do góry, początki zawsze są trudne 🙂" :
                pScore < 70 ? "Nowicjuszem to już na pewno nie jesteś. Jeszcze trochę i dołączysz do najlepszych." :
                pScore < 91 ? "Twój wynik pokazuje, że dysponujesz solidną wiedzą filozoficzną. Tak trzymać." :
                "Możesz być z siebie dumny! Trudno Cię czymkolwiek zaskoczyć."
              }
            </h2>
          </div>
          <div className="End-body">
            <Btn text="Koniec" onClick={props.handleStage}/>
          </div>
        </div>
      );

}

export default End;