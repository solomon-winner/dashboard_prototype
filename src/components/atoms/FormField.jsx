export default function FormField({ label, name, type, required }) {
    return (
      <div>
        <label className="block mb-2 text-gray-700 font-medium">
          {label}
        </label>
        <input
          type={type}
          name={name}
          required={required}
          className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>
    );
  }