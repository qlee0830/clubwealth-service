import React from "react";

const Modal = ({ toggleModal, currentOpenItem, setBlurBg }) => {
  return (
    <div className="data__modal">
      <ul className="data__modal-details">
        {/* Get some details of this item */}
        {Object.entries(currentOpenItem)
          .slice(0, 9)
          .map(([label, desc], key) => (
            <li className="data__modal-details-pair" key={key}>
              <p className="label">{label}</p> <p>{desc}</p>
            </li>
          ))}
      </ul>
      <button
        className="data__modal-close"
        onClick={() => {
          toggleModal();
          setBlurBg("data");
        }}
      >
        Close
      </button>
    </div>
  );
};

export default Modal;
