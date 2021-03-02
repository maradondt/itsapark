import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const Error = ({ children }) => <div className={styles.error}>{children}</div>;

Error.propTypes = {
  children: PropTypes.string.isRequired,
};
export default Error;
