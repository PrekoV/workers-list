/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import Row from './Row';
import API from '../../api';

export default function Table() {
  const [items, setItems] = useState([]);
  const [isAddNew, setiIsAddNew] = useState(false);

  const toggleIsAddNew = () => setiIsAddNew(!isAddNew);

  const onDelete = id => {
    API.delete(`/workers/${id}`).then(res => {
      setItems([...items.filter(item => item._id !== id)]);
    });
  };

  const onEdit = (id, values) => {
    API.put(`/workers/${id}`, values).then(res => {
      const currentItems = items.map(item => {
        let current = { ...item };
        if (current._id === id) {
          current = { ...res.data };
        }
        return current;
      });
      setItems(currentItems);
    });
  };

  const onSave = values => {
    const currentItems = [...items];

    toggleIsAddNew();
    API.post('/workers', values).then(res => {
      currentItems.push(res.data);
      setItems(currentItems);
    });
  };

  useEffect(() => {
    API.get('/workers').then(res => setItems(res.data));
  }, []);

  return (
    <div className="table-wrapper">
      <div className="table">
        {items.map(item => (
          <Row item={item} onDelete={onDelete} onEdit={onEdit} />
        ))}
      </div>
      {isAddNew ? (
        <div className="table">
          <Row onSave={onSave} toggleIsAddNew={toggleIsAddNew} />
        </div>
      ) : (
        <button className="add-button" onClick={toggleIsAddNew}>
          add
        </button>
      )}
    </div>
  );
}
