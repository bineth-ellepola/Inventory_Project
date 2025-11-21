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

  return (
    <>
      <ItemTable
        items={items}
        showProcess={true}
        onProcess={processItem}
      />
    </>
  );
};

export default StoreLabels;
