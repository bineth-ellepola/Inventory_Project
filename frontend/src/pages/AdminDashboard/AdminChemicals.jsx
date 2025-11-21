import { useEffect, useState } from "react";
import ItemTable from "../../components/ItemTable";
import AddItemModal from "../../components/AddItemModal";

const AdminLabels = () => {
  const [items, setItems] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  // Fetch processed label items
  const fetchItems = async () => {
    try {
      const res = await fetch("http://localhost:5001/api/chemicals/processed");
      const data = await res.json();
      setItems(data);
    } catch (error) {
      console.error("Error fetching chemicals:", error);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  // Add new label
  const addItem = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);

    await fetch("http://localhost:5001/api/chemicals/add", {
      method: "POST",
      body: JSON.stringify({
        name: form.get("name"),
        type: form.get("type"),
        quantity: Number(form.get("quantity")),
      }),
      headers: { "Content-Type": "application/json" },
    });

    setOpenModal(false);
    fetchItems();
  };

  // --------------------------
  // 🔥 UPDATE BUTTON HANDLER
  // --------------------------
  const handleUpdate = async (id) => {
    const quantity = prompt("Enter amount to ADD:");

    if (!quantity || isNaN(quantity) || quantity <= 0) return;

    await fetch(`http://localhost:5001/api/chemicals/update/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ quantity: Number(quantity) }),
    });

    fetchItems();
  };

  // --------------------------
  // 🔥 REDUCE BUTTON HANDLER
  // --------------------------
  const handleReduce = async (id) => {
    const quantity = prompt("Enter amount to REDUCE:");

    if (!quantity || isNaN(quantity) || quantity <= 0) return;

    await fetch(`http://localhost:5001/api/chemicals/reduce/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ quantity: Number(quantity) }),
    });

    fetchItems();
  };

  return (
    <>
      <button onClick={() => setOpenModal(true)}>Add Label</button>

      <AddItemModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        onSubmit={addItem}
      />

      <ItemTable
        items={items}
        showProcess={false}        // Admin sees processed items only
        onUpdate={handleUpdate}    // Pass update function
        onReduce={handleReduce}    // Pass reduce function
      />
    </>
  );
};

export default AdminChemicals;
