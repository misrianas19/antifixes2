"use client";
import { useEffect, useState } from "react";
import { Clock } from "lucide-react";

type ContactRequest = {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  company: string | null;
  message: string;
  industry: string | null;
  createdAt: string;
};

export default function AdminDashboard() {
  const [requests, setRequests] = useState<ContactRequest[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/admin/inquiries")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setRequests(data);
        }
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="text-white text-center p-10">
        Loading Dashboard...
      </div>
    );
  }

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
        <Clock className="text-neon-cyan" /> Recent Inquiries
      </h2>

      <div className="glass-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-400">
            <thead className="bg-white/5 text-xs uppercase font-bold text-gray-200">
              <tr>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4">Name</th>
                <th className="px-6 py-4">Email</th>
                <th className="px-6 py-4">Phone</th>
                <th className="px-6 py-4">Industry</th>
                <th className="px-6 py-4">Message</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-white/10">
              {requests.map((req) => (
                <tr
                  key={req.id}
                  className="hover:bg-white/5 transition-colors"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    {new Date(req.createdAt).toLocaleDateString()}
                  </td>

                  <td className="px-6 py-4 font-medium text-white">
                    {req.name}
                  </td>

                  <td className="px-6 py-4 text-neon-cyan">
                    {req.email}
                  </td>

                  <td className="px-6 py-4 text-white">
                    {req.phone || "N/A"}
                  </td>

                  <td className="px-6 py-4">
                    <span className="px-2 py-1 rounded bg-white/10 text-xs border border-white/10">
                      {req.industry || "N/A"}
                    </span>
                  </td>

                  <td
                    className="px-6 py-4 max-w-xs truncate"
                    title={req.message}
                  >
                    {req.message}
                  </td>
                </tr>
              ))}

              {requests.length === 0 && (
                <tr>
                  <td
                    colSpan={6}
                    className="px-6 py-10 text-center text-gray-500"
                  >
                    No inquiries found yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
