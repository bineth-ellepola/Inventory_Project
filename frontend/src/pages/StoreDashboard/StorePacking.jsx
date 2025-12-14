import { useEffect, useState } from "react";
import ItemTable from "../../components/ItemTable";

const StoreLabels = () => {
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const res = await fetch("http://localhost:5001/api/packingmaterials/pending");
    setItems(await res.json());
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const processItem = async (id) => {
    await fetch(`http://localhost:5001/api/packingmaterials/process/${id}`, {
      method: "PATCH"
    });
    fetchItems();
  };

   // --------------------------
  // 🔥 UPDATE BUTTON HANDLER
  // --------------------------
  const handleUpdate = async (id) => {
    const quantity = prompt("Enter amount to ADD:");

    if (!quantity || isNaN(quantity) || quantity <= 0) return;

    await fetch(`http://localhost:5001/api/packingmaterials/update/${id}`, {
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

    await fetch(`http://localhost:5001/api/packingmaterials/reduce/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ quantity: Number(quantity) }),
    });

    fetchItems();
  };
  return (
    <>
      <ItemTable
        items={items}
        showProcess={true}
        onProcess={processItem}
        onUpdate={handleUpdate}    // Pass update function
        onReduce={handleReduce}  
      />
    </>
  );
};

export default StoreLabels;
