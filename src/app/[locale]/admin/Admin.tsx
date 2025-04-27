// app/admin/page.tsx
import AdminTable from "./AdminTable";

const Admin = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <AdminTable />
    </div>
  );
};

export default Admin;
