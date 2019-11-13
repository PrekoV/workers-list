import React, { useState } from 'react';
import Row from './Row';

export default function Table() {
  const [items, setItems] = useState([
    {
      id: 2,
      name: 'name1',
      date: '11/11/11',
      rate: 2000,
      position: 'developer',
    },
    {
      id: 28,
      name: 'name12',
      date: '02/02/02',
      rate: 27000,
      position: 'team lead',
    },
    {
      id: 3,
      name: 'name1424',
      date: '10/6/2',
      rate: 5000,
      position: 'developer php',
    },
    {
      id: 25,
      name: 'name11212',
      date: '11/10/01',
      rate: 23000,
      position: 'developer Js',
    },
  ]);
  const [isAddNew, setiIsAddNew] = useState(false);

  const toggleIsAddNew = () => setiIsAddNew(!isAddNew);

  const onDelete = id => {
    setItems([...items.filter(item => item.id !== id)]);
  };

  const onEdit = (id, values) => {
    const currentValues = { ...values };
    const currentItems = [...items];

    const currentItem = currentItems.find(item => item.id === id);
    if (currentItem) {
      for (const key in currentItem) {
        if (Object.prototype.hasOwnProperty.call(currentValues, key)) {
          currentItem[key] = values[key];
        }
      }
    } else {
      currentItems.push({ ...values, id: Math.random() });
    }

    setItems(currentItems);
  };

  const onSave = values => {
    const currentItems = [...items];
    currentItems.push({ ...values, id: Math.random() });
    setItems(currentItems);
    toggleIsAddNew();
  };

  return (
    <>
      <table>
        {items.map(item => (
          <Row item={item} onDelete={onDelete} onEdit={onEdit} />
        ))}
        {isAddNew ? <Row onSave={onSave} /> : <button onClick={toggleIsAddNew}>add</button>}
      </table>
    </>
  );
}
