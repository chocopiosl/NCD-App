import Layout from '../components/Layout'
import CarePlan from '../components/CarePlan'
import SelfManagementTools from '../components/SelfManagementTools'
import Telemedicine from '../components/Telemedicine'

export default function Home() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <CarePlan />
        <SelfManagementTools />
        <Telemedicine />
      </div>
    </Layout>
  )
}
