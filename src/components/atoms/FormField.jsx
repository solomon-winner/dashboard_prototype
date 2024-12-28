export default function FormField({ label, name, type, required, isImageField }) {
  return (
    <div>
      <label className="block mb-2 text-gray-700 font-medium">
        {label}
      </label>
      {isImageField ? (
        <div className="w-full h-48 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg cursor-pointer">
          <input
            type="file"
            accept="image/*"
            name={name}
            required={required}
            className="hidden"
          />
          <span className="text-gray-500">Click to upload an image</span>
        </div>
      ) : (
        <input
          type={type}
          name={name}
          required={required}
          className="w-full p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      )}
    </div>
  );
}
