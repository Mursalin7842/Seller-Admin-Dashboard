import React from 'react';

const mockApplications = [
  { id: 1, name: 'John Doe', email: 'john.doe@example.com', date: '2023-10-27', status: 'Pending' },
  { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', date: '2023-10-26', status: 'Pending' },
  { id: 3, name: 'Peter Jones', email: 'peter.jones@example.com', date: '2023-10-25', status: 'Pending' },
  { id: 4, name: 'Mary Johnson', email: 'mary.johnson@example.com', date: '2023-10-24', status: 'Pending' },
];

const SellerApproval = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Seller Approval Queue</h1>

      <div className="mt-4 overflow-x-auto">
        <div className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">Name</th>
                <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">Email</th>
                <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">Application Date</th>
                <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">Status</th>
                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50"></th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {mockApplications.map((app) => (
                <tr key={app.id}>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{app.name}</td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{app.email}</td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{app.date}</td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                    <span className="inline-flex px-2 text-xs font-semibold leading-5 text-yellow-800 bg-yellow-100 rounded-full">{app.status}</span>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium leading-5 text-right whitespace-no-wrap border-b border-gray-200">
                    <button className="px-4 py-2 mr-2 font-bold text-white bg-green-500 rounded hover:bg-green-700">Approve</button>
                    <button className="px-4 py-2 font-bold text-white bg-red-500 rounded hover:bg-red-700">Reject</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SellerApproval;
