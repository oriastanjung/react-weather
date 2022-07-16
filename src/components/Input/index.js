import React from 'react';
import styles from './index.module.css';

function Input(props) {
  return (
    <div className={styles.input}>
      <input {...props} />
    </div>
    
  )
}

export default Input