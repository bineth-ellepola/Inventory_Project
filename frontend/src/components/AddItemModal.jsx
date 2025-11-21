const AddItemModal = ({ isOpen, onClose, onSubmit }) => {
  if (!isOpen) return null;

  return (
    <div style={{
      position: "fixed",
      top: 0, left: 0, right: 0, bottom: 0,
      background: "rgba(0,0,0,0.5)"
    }}>
      <div style={{
        width: "400px",
        margin: "100px auto",
        background: "white",
        padding: "20px",
        borderRadius: "10px"
      }}>
        <h2>Add Item</h2>

        <form onSubmit={onSubmit}>
          <input name="name" placeholder="Name" required /><br />
          <input name="type" placeholder="Type" required /><br />
          <input name="quantity" placeholder="Quantity" type="number" required /><br />

          <button type="submit">Add</button>
          <button onClick={onClose}>Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default AddItemModal;
