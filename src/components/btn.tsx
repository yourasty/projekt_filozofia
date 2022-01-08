import React from 'react';

type prop = {
    text: string,
    onClick: React.MouseEventHandler<HTMLButtonElement>
}

function Btn(props : prop) { // just a button with text
  return (
    <div><button className="Btn" onClick={props.onClick}>
      {props.text}
    </button>
    </div>
  );
}

export default Btn;
