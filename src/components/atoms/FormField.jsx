import { useState } from 'react';

export default function FormField({ label, name, type, required, isImageField }) {
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <label className="block mb-2 text-gray-700 font-medium">
        {label}
      </label>
      {isImageField ? (
        <div className="w-full h-48 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg cursor-pointer relative overflow-hidden">
          <input
            type="file"
            accept="image/*"
            name={name}
            required={required}
            className="absolute inset-0 opacity-0 cursor-pointer"
            onChange={handleImageChange}
          />
          {preview ? (
            <img src={preview} alt="Preview" className="absolute inset-0 object-cover w-full h-full" />
          ) : (
            <span className="text-gray-500">Drag and drop an image or click to upload</span>
          )}
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
