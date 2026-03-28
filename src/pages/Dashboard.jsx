import { useEffect, useState } from "react";
import inventoryData from "../data/inventoryData";
import SummaryCards from "../components/SummaryCards";
import InventoryTable from "../components/InventoryTable";
import Filters from "../components/Filters";
import Loader from "../components/Loader";
function Dashboard() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setData(inventoryData);
      setLoading(false);
    }, 1000);
  }, []);

  const filteredData = data.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <Loader />;

  return (
    <div className="container">
      <SummaryCards data={filteredData} />
      <Filters search={search} setSearch={setSearch} />
      <InventoryTable data={filteredData} />
    </div>
  );
}

export default Dashboard;