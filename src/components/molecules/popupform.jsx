import { useState } from "react";
import FormField from "../atoms/FormField.jsx";
import { useAddSong } from "../../hooks/useSongs.js";

export default function PopupForm({ closePopup, onSubmit, formType }) {
  
  const [formValue, setFormValue] = useState({
    img: '',
    title: '',
    youtubeLink: '',
    appleMusicLink: '',
    spotifyLink: '',
    amazonLink: '',
    songs: [],
  });
  const addSong = useAddSong();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSongChange = (index, e) => {
    const { value } = e.target;
    setFormValue((prevData) => {
      const updatedSongs = [...prevData.songs];
      updatedSongs[index] = value; 
      return { ...prevData, songs: updatedSongs };
    });
  };

  const handleAddSong = () => {
    setFormValue((prevData) => {
      const updatedSongs = [...prevData.songs, ''];
      console.log("Songs before update:", prevData.songs); // This logs the previous state
      console.log("Songs after update:", updatedSongs); // This logs the new state before updating
      return { ...prevData, songs: updatedSongs };
    });
  };
  

  const handleRemoveSong = (index) => {
    if (formValue.songs.length > 1) {
      const updatedSongs = formValue.songs.filter((_, i) => i !== index);
      setFormValue((prevData) => ({
        ...prevData,
        songs: updatedSongs,
      }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("type", formType);
  
    // Append each song individually
    formValue.songs.forEach((song, index) => {
      formData.append(`songs[${index}]`, song);
    });
  
    // Debugging: Log form data before submitting
    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }
  
    addSong.mutate(formData);
  
    setFormValue({
      img: '',
      title: '',
      youtubeLink: '',
      appleMusicLink: '',
      spotifyLink: '',
      amazonLink: '',
      songs: [],
    });
  
    closePopup();
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
        <form onSubmit={handleSubmit} className="space-y-4" encType="multipart/form-data">
          {formType === 'album' ? (
            <>

              <div className="mb-4">
                <FormField 
                label="Album Cover Image" 
                name="img" 
                type="file" 
                required 
                isImageField 
                value={formValue.img}
                onChange={handleChange}
                />
              </div>

              <div className="mb-4">
              <FormField 
              label="Album Title" 
              name="title" 
              type="text" 
              required 
              value={formValue.albumTitle}
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
               value={formValue[link]}
               onChange={handleChange}
               />         
                </div>
              ))}

              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Album Songs</label>
                {formValue.songs.map((song, index) => (
                  <div key={index} className="flex items-center gap-2 mb-2">
                      <FormField
                        type="text"
                        value={formValue.songs[index] || ''}
                        onChange={(e) => handleSongChange(index, e)} // Pass the index here
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
              value={formValue.img}
              onChange={handleChange}
              />
              <FormField 
              label="Song Title" 
              name="title" 
              type="text" 
              required 
              value={formValue.title}
              onChange={handleChange}
              />
              <FormField 
              label="YouTube Link" 
              name="youtubeLink" 
              type="url" 
              required 
              value={formValue.youtubeLink}
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