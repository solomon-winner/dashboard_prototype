import { useState } from "react";
import FormField from "../atoms/FormField.jsx";

export default function PopupForm({ closePopup, onSubmit, formType }) {
  
  const [formData, setFormData] = useState({
    img: '',
    title: '',
    img: '',
    link: '',
    youtubeLink: '',
    appleMusicLink: '',
    spotifyLink: '',
    amazonLink: '',
    songs: [''],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSongChange = (index, value) => {
    const updatedSongs = [...formData.songs];
    updatedSongs[index] = value;
    setFormData((prevData) => ({
      ...prevData,
      songs: updatedSongs,
    }));
  };

  const handleAddSong = () => {
    setFormData((prevData) => ({
      ...prevData,
      songs: [...prevData.songs, ''],
    }));
  };

  const handleRemoveSong = (index) => {
    if (formData.songs.length > 1) {
      const updatedSongs = formData.songs.filter((_, i) => i !== index);
      setFormData((prevData) => ({
        ...prevData,
        songs: updatedSongs,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const albumData = {
      title: formData.title,
      img: formData.img,
      youtube_link: formData.youtubeLink,
      spotifyLink: formData.spotifyLink,
      appleMusicLink: formData.appleMusicLink,
      amazonLink: formData.amazonLink,
      albums: formData.songs,
    };
    onSubmit(albumData);
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
        <form onSubmit={onSubmit} className="space-y-4" encType="multipart/form-data">
          {formType === 'album' ? (
            <>

              <div className="mb-4">
                <FormField 
                label="Album Cover Image" 
                name="img" 
                type="file" 
                required 
                isImageField 
                value={formData.img}
                onChange={handleChange}
                />
              </div>

              <div className="mb-4">
              <FormField 
              label="Album Title" 
              name="albumTitle" 
              type="text" 
              required 
              value={formData.albumTitle}
              onChange={handleChange}
              />
              </div>

              {['youtubeLink', 'appleMusicLink', 'spotifyLink', 'amazonLink'].map((link) => (
                <div key={link} className="mb-4">
               <FormField 
               label= {link.replace('Link', ' Link')} 
               name = {link} 
               type="url" 
               required
               value={formData[link]}
               onChange={handleChange}
               />         
                </div>
              ))}

              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Album Songs</label>
                {formData.songs.map((song, index) => (
                  <div key={index} className="flex items-center gap-2 mb-2">
                    <FormField
                      type="text"
                      value={song}
                      onChange={(e) => handleSongChange(index, e.target.value)}
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


            </>
          ) : (
            <>
              <FormField 
              label="Song Image" 
              name="img" 
              type="file" 
              required 
              isImageField
              value={formData.img}
              onChange={handleChange}
              />
              <FormField 
              label="Song Title" 
              name="title" 
              type="text" 
              required 
              value={formData.title}
              onChange={handleChange}
              />
              <FormField 
              label="YouTube Link" 
              name="youtubeLink" 
              type="url" 
              required 
              value={formData.youtubeLink}
              onChange={handleChange}
              />
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
