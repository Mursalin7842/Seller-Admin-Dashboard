import React from 'react';

const mockPayoutRequests = [
  { id: 1, seller: 'John Doe', amount: 1250.75, date: '2023-10-27' },
  { id: 2, seller: 'Jane Smith', amount: 850.00, date: '2023-10-26' },
  { id: 3, seller: 'Peter Jones', amount: 2500.50, date: '2023-10-25' },
  { id: 4, seller: 'Mary Johnson', amount: 500.25, date: '2023-10-24' },
];

const PaymentManagement = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Payment Management</h1>

      <div className="mt-4 overflow-x-auto">
        <div className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">Seller</th>
                <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">Amount</th>
                <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">Request Date</th>
                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50"></th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {mockPayoutRequests.map((request) => (
                <tr key={request.id}>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{request.seller}</td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">${request.amount.toFixed(2)}</td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{request.date}</td>
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

export default PaymentManagement;
