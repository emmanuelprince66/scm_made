// components/AdminTable.tsx
"use client"; // This is needed for interactivity

import { useEffect, useState } from "react";

interface Submission {
  _id: string;
  // Add other fields from your data here
  [key: string]: any; // This allows for dynamic properties
}

const AdminTable = () => {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/get-submissions"); // Adjust this to your API route
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setSubmissions(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`/api/submissions/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to delete");
      }

      // Remove the deleted item from state
      setSubmissions(submissions.filter((item) => item._id !== id));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to delete");
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (submissions.length === 0) return <div>No data available</div>;

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="bg-gray-100">
            {Object.keys(submissions[0]).map((key) => (
              <th key={key} className="py-2 px-4 border-b text-left">
                {key}
              </th>
            ))}
            <th className="py-2 px-4 border-b text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {submissions.map((submission) => (
            <tr key={submission._id} className="hover:bg-gray-50">
              {Object.keys(submission).map((key) => (
                <td
                  key={`${submission._id}-${key}`}
                  className="py-2 px-4 border-b"
                >
                  {typeof submission[key] === "object"
                    ? JSON.stringify(submission[key])
                    : submission[key]}
                </td>
              ))}
              <td className="py-2 px-4 border-b">
                <button
                  onClick={() => handleDelete(submission._id)}
                  className="bg-red-500 hover:bg-red-700 text-white py-1 px-3 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminTable;
