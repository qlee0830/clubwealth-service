import React from "react";

const Item = ({ name, table, toggleModal, setCurrentOpenItem, setBlurBg }) => {
  const foundItem = () => {
    return table.find((item) => item.name === name);
  };

  return (
    <p
      onClick={() => {
        setCurrentOpenItem(foundItem);
        toggleModal();
        setBlurBg("data__blur");
      }}
      className="data-column__info-item__name"
    >
      {name}
    </p>
  );
};

export default Item;
