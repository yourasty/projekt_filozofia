import React from "react";
import Btn from "./btn";
import img from "./img/start.png"

type prop = {
  handleStage : VoidFunction
}


function Start(props : prop) {
    return (
        <div className="Start">
          <div className='Start-img'>
          <img className='Start-img-img' alt="" src={img}></img>
        </div>
          <div className="Start-header">
            <h1>Quiz filozoficzny</h1>
          </div>
          <div className="Start-body">
            <Btn text="Start" onClick={props.handleStage}/>
          </div>
          <div className="Start-footer">
            <p>Autorzy: xxx, yyy ,zzz ,aaa, bbb, ccc</p>
          </div>
        </div>
      );

}

export default Start;