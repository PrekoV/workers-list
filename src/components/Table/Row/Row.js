/* eslint-disable no-underscore-dangle */
/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import RowForm from './RowForm';

export default function Row({ item = {}, onDelete, onEdit, onSave, toggleIsAddNew }) {
  const [isEdit, setIsEdit] = useState(!item._id);

  const toggleIsEdit = () => setIsEdit(!isEdit);

  const onSubmit = values => {
    toggleIsEdit();
    if (!isEdit) {
      return;
    }
    onSave ? onSave(values) : onEdit(item._id, values);
  };

  return isEdit ? (
    <RowForm
      item={item}
      onSubmit={onSubmit}
      onDelete={item._id ? onDelete : null}
      toggleIsEdit={item._id ? toggleIsEdit : toggleIsAddNew}
    />
  ) : (
    <div className="row">
      <div className="column">
        <div className="label">Name</div>
        {item.name}
      </div>
      <div className="column">
        <div className="label">Date</div>
        {new Date(item.dateAdd || null).toISOString().slice(0, 10)}
      </div>
      <div className="column">
        <div className="label">Position</div>
        {item.position}
      </div>
      <div className="column">
        <div className="label">Rate</div>
        {item.rate}
      </div>
      <div className="column">
        <button onClick={toggleIsEdit}>edit</button>
        <button type="reset" onClick={() => onDelete(item._id)}>
          delete
        </button>
      </div>
    </div>
  );
}
