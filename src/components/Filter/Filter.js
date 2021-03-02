import React from 'react';
import styles from './Filter.module.css';

const Filter = ({ value, onChangeFilter }) => (
  <div className={styles.div}>
    <label className={styles.label}>
      Search contact's name
      <input
        className={styles.input}
        name="filter"
        type="text"
        value={value}
        onChange={event => onChangeFilter(event.target.value)}
      />
    </label>
  </div>
);

export default Filter;
