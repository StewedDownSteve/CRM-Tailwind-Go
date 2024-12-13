// I'm copying Tailwind styles i made in HTML, one key difference-
// Replace class with className, as JSX uses className instead of class for defining CSS classes. 

const CustomerCard = ({ name, company, email, phone}) => {
    return (
        <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg shadow-sm flex justify-between items-center">
        <div>
          <p className="text-sm font-medium text-gray-800">{name}</p>
          <p className="text-sm text-gray-500">{company}</p>
          <p className="text-sm text-gray-500">{email}</p>
          <p className="text-sm text-gray-500">{phone}</p>
        </div>
        <button className="text-sm text-red-600 hover:underline hover:text-red-700">
          Remove
        </button>
      </div>
    );
};

export default CustomerCard;
// this allows it to accesses as a component elsewhere