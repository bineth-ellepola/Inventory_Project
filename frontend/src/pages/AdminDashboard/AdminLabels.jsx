import { useEffect, useState } from "react";
import ItemTable from "../../components/ItemTable";
import AddItemModal from "../../components/AddItemModal";

const AdminLabels = () => {
  const [items, setItems] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [search, setSearch] = useState("");

  // Fetch processed items
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

  // Add new item
  const addItem = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);

    await fetch("http://localhost:5001/api/chemicals/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: form.get("name"),
        type: form.get("type"),
        quantity: Number(form.get("quantity")),
      }),
    });

    setOpenModal(false);
    fetchItems();
  };

  // Update
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

  // Reduce
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

  // 🔍 FILTER LOGIC
  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()) ||
    item.type.toLowerCase().includes(search.toLowerCase()) ||
    item.status.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {/* TOP BAR */}
      <div style={{ display: "flex", gap: "10px", marginBottom: "15px" }}>
        <button onClick={() => setOpenModal(true)}>Add Label</button>

        <input
          type="text"
          placeholder="Search by name / type / status"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ padding: "6px", width: "250px" }}
        />
      </div>

      <AddItemModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        onSubmit={addItem}
      />

      <ItemTable
        items={filteredItems}   // 👈 IMPORTANT
        showProcess={false}
        onUpdate={handleUpdate}
        onReduce={handleReduce}
      />
    </>
  );
};

export default AdminLabels;
