import React from "react";
import Btn from "./btn";
import img from "./img/img.png"

type prop = {
  handleStage: VoidFunction
}


function Start(props: prop) {
  return (
    <div className="Start">
      <div className='Start-img'>
        <img className='Start-img-img' alt="" src={img}></img>
      </div>
      <div className="Start-header">
        <h1>Quiz filozoficzny</h1>
      </div>
      <div className="Start-body">
        <Btn text="Start" onClick={props.handleStage} />
      </div>
      <div className="Start-footer">
        <p>Autorzy:<br />
          Sara Chybalska, Urban , Owczarek Damian,<br />
          Gotkowicz Przemysław, Wojciech Orłowski, Piotr Lipowski
        </p>
      </div>
    </div>
  );

}

export default Start;