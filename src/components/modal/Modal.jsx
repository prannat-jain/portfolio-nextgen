import React from "react";
import "./modal.scss"; // We'll define styles shortly

function Modal({ isOpen, onClose, children }) {
  // If modal is not open, return nothing
  if (!isOpen) return null;

  return (
    <>
      {/* Semi-transparent overlay */}
      <div className="modal-overlay" onClick={onClose} />
      {/* Modal content container */}
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          X
        </button>
        {/* Where the main content goes */}
        <div className="modal-body">{children}</div>
      </div>
    </>
  );
}

export default Modal;
