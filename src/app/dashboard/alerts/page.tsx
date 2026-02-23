"use client";

import { useState } from "react";

export default function AlertsPage() {
  const [smsEnabled, setSmsEnabled] = useState(true);
  const [emailEnabled, setEmailEnabled] = useState(true);
  const [pushEnabled, setPushEnabled] = useState(false);
  const [alertUnknown, setAlertUnknown] = useState(true);
  const [alertRepeat, setAlertRepeat] = useState(true);
  const [quietHours, setQuietHours] = useState(false);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Alert Settings</h1>
        <p className="text-gray-600 mt-1">Configure how you want to be notified</p>
      </div>

      {/* Notification Methods */}
      <div className="bg-white rounded-2xl shadow-sm p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Notification Methods</h2>
        <div className="space-y-4">
          <label className="flex items-center justify-between p-4 rounded-xl border border-gray-100 hover:border-[#6EC1E4] transition-colors cursor-pointer">
            <div className="flex items-center gap-4">
              <span className="text-2xl">📱</span>
              <div>
                <div className="font-medium text-gray-900">SMS Alerts</div>
                <div className="text-sm text-gray-500">Get text messages for violations</div>
              </div>
            </div>
            <button 
              onClick={() => setSmsEnabled(!smsEnabled)}
              className={`w-12 h-7 rounded-full transition-colors ${smsEnabled ? 'bg-[#6EC1E4]' : 'bg-gray-200'}`}
            >
              <div className={`w-5 h-5 bg-white rounded-full shadow-sm transition-transform ${smsEnabled ? 'translate-x-6' : 'translate-x-1'}`} />
            </button>
          </label>

          <label className="flex items-center justify-between p-4 rounded-xl border border-gray-100 hover:border-[#6EC1E4] transition-colors cursor-pointer">
            <div className="flex items-center gap-4">
              <span className="text-2xl">📧</span>
              <div>
                <div className="font-medium text-gray-900">Email Alerts</div>
                <div className="text-sm text-gray-500">Receive email notifications</div>
              </div>
            </div>
            <button 
              onClick={() => setEmailEnabled(!emailEnabled)}
              className={`w-12 h-7 rounded-full transition-colors ${emailEnabled ? 'bg-[#6EC1E4]' : 'bg-gray-200'}`}
            >
              <div className={`w-5 h-5 bg-white rounded-full shadow-sm transition-transform ${emailEnabled ? 'translate-x-6' : 'translate-x-1'}`} />
            </button>
          </label>

          <label className="flex items-center justify-between p-4 rounded-xl border border-gray-100 hover:border-[#6EC1E4] transition-colors cursor-pointer">
            <div className="flex items-center gap-4">
              <span className="text-2xl">🔔</span>
              <div>
                <div className="font-medium text-gray-900">Push Notifications</div>
                <div className="text-sm text-gray-500">Browser push notifications</div>
              </div>
            </div>
            <button 
              onClick={() => setPushEnabled(!pushEnabled)}
              className={`w-12 h-7 rounded-full transition-colors ${pushEnabled ? 'bg-[#6EC1E4]' : 'bg-gray-200'}`}
            >
              <div className={`w-5 h-5 bg-white rounded-full shadow-sm transition-transform ${pushEnabled ? 'translate-x-6' : 'translate-x-1'}`} />
            </button>
          </label>
        </div>
      </div>

      {/* Alert Conditions */}
      <div className="bg-white rounded-2xl shadow-sm p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Alert Conditions</h2>
        <div className="space-y-4">
          <label className="flex items-center justify-between p-4 rounded-xl border border-gray-100 hover:border-[#6EC1E4] transition-colors cursor-pointer">
            <div>
              <div className="font-medium text-gray-900">All unknown vehicles</div>
              <div className="text-sm text-gray-500">Alert immediately for any unrecognized plate</div>
            </div>
            <button 
              onClick={() => setAlertUnknown(!alertUnknown)}
              className={`w-12 h-7 rounded-full transition-colors ${alertUnknown ? 'bg-[#6EC1E4]' : 'bg-gray-200'}`}
            >
              <div className={`w-5 h-5 bg-white rounded-full shadow-sm transition-transform ${alertUnknown ? 'translate-x-6' : 'translate-x-1'}`} />
            </button>
          </label>

          <label className="flex items-center justify-between p-4 rounded-xl border border-gray-100 hover:border-[#6EC1E4] transition-colors cursor-pointer">
            <div>
              <div className="font-medium text-gray-900">Repeat offenders only</div>
              <div className="text-sm text-gray-500">Only alert for plates seen 2+ times</div>
            </div>
            <button 
              onClick={() => setAlertRepeat(!alertRepeat)}
              className={`w-12 h-7 rounded-full transition-colors ${alertRepeat ? 'bg-[#6EC1E4]' : 'bg-gray-200'}`}
            >
              <div className={`w-5 h-5 bg-white rounded-full shadow-sm transition-transform ${alertRepeat ? 'translate-x-6' : 'translate-x-1'}`} />
            </button>
          </label>

          <label className="flex items-center justify-between p-4 rounded-xl border border-gray-100 hover:border-[#6EC1E4] transition-colors cursor-pointer">
            <div>
              <div className="font-medium text-gray-900">Quiet hours</div>
              <div className="text-sm text-gray-500">Disable alerts between 10PM - 8AM</div>
            </div>
            <button 
              onClick={() => setQuietHours(!quietHours)}
              className={`w-12 h-7 rounded-full transition-colors ${quietHours ? 'bg-[#6EC1E4]' : 'bg-gray-200'}`}
            >
              <div className={`w-5 h-5 bg-white rounded-full shadow-sm transition-transform ${quietHours ? 'translate-x-6' : 'translate-x-1'}`} />
            </button>
          </label>
        </div>
      </div>

      {/* Test Alert */}
      <div className="bg-[#F8FBFD] rounded-2xl p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-2">Test Your Setup</h2>
        <p className="text-gray-600 mb-4">Send a test notification to verify everything is working</p>
        <button className="px-6 py-3 rounded-xl bg-[#6EC1E4] text-white hover:bg-[#5AB3D8] transition-colors">
          Send Test Notification
        </button>
      </div>
    </div>
  );
}
