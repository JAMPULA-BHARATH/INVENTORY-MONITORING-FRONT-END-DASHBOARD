function StatusBadge({ quantity }) {
  let status = "In Stock";
  let className = "green";

  if (quantity === 0) {
    status = "Out of Stock";
    className = "red";
  } else if (quantity <= 10) {
    status = "Low Stock";
    className = "yellow";
  }

  return <span className={`badge ${className}`}>{status}</span>;
}

export default StatusBadge;