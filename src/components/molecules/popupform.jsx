import FormField from "../atoms/FormField.jsx";

export default function PopupForm({ closePopup, onSubmit }) {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={(e) => e.target === e.currentTarget && closePopup()}
    >
      <div className="bg-white p-8 rounded-xl shadow-lg w-[400px] max-w-[90%] relative animate-scaleIn">
        <button
          className="absolute top-4 right-4 text-2xl text-gray-700 hover:text-red-500"
          onClick={closePopup}
        >
          &times;
        </button>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          Add New Song
        </h2>
        <form onSubmit={onSubmit} className="space-y-4">
          <FormField
            label="Image URL"
            name="img"
            type="url"
            required
            isImageField
          />         
          <FormField label="Title" name="Song title" type="text" required />
          <FormField
            label="Link URL"
            name="You tube link"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white w-full py-3 rounded-lg hover:bg-blue-600 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
