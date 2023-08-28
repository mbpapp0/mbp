import { useState } from 'react';

export default function StartNewForm(props) {

  const restartForm = () => {
    props.setFormExists(false);
  }
  
  return(
    <div>
      <h2>Income Eligibility Form Submitted</h2>
      <button onClick={restartForm} className="button radius">Start a New Income Eligibility Application</button>
    </div>
  )
}
