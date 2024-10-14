import { Home, Heart, Calendar, MessageCircle, PieChart } from 'lucide-react'
import Link from 'next/link'

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow-md">
      <div className="p-4">
        <h1 className="text-2xl font-bold text-blue-600">HealthConnect</h1>
      </div>
      <nav className="mt-8">
        <Link href="/" className="flex items-center px-4 py-2 text-gray-700 bg-gray-200">
          <Home className="w-5 h-5 mr-3" />
          Dashboard
        </Link>
        {/* Add other navigation items similarly */}
      </nav>
    </aside>
  )
}
