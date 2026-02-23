import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#6EC1E4] rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <span className="font-bold text-xl text-gray-900">ParkingEnforcer</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">Pricing</a>
              <Link href="/login" className="text-gray-600 hover:text-gray-900 transition-colors">Log in</Link>
              <Link href="/signup">
                <button className="bg-[#6EC1E4] hover:bg-[#5AB3D8] text-white px-6 py-2 rounded-xl font-medium transition-colors">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#F8FBFD] to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-[#6EC1E4]/10 text-[#6EC1E4] text-sm font-medium mb-6">
                Works with Ring, Nest & Arlo
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Your driveway, your rules
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Turn your existing camera into a friendly parking guardian. No extra hardware needed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/signup">
                  <button className="bg-[#6EC1E4] hover:bg-[#5AB3D8] text-white px-8 py-4 rounded-xl font-medium text-lg shadow-lg shadow-[#6EC1E4]/20 transition-all hover:shadow-xl hover:-translate-y-0.5">
                    Connect Your Camera
                  </button>
                </Link>
                <button className="px-8 py-4 rounded-xl font-medium text-lg border-2 border-[#6EC1E4] text-[#6EC1E4] hover:bg-[#6EC1E4]/5 transition-colors">
                  See How It Works
                </button>
              </div>
              <p className="mt-6 text-gray-500 text-sm">Protecting 2,400+ driveways</p>
            </div>
            <div className="relative">
              <div className="bg-[#F8FBFD] rounded-3xl p-8 shadow-xl shadow-[#6EC1E4]/10">
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm font-medium text-gray-500">Recent Activity</span>
                    <span className="flex items-center gap-2 text-sm text-[#10B981]">
                      <span className="w-2 h-2 bg-[#10B981] rounded-full animate-pulse"></span>
                      Camera Online
                    </span>
                  </div>
                  <div className="space-y-4">
                    {[
                      { plate: "ABC-1234", status: "authorized", name: "Mom&apos;s Camry", time: "2:34 PM" },
                      { plate: "XYZ-5678", status: "unknown", name: "Unknown", time: "11:47 AM" },
                      { plate: "DEF-9012", status: "authorized", name: "Guest Parking", time: "9:15 AM" },
                    ].map((vehicle) => (
                      <div key={vehicle.plate} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-xs font-mono font-bold ${
                            vehicle.status === 'authorized' ? 'bg-[#10B981]/10 text-[#10B981]' : 'bg-[#FF6F61]/10 text-[#FF6F61]'
                          }`}>
                            {vehicle.plate.slice(0, 3)}
                          </div>
                          <div>
                            <div className="font-mono text-gray-900">{vehicle.plate}</div>
                            <div className="text-sm text-gray-500">{vehicle.name}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className={`inline-flex items-center px-2 py-1 rounded-lg text-xs font-medium ${
                            vehicle.status === 'authorized' 
                              ? 'bg-[#10B981]/10 text-[#10B981]' 
                              : 'bg-[#FF6F61]/10 text-[#FF6F61]'
                          }`}>
                            {vehicle.status === 'authorized' ? '✓ Authorized' : '⚠️ Unknown'}
                          </span>
                          <div className="text-xs text-gray-400 mt-1">{vehicle.time}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">How it works</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">Setup takes less than 60 seconds</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "📷", title: "Connect your camera", desc: "Works with Ring, Nest, and Arlo cameras you already own" },
              { icon: "🚗", title: "Add authorized vehicles", desc: "Family, friends, and guests are always welcome" },
              { icon: "📱", title: "Get instant alerts", desc: "Text or email when strangers park in your driveway" },
            ].map((step, i) => (
              <div key={i} className="text-center p-8 rounded-2xl bg-[#F8FBFD] hover:shadow-lg transition-shadow">
                <div className="text-5xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F8FBFD]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🔍", title: "Smart Detection", desc: "Automatically reads license plates" },
              { icon: "✅", title: "Authorized List", desc: "Family, friends, and guests always welcome" },
              { icon: "🔔", title: "Instant Alerts", desc: "Text or email when strangers park" },
              { icon: "📋", title: "Violation Log", desc: "Photo history of all violations" },
            ].map((feature, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Simple pricing</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Free */}
            <div className="p-8 rounded-2xl border border-gray-200 hover:border-[#6EC1E4] transition-colors">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Free</h3>
              <div className="text-3xl font-bold text-gray-900 mb-4">$0<span className="text-lg font-normal text-gray-500">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-gray-600"><span className="text-[#10B981]">✓</span> Basic alerts</li>
                <li className="flex items-center gap-2 text-gray-600"><span className="text-[#10B981]">✓</span> Up to 5 plates</li>
                <li className="flex items-center gap-2 text-gray-600"><span className="text-[#10B981]">✓</span> 7-day history</li>
              </ul>
              <button className="w-full py-3 rounded-xl border-2 border-[#6EC1E4] text-[#6EC1E4] font-medium hover:bg-[#6EC1E4]/5 transition-colors">
                Get Started
              </button>
            </div>
            {/* Premium */}
            <div className="p-8 rounded-2xl bg-[#6EC1E4] text-white relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-[#FF6F61] text-white text-xs font-medium rounded-full">
                Most Popular
              </span>
              <h3 className="text-xl font-bold mb-2">Premium</h3>
              <div className="text-3xl font-bold mb-4">$10<span className="text-lg font-normal opacity-80">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2"><span>✓</span> Automated notices</li>
                <li className="flex items-center gap-2"><span>✓</span> Unlimited plates</li>
                <li className="flex items-center gap-2"><span>✓</span> 30-day history</li>
                <li className="flex items-center gap-2"><span>✓</span> SMS alerts</li>
              </ul>
              <button className="w-full py-3 rounded-xl bg-white text-[#6EC1E4] font-medium hover:bg-gray-50 transition-colors">
                Start Free Trial
              </button>
            </div>
            {/* Property Manager */}
            <div className="p-8 rounded-2xl border border-gray-200 hover:border-[#6EC1E4] transition-colors">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Property Manager</h3>
              <div className="text-3xl font-bold text-gray-900 mb-4">$25<span className="text-lg font-normal text-gray-500">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-gray-600"><span className="text-[#10B981]">✓</span> Multi-camera</li>
                <li className="flex items-center gap-2 text-gray-600"><span className="text-[#10B981]">✓</span> Unlimited plates</li>
                <li className="flex items-center gap-2 text-gray-600"><span className="text-[#10B981]">✓</span> 90-day analytics</li>
                <li className="flex items-center gap-2 text-gray-600"><span className="text-[#10B981]">✓</span> API access</li>
              </ul>
              <button className="w-full py-3 rounded-xl border-2 border-[#6EC1E4] text-[#6EC1E4] font-medium hover:bg-[#6EC1E4]/5 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#6EC1E4] rounded-xl flex items-center justify-center">
                <span className="text-white font-bold">P</span>
              </div>
              <span className="font-bold text-gray-900">ParkingEnforcer</span>
            </div>
            <div className="flex gap-6 text-sm text-gray-600">
              <a href="#" className="hover:text-gray-900">Help</a>
              <a href="#" className="hover:text-gray-900">Privacy</a>
              <a href="#" className="hover:text-gray-900">Terms</a>
              <a href="#" className="hover:text-gray-900">Camera Guides</a>
            </div>
            <p className="text-sm text-gray-500">© 2026 ParkingEnforcer</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
