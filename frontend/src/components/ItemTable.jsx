const ItemTable = ({ items, onUpdate, onReduce, onProcess, showProcess }) => {
  return (
    <table border="1" cellPadding="10" style={{ width: "100%" }}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Qty</th>
          <th>Pending</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item) => (
          <tr key={item._id}>
            <td>{item.name}</td>
            <td>{item.type}</td>
            <td>{item.quantity}</td>
            <td>{item.pendingQuantity}</td>
            <td>{item.status}</td>

            <td>
              <button onClick={() => onUpdate(item._id)}>+ item</button>
              <button onClick={() => onReduce(item._id)}>- item</button>

              {showProcess && (
                <button onClick={() => onProcess(item._id)}>Process</button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ItemTable;
