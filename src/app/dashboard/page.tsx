"use client";

import { useState } from "react";

const mockActivity = [
  { id: 1, plate: "ABC-1234", status: "authorized", name: "Mom's Camry", time: "2:34 PM", duration: "12 min" },
  { id: 2, plate: "XYZ-5678", status: "unknown", name: "Unknown", time: "11:47 AM", duration: "47 min" },
  { id: 3, plate: "DEF-9012", status: "authorized", name: "Guest Parking", time: "9:15 AM", duration: "2 hr" },
  { id: 4, plate: "GHI-3456", status: "authorized", name: "Dad's Truck", time: "8:30 AM", duration: "4 hr" },
  { id: 5, plate: "JKL-7890", status: "unknown", name: "Unknown", time: "Yesterday", duration: "23 min" },
];

const mockAuthorized = [
  { plate: "ABC-1234", name: "Mom's Camry", lastSeen: "Today at 3:15 PM" },
  { plate: "DEF-9012", name: "Guest Parking", lastSeen: "Today at 9:15 AM" },
  { plate: "GHI-3456", name: "Dad's Truck", lastSeen: "Today at 8:30 AM" },
];

export default function DashboardPage() {
  const [showAddPlate, setShowAddPlate] = useState(false);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1">Your driveway is all yours</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors">
            Test Camera
          </button>
          <button 
            onClick={() => setShowAddPlate(true)}
            className="px-4 py-2 rounded-xl bg-[#6EC1E4] text-white hover:bg-[#5AB3D8] transition-colors"
          >
            + Add Plate
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-6 rounded-2xl bg-white shadow-sm">
          <p className="text-gray-500 text-sm mb-1">Authorized Vehicles</p>
          <p className="text-3xl font-bold text-gray-900">{mockAuthorized.length}</p>
        </div>
        <div className="p-6 rounded-2xl bg-white shadow-sm">
          <p className="text-gray-500 text-sm mb-1">Visits Today</p>
          <p className="text-3xl font-bold text-gray-900">4</p>
        </div>
        <div className="p-6 rounded-2xl bg-white shadow-sm">
          <p className="text-gray-500 text-sm mb-1">Unknown Today</p>
          <p className="text-3xl font-bold text-[#FF6F61]">1</p>
        </div>
        <div className="p-6 rounded-2xl bg-white shadow-sm">
          <p className="text-gray-500 text-sm mb-1">Camera Status</p>
          <p className="text-lg font-semibold text-[#10B981] flex items-center gap-2">
            <span className="w-2 h-2 bg-[#10B981] rounded-full animate-pulse"></span>
            Online
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Recent Activity */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl shadow-sm">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-xl font-bold text-gray-900">Recent Activity</h2>
              <p className="text-gray-500 text-sm">Last 24 hours</p>
            </div>
            <div className="p-6 space-y-4">
              {mockActivity.map((item) => (
                <div key={item.id} className="flex items-center justify-between py-3 border-b border-gray-50 last:border-0">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-mono text-sm font-bold ${
                      item.status === 'authorized' ? 'bg-[#10B981]/10 text-[#10B981]' : 'bg-[#FF6F61]/10 text-[#FF6F61]'
                    }`}>
                      {item.plate.slice(0, 3)}
                    </div>
                    <div>
                      <div className="font-mono font-medium text-gray-900">{item.plate}</div>
                      <div className="text-sm text-gray-500">{item.name}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className={`inline-flex items-center px-3 py-1 rounded-lg text-xs font-medium ${
                      item.status === 'authorized' 
                        ? 'bg-[#10B981]/10 text-[#10B981]' 
                        : 'bg-[#FF6F61]/10 text-[#FF6F61]'
                    }`}>
                      {item.status === 'authorized' ? '✓ Authorized' : '⚠️ Unknown'}
                    </span>
                    <div className="text-xs text-gray-400 mt-1">{item.time} • {item.duration}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Authorized Plates */}
        <div>
          <div className="bg-white rounded-2xl shadow-sm">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-xl font-bold text-gray-900">Authorized</h2>
              <p className="text-gray-500 text-sm">{mockAuthorized.length} plates</p>
            </div>
            <div className="p-6 space-y-4">
              {mockAuthorized.map((item) => (
                <div key={item.plate} className="p-4 rounded-xl border border-gray-100 hover:border-[#6EC1E4] transition-colors">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-mono font-medium text-gray-900">{item.plate}</div>
                      <div className="text-sm text-gray-500">{item.name}</div>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600">✕</button>
                  </div>
                  <div className="text-xs text-gray-400 mt-2">Last seen: {item.lastSeen}</div>
                </div>
              ))}
              <button 
                onClick={() => setShowAddPlate(true)}
                className="w-full py-3 rounded-xl border-2 border-dashed border-gray-200 text-gray-500 hover:border-[#6EC1E4] hover:text-[#6EC1E4] transition-colors"
              >
                + Add authorized plate
              </button>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-6 p-6 rounded-2xl bg-[#FFF5F3] border border-[#FF6F61]/20">
            <h3 className="font-semibold text-gray-900 mb-2">⚠️ 1 unknown visitor today</h3>
            <p className="text-sm text-gray-600 mb-4">Plate XYZ-5678 was parked for 47 minutes</p>
            <div className="flex gap-2">
              <button className="flex-1 py-2 px-4 rounded-lg bg-white text-gray-700 text-sm hover:bg-gray-50 transition-colors">
                Ignore
              </button>
              <button className="flex-1 py-2 px-4 rounded-lg bg-[#6EC1E4] text-white text-sm hover:bg-[#5AB3D8] transition-colors">
                Add to List
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Add Plate Modal */}
      {showAddPlate && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={() => setShowAddPlate(false)}>
          <div className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl" onClick={e => e.stopPropagation()}>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Add Authorized Plate</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">License Plate</label>
                <input 
                  type="text" 
                  placeholder="ABC-1234" 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#6EC1E4] focus:ring-2 focus:ring-[#6EC1E4]/20 outline-none uppercase font-mono"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nickname (optional)</label>
                <input 
                  type="text" 
                  placeholder="Mom's Camry" 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#6EC1E4] focus:ring-2 focus:ring-[#6EC1E4]/20 outline-none"
                />
              </div>
              <div className="flex gap-3 pt-4">
                <button 
                  onClick={() => setShowAddPlate(false)}
                  className="flex-1 py-3 rounded-xl border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button className="flex-1 py-3 rounded-xl bg-[#6EC1E4] text-white hover:bg-[#5AB3D8] transition-colors">
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
