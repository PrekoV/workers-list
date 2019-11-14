/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Row from './Row';
import actions from '../../store/actions/workers';

function Table({ workers = [], ...props }) {
  // const [items, setItems] = useState([]);
  const [isAddNew, setiIsAddNew] = useState(false);

  const toggleIsAddNew = () => setiIsAddNew(!isAddNew);

  const onDelete = id => {
    props.deleteWorker(id);
  };

  const onEdit = (id, values) => {
    props.editWorker({ ...values, id });
  };

  const onSave = values => {
    toggleIsAddNew();
    props.addWorker(values);
  };

  useEffect(() => {
    props.getWorkers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(workers);
  return (
    <div className="table-wrapper">
      <div className="table">
        {workers.map(item => (
          <Row key={item._id} item={item} onDelete={onDelete} onEdit={onEdit} />
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

const mapStateToProps = state => {
  console.log(state);
  return {
    workers: state.workersReducer.workers,
  };
};

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Table);
