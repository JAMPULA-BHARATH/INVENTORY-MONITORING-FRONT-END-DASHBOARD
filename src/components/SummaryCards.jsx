function SummaryCards({ data }) {
  const total = data.length;
  const lowStock = data.filter(item => item.quantity <= 10 && item.quantity > 0).length;
  const outStock = data.filter(item => item.quantity === 0).length;

  return (
    <div className="cards">
      <div className="card">Total Products: {total}</div>
      <div className="card">Low Stock: {lowStock}</div>
      <div className="card">Out of Stock: {outStock}</div>
    </div>
  );
}

export default SummaryCards;