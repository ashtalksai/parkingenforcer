"use client";

import { useState } from "react";

const mockViolations = [
  { id: 1, plate: "XYZ-5678", time: "Today at 11:47 AM", duration: "47 min", status: "unknown", image: null },
  { id: 2, plate: "JKL-7890", time: "Yesterday at 3:22 PM", duration: "23 min", status: "unknown", image: null },
  { id: 3, plate: "MNO-1234", time: "Feb 21 at 9:15 AM", duration: "1 hr 15 min", status: "repeat", image: null },
  { id: 4, plate: "MNO-1234", time: "Feb 18 at 2:30 PM", duration: "35 min", status: "repeat", image: null },
  { id: 5, plate: "PQR-5678", time: "Feb 15 at 6:45 PM", duration: "2 hr", status: "resolved", image: null },
];

export default function ViolationsPage() {
  const [filter, setFilter] = useState<string>("all");

  const filteredViolations = mockViolations.filter((v) => {
    if (filter === "all") return true;
    return v.status === filter;
  });

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Violations</h1>
          <p className="text-gray-600 mt-1">Unauthorized parking incidents</p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex gap-2">
        {["all", "unknown", "repeat", "resolved"].map((status) => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
              filter === status
                ? "bg-[#6EC1E4] text-white"
                : "bg-white text-gray-600 hover:bg-gray-50"
            }`}
          >
            {status === "all" ? "All" : status.charAt(0).toUpperCase() + status.slice(1)}
          </button>
        ))}
      </div>

      {/* Violations List */}
      <div className="bg-white rounded-2xl shadow-sm">
        <div className="divide-y divide-gray-100">
          {filteredViolations.map((violation) => (
            <div key={violation.id} className="p-6 hover:bg-gray-50 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-14 bg-gray-200 rounded-lg flex items-center justify-center text-gray-400">
                    📷
                  </div>
                  <div>
                    <div className="font-mono font-medium text-gray-900 text-lg">{violation.plate}</div>
                    <div className="text-sm text-gray-500">{violation.time}</div>
                    <div className="text-sm text-gray-400">Parked for {violation.duration}</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className={`inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium ${
                    violation.status === 'unknown' ? 'bg-[#FBBF24]/10 text-[#FBBF24]' :
                    violation.status === 'repeat' ? 'bg-[#FF6F61]/10 text-[#FF6F61]' :
                    'bg-[#10B981]/10 text-[#10B981]'
                  }`}>
                    {violation.status === 'unknown' ? 'First time' :
                     violation.status === 'repeat' ? '🔴 Repeat Offender' :
                     '✓ Resolved'}
                  </span>
                  <div className="flex gap-2">
                    <button className="px-3 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-100 transition-colors">
                      Add to List
                    </button>
                    <button className="px-3 py-2 rounded-lg text-sm text-[#FF6F61] hover:bg-[#FF6F61]/10 transition-colors">
                      Flag
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Empty State */}
      {filteredViolations.length === 0 && (
        <div className="text-center py-16">
          <div className="text-5xl mb-4">🎉</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No violations found</h3>
          <p className="text-gray-600">Your driveway is all yours!</p>
        </div>
      )}
    </div>
  );
}
