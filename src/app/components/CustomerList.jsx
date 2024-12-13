import CustomerCard from './CustomerCard';

const CustomerList = ({ customers }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
      <h2 className="text-xl font-bold mb-4 text-gray-700">Customer List</h2>
      <div className="overflow-y-auto max-h-96 space-y-3">
        {customers.map((customer) => (
          <CustomerCard
            key={customer.id}
            name={customer.name}
            company={customer.company}
            email={customer.email}
            phone={customer.phone}
          />
        ))}
      </div>
    </div>
  );
};

export default CustomerList;
