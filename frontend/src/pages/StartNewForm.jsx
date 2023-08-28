import { useState } from 'react';

export default function StartNewForm(props) {

  const restartForm = () => {
    props.setFormExists(false);
  }
  
  return(
    <div>
      <button onClick={restartForm} className="button radius">Start New Form</button>
    </div>
  )
}
