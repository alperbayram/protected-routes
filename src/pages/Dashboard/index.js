import Userlist from './UserList'

export default function Dashboard() {
  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">Applicant Information</h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">Personal details and application.</p>
      </div>
      <Userlist/>
    </div>
  )
}
