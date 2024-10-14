import { PhoneCall, MessageCircle } from 'lucide-react'

export default function Telemedicine() {
  return (
    <div className="mt-8">
      <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">Telemedicine</h3>
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h4 className="text-base font-semibold mb-2">Connect with Your Healthcare Provider</h4>
          <p className="text-sm text-gray-500 mb-4">Securely communicate with your doctor through video calls or messaging.</p>
          <div className="mt-5 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                <PhoneCall className="mr-2 h-5 w-5" />
                Start Video Call
              </a>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <a
                href="#"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Send Message
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
