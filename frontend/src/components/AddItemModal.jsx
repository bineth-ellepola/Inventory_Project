import React from "react";
import "./AddItemModal.css";

const AddItemModal = ({ isOpen, onClose, onSubmit }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-bg">
      <div className="modal-box">
        <h2>Add New Item</h2>

        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Item Name"
            required
          />

          <input
            type="number"
            name="quantity"
            placeholder="Quantity"
            required
          />
          <input
            type="text"
            name="type"
            placeholder="Item Type"
            required
          />

          <div className="btn-group">
            <button type="button" className="btn-cancel" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn-save">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItemModal;
