import { Bell, User } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-gray-800">Welcome, John</h2>
        <div className="flex items-center">
          <button className="p-2 rounded-full bg-gray-200 mr-2">
            <Bell className="w-5 h-5 text-gray-600" />
          </button>
          <button className="flex items-center text-sm font-medium text-gray-700">
            <User className="w-5 h-5 mr-2" />
            Profile
          </button>
        </div>
      </div>
    </header>
  )
}
