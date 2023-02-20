import React from "react";
import Item from "./Item";

const Column = ({
  table,
  name,
  handleDelete,
  toggleModal,
  setCurrentOpenItem,
  setBlurBg
}) => {
  return (
    <div className="data-column__info">
      {table.map((item, index) => {
        return (
          <div className="data-column__info-item" key={index}>
            <Item
              name={item.name}
              table={table}
              toggleModal={toggleModal}
              setCurrentOpenItem={setCurrentOpenItem}
              setBlurBg={setBlurBg}
            />
            <button
              onClick={() => handleDelete(index, name)}
              className="btn-delete"
            >
              x
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Column;
