import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#F8FBFD]">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-6">
              <Link href="/" className="flex items-center gap-2">
                <div className="w-8 h-8 bg-[#6EC1E4] rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">P</span>
                </div>
                <span className="font-bold text-xl text-gray-900">ParkingEnforcer</span>
              </Link>
              <nav className="hidden md:flex items-center gap-1">
                <Link href="/dashboard" className="px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors">
                  Dashboard
                </Link>
                <Link href="/dashboard/authorized" className="px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors">
                  Authorized
                </Link>
                <Link href="/dashboard/violations" className="px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors">
                  Violations
                </Link>
                <Link href="/dashboard/alerts" className="px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors">
                  Alerts
                </Link>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-2 text-sm text-[#10B981]">
                <span className="w-2 h-2 bg-[#10B981] rounded-full animate-pulse"></span>
                Online
              </span>
              <div className="w-8 h-8 bg-[#6EC1E4]/10 rounded-full flex items-center justify-center">
                <span className="text-[#6EC1E4] font-medium text-sm">JD</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </div>
      </main>
    </div>
  );
}
