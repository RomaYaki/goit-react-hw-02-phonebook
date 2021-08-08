import React from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.css';

export const Filter = ({ value, onFilter }) => {
  return (
    <input
      type="text"
      value={value}
      placeholder="Filter"
      onChange={onFilter}
      className={styles.filter}
    />
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
};


