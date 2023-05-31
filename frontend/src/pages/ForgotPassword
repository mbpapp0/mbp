import React, { useState } from 'react';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [resetSent, setResetSent] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform your password reset logic here, e.g., send an email to the user's email address
    // ...

    // Set the resetSent state to true to show the success message
    setResetSent(true);
  };

  return (
    <div>
      {resetSent ? (
        <p>Password reset link has been sent to your email.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Email:
            <input type="email" value={email} onChange={handleEmailChange} />
          </label>
          <button type="submit">Reset Password</button>
        </form>
      )}
    </div>
  );
};

export default ForgotPassword;
