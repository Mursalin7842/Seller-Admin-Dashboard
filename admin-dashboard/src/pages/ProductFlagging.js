import React from 'react';

const mockFlaggedProducts = [
  { id: 1, name: 'Vintage Leather Jacket', seller: 'John Doe', reason: 'Counterfeit item' },
  { id: 2, name: 'Handmade Wooden Bowl', seller: 'Jane Smith', reason: 'Prohibited item' },
  { id: 3, name: 'Antique Silver Locket', seller: 'Peter Jones', reason: 'Violates policy' },
  { id: 4, name: 'Designer Sunglasses', seller: 'Mary Johnson', reason: 'IP infringement' },
];

const ProductFlagging = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Product Flagging</h1>

      <div className="mt-4 overflow-x-auto">
        <div className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
          <table className="min-w-full">
            <thead>
              <tr>
                <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">Product Name</th>
                <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">Seller</th>
                <th className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">Reason for Flag</th>
                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50"></th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {mockFlaggedProducts.map((product) => (
                <tr key={product.id}>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{product.name}</td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{product.seller}</td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">{product.reason}</td>
                  <td className="px-6 py-4 text-sm font-medium leading-5 text-right whitespace-no-wrap border-b border-gray-200">
                    <button className="px-4 py-2 mr-2 font-bold text-white bg-green-500 rounded hover:bg-green-700">Approve</button>
                    <button className="px-4 py-2 font-bold text-white bg-red-500 rounded hover:bg-red-700">Remove</button>
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

export default ProductFlagging;
