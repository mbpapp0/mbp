import { useState } from 'react';

export default function StartNewForm() {
  const [newForm, setNewForm] = useState(false);

  const restartForm = () => {
    setNewForm(true);
  }
  
  return(
    <div>
      {newForm && <h3>It worked</h3> }
      <button onClick={restartForm} className="button radius">Start New Form</button>
    </div>
  )
}
