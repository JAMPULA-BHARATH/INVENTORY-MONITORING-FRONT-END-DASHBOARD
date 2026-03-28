import StatusBadge from "./StatusBadge";

function InventoryTable({ data }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Category</th>
          <th>Quantity</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.category}</td>
            <td>{item.quantity}</td>
            <td><StatusBadge quantity={item.quantity} /></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default InventoryTable;