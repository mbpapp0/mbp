import { useState } from 'react';

export default function StartNewForm(props) {

  const restartForm = () => {
    props.setFormExists(false);
  }
  
  return(
    <div>
      {props.FormExists && <h3>It worked</h3> }
      <button onClick={restartForm} className="button radius">Start New Form</button>
    </div>
  )
}
