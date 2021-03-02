/* eslint-disable no-alert */
import React from 'react';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Error from '../../components/Error/Error';
import { getCountIntegersDivisebleBy3 } from '../../utils/index';
import useAutofocus from './useAutofocus';
import styles from './styles.module.scss';

const AlertCountNumbersDivBy3 = ({ alert }) => {
  const autoFocusRef = useAutofocus();
  const formik = useFormik({
    initialValues: {
      firstValue: '',
      secondValue: '',
    },
    validationSchema: Yup.object({
      firstValue: Yup.number()
        .integer()
        .typeError('Must be a number')
        .required('Required'),
      secondValue: Yup.number()
        .integer()
        .typeError('Must be a number')
        .required('Required'),
    }),
    onSubmit: ({ firstValue, secondValue }, { resetForm }) => {
      alert(getCountIntegersDivisebleBy3(
        +firstValue, +secondValue,
      ));
      resetForm(firstValue, secondValue);
    },
  });

  const renderErrors = (field) => (
    formik.touched[field] && formik.errors[field]
      ? <Error>{formik.errors[field]}</Error>
      : null
  );

  return (
    <form className={styles.form} onSubmit={formik.handleSubmit}>
      <label className={styles.label} htmlFor="firstValue">
        First Number
        <input
          ref={autoFocusRef}
          className={styles.input}
          type="text"
          name="firstValue"
          id="firstValue"
          value={formik.values.firstValue}
          onChange={formik.handleChange}
          data-testid="firstValue"
        />
      </label>
      {renderErrors('firstValue')}
      <label className={styles.label} htmlFor="secondValue">
        Second Number
        <input
          className={styles.input}
          type="text"
          name="secondValue"
          id="secondValue"
          value={formik.values.secondValue}
          onChange={formik.handleChange}
          data-testid="secondValue"
        />
      </label>
      {renderErrors('secondValue')}
      <input
        className={styles.button}
        type="submit"
        value="Process"
      />
    </form>
  );
};

AlertCountNumbersDivBy3.defaultProps = {
  alert,
};

AlertCountNumbersDivBy3.propTypes = {
  alert: PropTypes.func,
};

export default AlertCountNumbersDivBy3;
