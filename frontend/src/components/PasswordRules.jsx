import React from 'react';

const PasswordRules = () => {
  const styles = {
    container: {
      background: 'black',
      color: 'white',
      padding: '0.625rem',
    },
  };

  return (
    <div style={styles.container}>
      <h3>Strong Password Rules:</h3>
      <ul>
        <li>Password must be at least 8 characters long.</li>
        <li>Password must contain at least one uppercase letter.</li>
        <li>Password must contain at least one lowercase letter.</li>
        <li>Password must contain at least one digit.</li>
        <li>Password must contain at least one special character (e.g., @, #, $).</li>
      </ul>
    </div>
  );
};

export default PasswordRules;
