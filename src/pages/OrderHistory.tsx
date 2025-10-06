export default function OrderHistory() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Order History</h1>
      <div className="space-y-4">
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="font-semibold">Order #12345</h3>
              <p className="text-gray-600">Placed on March 15, 2024</p>
            </div>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
              Delivered
            </span>
          </div>
          {/* Order items will go here */}
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="font-semibold">Order #12344</h3>
              <p className="text-gray-600">Placed on March 10, 2024</p>
            </div>
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
              In Transit
            </span>
          </div>
          {/* Order items will go here */}
        </div>
      </div>
    </div>
  );
}
