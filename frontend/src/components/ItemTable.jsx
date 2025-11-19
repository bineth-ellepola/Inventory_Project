const ItemTable = ({ items, onUpdate, onReduce }) => {
  return (
    <table className="w-full border mt-4">
      <thead className="bg-gray-200">
        <tr>
          <th className="p-2">Name</th>
          <th className="p-2">Quantity</th>
          <th className="p-2">Type</th>
          <th className="p-2">Actions</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item) => (
          <tr key={item._id} className="border">
            <td className="p-2">{item.name}</td>
            <td className="p-2">{item.quantity}</td>
            <td className="p-2">{item.type}</td>
            <td className="p-2 flex gap-2">
              <button
                onClick={() => onUpdate(item._id)}
                className="bg-green-600 text-white px-3 py-1 rounded"
              >
                Add +
              </button>

              <button
                onClick={() => onReduce(item._id)}
                className="bg-red-600 text-white px-3 py-1 rounded"
              >
                Reduce -
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ItemTable;
