import { useState } from "react";
import FormField from "../atoms/FormField.jsx";

export default function PopupForm({ closePopup, onSubmit, formType }) {
  const [songs, setSongs] = useState(['']);

  const handleAddSong = () => {
    setSongs([...songs, '']);
  };

  const handleRemoveSong = (index) => {
    if (songs.length > 1) {
      const newSongs = songs.filter((_, i) => i !== index);
      setSongs(newSongs);
    }
  };

  const handleSongChange = (index, value) => {
    const updatedSongs = [...songs];
    updatedSongs[index] = value;
    setSongs(updatedSongs);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const albumData = {
      albumTitle: formData.get('albumTitle'),
      albumImage: formData.get('albumImage'),
      youtubeLink: formData.get('youtubeLink'),
      appleMusicLink: formData.get('appleMusicLink'),
      spotifyLink: formData.get('spotifyLink'),
      amazonLink: formData.get('amazonLink'),
      songs,
    };

    console.log('Album Data:', albumData);
    alert('Album added successfully!');
    e.target.reset();
    setSongs(['']);
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 "
      onClick={(e) => e.target === e.currentTarget && closePopup()}
    >
      <div className="bg-white p-8 rounded-xl shadow-lg w-[400px] max-w-[90%] relative animate-scaleIn max-h-[80vh] overflow-y-auto">
        <button
          className="absolute top-4 right-4 text-2xl text-gray-700 hover:text-red-500"
          onClick={closePopup}
        >
          &times;
        </button>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          {formType === 'album' ? 'Add New Album' : 'Add New Song'}
        </h2>
        <form onSubmit={onSubmit} className="space-y-4">
          {formType === 'album' ? (
            <>

<form onSubmit={handleSubmit}>
              <div className="mb-4">
                <FormField label="Album Cover Image" name="albumImage" type="file" required isImageField />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Album Title</label>
                <input
                  type="text"
                  name="albumTitle"
                  className="w-full border-2 border-gray-300 rounded-lg p-2"
                  required
                />
              </div>

              {['youtubeLink', 'appleMusicLink', 'spotifyLink', 'amazonLink'].map((link) => (
                <div key={link} className="mb-4">
                  <label className="block text-gray-700 mb-2 capitalize">{link.replace('Link', ' Link')}</label>
                  <input
                    type="url"
                    name={link}
                    className="w-full border-2 border-gray-300 rounded-lg p-2"
                    required
                  />
                </div>
              ))}

              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Album Songs</label>
                {songs.map((song, index) => (
                  <div key={index} className="flex items-center gap-2 mb-2">
                    <input
                      type="text"
                      value={song}
                      onChange={(e) => handleSongChange(index, e.target.value)}
                      className="w-full border-2 border-gray-300 rounded-lg p-2"
                      placeholder="Song Title"
                      required
                    />
                    <button
                      type="button"
                      className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600"
                      onClick={() => handleRemoveSong(index)}
                    >
                      -
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600"
                  onClick={handleAddSong}
                >
                  +
                </button>
              </div>


            </form>
            </>
          ) : (
            <>
              <FormField label="Song Image" name="songImg" type="url" required isImageField />
              <FormField label="Song Title" name="songTitle" type="text" required />
              <FormField label="YouTube Link" name="youtubeLink" type="url" required />
            </>
          )}
              <button
                type="submit"
                className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600"
              >
                Submit
              </button>
        </form>
      </div>
    </div>
  );
}
