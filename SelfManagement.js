import { Heart, PieChart, Calendar } from 'lucide-react'

export default function SelfManagementTools() {
  return (
    <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {/* Blood Pressure Card */}
      <div className="bg-white overflow-hidden shadow rounded-lg">
        <div className="p-5">
          <div className="flex items-center">
            <div className="flex-shrink-0 bg-blue-500 rounded-md p-3">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <div className="ml-5 w-0 flex-1">
              <dl>
                <dt className="text-sm font-medium text-gray-500 truncate">Blood Pressure</dt>
                <dd className="flex items-baseline">
                  <div className="text-2xl font-semibold text-gray-900">120/80</div>
                  <div className="ml-2 flex items-baseline text-sm font-semibold text-green-600">
                    Normal
                  </div>
                </dd>
              </dl>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 px-5 py-3">
          <div className="text-sm">
            <a href="#" className="font-medium text-blue-700 hover:text-blue-900">View history</a>
          </div>
        </div>
      </div>
      {/* Add Blood Glucose and Next Appointment cards similarly */}
    </div>
  )
}
