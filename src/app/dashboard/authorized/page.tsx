"use client";

import { useState } from "react";

const mockPlates = [
  { id: 1, plate: "ABC-1234", name: "Mom's Camry", lastSeen: "Today at 3:15 PM" },
  { id: 2, plate: "DEF-9012", name: "Guest Parking", lastSeen: "Today at 9:15 AM" },
  { id: 3, plate: "GHI-3456", name: "Dad's Truck", lastSeen: "Today at 8:30 AM" },
  { id: 4, plate: "JKL-7890", name: "Cleaning Service", lastSeen: "2 weeks ago" },
  { id: 5, plate: "MNO-1234", name: "Amazon Delivery", lastSeen: "1 week ago" },
];

export default function AuthorizedPage() {
  const [plates, setPlates] = useState(mockPlates);
  const [showAdd, setShowAdd] = useState(false);
  const [newPlate, setNewPlate] = useState("");
  const [newName, setNewName] = useState("");

  const handleAdd = () => {
    if (newPlate) {
      setPlates([...plates, {
        id: plates.length + 1,
        plate: newPlate.toUpperCase(),
        name: newName || "Unnamed",
        lastSeen: "Never"
      }]);
      setNewPlate("");
      setNewName("");
      setShowAdd(false);
    }
  };

  const handleRemove = (id: number) => {
    setPlates(plates.filter(p => p.id !== id));
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Authorized Vehicles</h1>
          <p className="text-gray-600 mt-1">{plates.length} plates registered</p>
        </div>
        <button 
          onClick={() => setShowAdd(true)}
          className="px-4 py-2 rounded-xl bg-[#6EC1E4] text-white hover:bg-[#5AB3D8] transition-colors"
        >
          + Add Plate
        </button>
      </div>

      {/* Plates Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {plates.map((plate) => (
          <div key={plate.id} className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="w-14 h-10 bg-gray-100 rounded-lg flex items-center justify-center font-mono text-sm font-bold text-gray-700 border-2 border-gray-200">
                {plate.plate.slice(0, 3)}
              </div>
              <button 
                onClick={() => handleRemove(plate.id)}
                className="text-gray-400 hover:text-[#FF6F61] transition-colors"
              >
                ✕
              </button>
            </div>
            <div className="font-mono font-medium text-gray-900 text-lg mb-1">{plate.plate}</div>
            <div className="text-gray-600 mb-3">{plate.name}</div>
            <div className="text-sm text-gray-400">Last seen: {plate.lastSeen}</div>
            <div className="mt-4 pt-4 border-t border-gray-100 flex gap-2">
              <button className="flex-1 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg transition-colors">
                Edit
              </button>
              <button className="flex-1 py-2 text-sm text-[#6EC1E4] hover:bg-[#6EC1E4]/5 rounded-lg transition-colors">
                View Activity
              </button>
            </div>
          </div>
        ))}

        {/* Add New Card */}
        <button 
          onClick={() => setShowAdd(true)}
          className="bg-white rounded-2xl shadow-sm p-6 border-2 border-dashed border-gray-200 hover:border-[#6EC1E4] transition-colors flex flex-col items-center justify-center min-h-[200px]"
        >
          <div className="text-4xl mb-2">+</div>
          <div className="text-gray-600 font-medium">Add new plate</div>
        </button>
      </div>

      {/* Add Modal */}
      {showAdd && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={() => setShowAdd(false)}>
          <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl" onClick={e => e.stopPropagation()}>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Add Authorized Plate</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">License Plate</label>
                <input 
                  type="text" 
                  value={newPlate}
                  onChange={(e) => setNewPlate(e.target.value)}
                  placeholder="ABC-1234" 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#6EC1E4] focus:ring-2 focus:ring-[#6EC1E4]/20 outline-none uppercase font-mono"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nickname</label>
                <input 
                  type="text" 
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  placeholder="e.g., Mom's Camry" 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#6EC1E4] focus:ring-2 focus:ring-[#6EC1E4]/20 outline-none"
                />
              </div>
              <div className="flex gap-3 pt-4">
                <button 
                  onClick={() => setShowAdd(false)}
                  className="flex-1 py-3 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button 
                  onClick={handleAdd}
                  className="flex-1 py-3 rounded-xl bg-[#6EC1E4] text-white hover:bg-[#5AB3D8] transition-colors"
                >
                  Add Plate
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
