/* eslint-disable no-alert */
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { getCountIntegersDivisebleBy3 } from '../../utils/index';

const AlertCountNumbersDivBy3 = () => {
  const formik = useFormik({
    initialValues: {
      firstValue: '',
      secondValue: '',
    },
    validationSchema: Yup.object({
      firstValue: Yup.number('Must be a number')
        .required('Required'),
      secondValue: Yup.number('Must be a number')
        .required('Required'),
    }),
    onSubmit: ({ firstValue, secondValue }) => {
      alert(getCountIntegersDivisebleBy3(
        firstValue, secondValue,
      ));
    },
  });

  const renderErrors = (field) => (
    formik.touched[field] && formik.errors[field]
      ? <div>{formik.errors[field]}</div>
      : null
  );

  return (
    <form className={} onSubmit={formik.onSubmit}>
      <label htmlFor="firstValue">
        First Number
        <input
          type="text"
          name="firstValue"
          id="firstValue"
          value={formik.values.firstValue}
          onChange={formik.handleChange}
        />
      </label>
      {renderErrors('firstValue')}
      <label htmlFor="secondValue">
        <input
          type="text"
          name="secondValue"
          id="secondValue"
          value={formik.values.secondValue}
          onChange={formik.handleChange}
        />
      </label>
      {renderErrors('secondValue')}
      <button type="submit">Process</button>
    </form>
  );
};

export default AlertCountNumbersDivBy3;