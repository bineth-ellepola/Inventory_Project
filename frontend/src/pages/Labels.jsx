import { useEffect, useState } from "react";
import ItemTable from "../components/ItemTable";
import AddItemModal from "../components/AddItemModal";
import "./Labels.css";

const Labels = () => {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const fetchItems = async () => {
    const res = await fetch("http://localhost:5001/api/labels/all");
    const data = await res.json();
    setItems(data);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const handleAdd = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);

    await fetch("http://localhost:5001/api/labels/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: form.get("name"),
        quantity: Number(form.get("quantity")),
        type: form.get("type"),
      }),
    });

    setOpenModal(false);
    fetchItems();
  };

  const updateQuantity = async (id) => {
    const amount = Number(prompt("Enter amount to ADD:"));
    await fetch(`http://localhost:5001/api/labels/update/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ quantity: amount }),
    });
    fetchItems();
  };

  const reduceQuantity = async (id) => {
    const amount = Number(prompt("Enter amount to REDUCE:"));
    await fetch(`http://localhost:5001/api/labels/reduce/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ quantity: amount }),
    });
    fetchItems();
  };

  return (
    <div className="page">
      <div className="top-bar">
        <input
          type="text"
          placeholder="Search item…"
          onChange={(e) => setSearch(e.target.value)}
        />

        <button onClick={() => setOpenModal(true)}>
          Add Item +
        </button>
      </div>

      <ItemTable
        items={items.filter((i) =>
          i.name.toLowerCase().includes(search.toLowerCase())
        )}
        onUpdate={updateQuantity}
        onReduce={reduceQuantity}
      />

      <AddItemModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        onSubmit={handleAdd}
      />
    </div>
  );
};

export default Labels;
