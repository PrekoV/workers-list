import React, { useState } from "react";
import { Formik, Form, Field } from "formik";

export default function Row({ item={}, onDelete, onEdit, onSave }) {
  const [isEdit, setIsEdit] = useState(!item.id);

  const toggleIsEdit = () => setIsEdit(!isEdit);

  const onSubmit = (values) => {
    toggleIsEdit();
    if (!isEdit) {
      return;
    }
    onSave ? onSave(values) :
    onEdit(item.id, values);
  }

  return (
    <div>
      <Formik
        initialValues={{
          name: item.name || "",
          date: item.date || "",
          position: item.position || "",
          rate: item.rate || ""
        }}
        onSubmit={onSubmit}
      >
        {props => {
          return (
            <Form>
              <tr className="row">
                <td className="name">
                  {isEdit ? <Field name="name" type="text" /> : item.name}
                </td>
                <td className="date">
                  {isEdit ? <Field name="date" type="text" /> : item.date}
                </td>
                <td className="position">
                  {isEdit ? (
                    <Field name="position" type="text" />
                  ) : (
                    item.position
                  )}
                </td>
                <td className="rate">
                  {isEdit ? <Field name="rate" type="text" /> : item.rate}
                </td>
                <td className="action-buttons">
                  <button type="submit">{isEdit ? "save" : "edit"}</button>
                  <button type="reset" onClick={() => onDelete(item.id)}>
                    delete
                  </button>
                </td>
              </tr>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
