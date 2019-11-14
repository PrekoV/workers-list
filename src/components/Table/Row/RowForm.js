/* eslint-disable no-underscore-dangle */
import React from 'react';
import { Formik, Form, Field } from 'formik';
import validation from './validation';

export default function RowForm({ item = {}, onDelete, onSubmit, toggleIsEdit }) {
  return (
    <Formik
      initialValues={{
        name: item.name || '',
        dateAdd: new Date(item.dateAdd || null).toISOString().slice(0, 10) || '',
        position: item.position || '',
        rate: item.rate || '',
        contact: item.contact || '',
        sex: item.sex || '',
      }}
      validationSchema={validation}
      onSubmit={onSubmit}
      validateOnMount
    >
      {({ errors }) => (
        <Form className="row">
          <div className="column">
            <label htmlFor="name">Name</label>
            <Field name="name" label="name" type="text" />
            {errors.name && <div className="error">{errors.name}</div>}
          </div>
          <div className="column">
            <label htmlFor="Sex">Sex</label>
            <Field name="sex" type="text" />
            {errors.sex && <div className="error">{errors.sex}</div>}
          </div>
          <div className="column">
            <label htmlFor="Date">Date</label>
            <Field name="dateAdd" type="date" />
            {errors.dateAdd && <div className="error">{errors.dateAdd}</div>}
          </div>
          <div className="column">
            <label htmlFor="Position">Position</label>
            <Field name="position" type="text" />
            {errors.position && <div className="error">{errors.position}</div>}
          </div>
          <div className="column">
            <label htmlFor="Rate">Rate</label>
            <Field name="rate" type="text" />
            {errors.rate && <div className="error">{errors.rate}</div>}
          </div>
          <div className="column">
            <label htmlFor="Contact">Contact</label>
            <Field name="contact" type="text" />
            {errors.contact && <div className="error">{errors.contact}</div>}
          </div>

          <div className="column">
            <button className={`${Object.keys(errors).length !== 0 && 'disabled'}`} type="submit">
              save
            </button>
            {onDelete ? (
              <button type="reset" onClick={() => onDelete(item._id)}>
                delete
              </button>
            ) : (
              <button onClick={toggleIsEdit}>cancel</button>
            )}
          </div>
        </Form>
      )}
    </Formik>
  );
}
