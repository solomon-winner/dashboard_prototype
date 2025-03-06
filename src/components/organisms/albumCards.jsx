import { useState } from "react";
import { FaSpotify, FaApple, FaAmazon, FaYoutube } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { MdOutlineUpdate, MdDeleteOutline } from "react-icons/md";
import PopupForm from "../molecules/popupform.jsx";
import { useAddSong, useRemoveSong, useSongs,useUpdateSong  } from "../../hooks/useSongs.js";
import { songsState,editingSongState ,albumsState, editingAlbumState} from "../../state/state.js";
import { useRecoilState, useRecoilValue } from "recoil";
import { baseURL } from "../../utils/constants.js";

const Albums = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formType, setFormType] = useState('');
  const addSong = useAddSong();
 const { isLoading: isSongLoading, isError: songError } = useSongs("song");
const { isLoading: isAlbumLoading, isError: albumError } = useSongs("album"); 
  const Albums= useRecoilValue(albumsState);
  const Songs = useRecoilValue(songsState);
  const  updateSong  = useUpdateSong(); 
  const RemoveSong = useRemoveSong();

const [editingAlbum, setEditingAlbum] = useRecoilState(editingAlbumState);
const [editingSong, setEditingSong] = useRecoilState(editingSongState);
const [imageFile, setImageFile] = useState(null);
const [imagePreview, setImagePreview] = useState(''); 

const handleUpdate = (id) => {
  const updatedAlbum = Albums.find(album => album.id === id);
  setEditingAlbum(updatedAlbum);
  setImagePreview(`${baseURL}public/${updatedAlbum.img}`);
};

const handleSave = () => {
  const filteredSongs = editingAlbum?.songs.filter((song) => song.trim() !== "");
  const formData = new FormData();

  formData.append("title", editingAlbum.title);

  filteredSongs.forEach((song, index) => {
    formData.append(`songs[${index}]`, song);
  });

  if (imageFile) {
    formData.append("img", imageFile);
  }

  formData.append("youtubeLink", editingAlbum.youtubeLink || "");
  formData.append("spotifyLink", editingAlbum.spotifyLink || "");
  formData.append("appleMusicLink", editingAlbum.appleMusicLink || "");
  formData.append("amazonLink", editingAlbum.amazonLink || "");

  for (let [key, value] of formData.entries()) {
    console.log(` ${key}: ${value}`);
  }

  updateSong.mutate({ id: editingAlbum.id, data: formData });

  setEditingAlbum(null);
};


const handleCancel = () => {
  setEditingAlbum(null);
  setEditingSong(null);
  setImagePreview("");
};

const handleSongChange = (index, value) => {
  // Create a new copy of the songs array with the updated value
  const newSongs = [...editingAlbum.songs];
  newSongs[index] = value;

  // Update the editingAlbum state immutably
  setEditingAlbum((prevAlbum) => ({
    ...prevAlbum, // Copy all existing properties
    songs: newSongs, // Update the songs array
  }));
};

const handleLinkChange = (key, value) => {
  setEditingAlbum((prevAlbum) => ({
    ...prevAlbum,
    [key]: value,
  }));
};

if (isSongLoading || isAlbumLoading) return <div>Loading...</div>;
if (songError) return <div>Error fetching songs: {songError.message}</div>;
if (albumError) return <div>Error fetching albums: {albumError.message}</div>;
  
const openPopup = (type) => {
    setFormType(type);
    setIsOpen(true);
  };  
  const closePopup = () => setIsOpen(false);

  const handleSubmit = (event) => {
    event.preventDefault();

      const formElement = event.target;

      if (formElement.enctype === "multipart/form-data") {
        const formData = new FormData(formElement);
        formData.append("type", formType); 
        
        formData.forEach((value, key) => {
          console.log(`${key}: ${value}`);
      });

    addSong.mutate(formData);
    event.target.reset();
    closePopup();
  }
};

const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result); 
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddSong = () => {
    setEditingAlbum((prevAlbum) => ({
      ...prevAlbum, 
      songs: [...prevAlbum.songs, ""], 
    }));
  };
 const handleSingleUpdate = (id) => {
    const updatedSong = Songs.find((song) => song.id === id);
    setEditingSong(updatedSong);
    setImagePreview(`${baseURL}public/${updatedSong.img}`);
  }

  const handleSingleChange = (key, value) => {
    setEditingSong((prevSong) => ({
      ...prevSong,
      [key]: value,
    }));
  }
  const handleSingleSave = () => {
    const formData = new FormData();

    formData.append("title", editingSong.title);
    formData.append("youtubeLink", editingSong.youtubeLink);
    if (imageFile) {
      formData.append("img", imageFile);
    }
    updateSong.mutate({ id: editingSong.id, data: formData });
    setEditingSong(null);
  }



    return (
        <div className="w-full h-auto flex flex-col mt-5 text-left">
            <div className="w-full h-auto flex text-left justify-end">
            <div className="w-fit h-auto flex gap-2 text-left ">
            <button onClick = {() =>openPopup('song')} className="w-32 max-w-full h-8 flex items-center justify-center gap-1 bg-white text-green-600 text-sm font-bold cursor-pointer border border-green-600 box-border mt-2 hover:bg-green-700 hover:text-white"><IoMdAdd />Add  song</button>
            <button onClick = {() => openPopup('album')} className="w-32 max-w-full h-8 flex items-center justify-center gap-1 bg-white text-green-600 text-sm font-bold cursor-pointer border border-green-600 box-border mt-2 hover:bg-green-700 hover:text-white"><IoMdAdd />Add  Album</button>
            {isOpen && (
            <PopupForm closePopup={closePopup} onSubmit={handleSubmit} formType={formType} />
        )}
            </div>
            </div>
            
            <div className="text-2xl font-bold text-green-600 w-full mb-2 pl-2 pb-2">Albums</div>
            <div className="w-full h-auto flex flex-wrap justify-start items-center gap-8 max-w-full box-border">
                {Albums?.map((album) => (
      
                <div key={album.id} className="relative w-[27rem] h-auto p-5 flex gap-2 shadow-md">
                <div className="w-3/5 min-h-[30rem] flex flex-col items-center gap-1 box-border">
                {editingAlbum?.id === album.id ? (
          <div className="w-full p-2 h-4/5 bg-white bg-cover bg-center shadow-md box-border border border-green-600 flex justify-end">
            <div className="w-full h-full flex flex-col items-center justify-center">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="mb-4 ml-[75px]"
              />
              <img
                src={imagePreview}
                alt="Album Cover Preview"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ) : (
          <div
            className="w-full p-2 h-4/5 bg-white bg-cover bg-center shadow-md box-border border border-green-600 flex justify-end"
            style={{ backgroundImage: `url("${baseURL}public/${album.img}")` }}
          >
            <div className="absolute top-[1rem] left-[94%] transform -translate-x-1/2 w-8 h-fit gap-5 bg-black bg-opacity-10 rounded-full font-extrabold text-green-700 flex flex-col justify-around pt-5 pb-5 items-center z-10">
              <MdOutlineUpdate className="cursor-pointer" title="Update this Album" onClick={() =>handleUpdate(album.id)} />
              <MdDeleteOutline onClick={() => RemoveSong(album.id)} className="cursor-pointer" title="Delete this Album" />
            </div>
          </div>
        )}
        {editingAlbum?.id === album.id ? (
          <>
            <input
              type="text"
              value={editingAlbum?.appleMusicLink}
              onChange={(e) => handleLinkChange('appleMusicLink', e.target.value)}
              className="w-full h-12 p-2 border border-green-600"
              placeholder="Apple Music Link"
            />
            <input
              type="text"
              value={editingAlbum?.spotifyLink}
              onChange={(e) => handleLinkChange('spotifyLink', e.target.value)}
              className="w-full h-12 p-2 border border-green-600"
              placeholder="Spotify Link"
            />
            <input
              type="text"
              value={editingAlbum?.amazonLink}
              onChange={(e) => handleLinkChange('amazonLink', e.target.value)}
              className="w-full h-12 p-2 border border-green-600"
              placeholder="Amazon Link"
            />
            <input
              type="text"
              value={editingAlbum?.youtubeLink}
              onChange={(e) => handleLinkChange('youtubeLink', e.target.value)}
              className="w-full h-12 p-2 border border-green-600"
              placeholder="YouTube Link"
            />
          </>
        ) : (
          <>
            <button className="w-full h-12 flex items-center pl-2 gap-1 bg-green-600 text-white text-sm font-bold border-none cursor-pointer box-border hover:bg-green-700">
              <FaApple />Buy on Apple Music
            </button>
            <button className="w-full h-12 flex items-center pl-2 gap-1 bg-green-600 text-white text-sm font-bold border-none cursor-pointer box-border hover:bg-green-700">
              <FaSpotify />Listen on Spotify
            </button>
            <button className="w-full h-12 flex items-center pl-2 gap-1 bg-green-600 text-white text-sm font-bold border-none cursor-pointer box-border hover:bg-green-700">
              <FaAmazon />Buy on Amazon
            </button>
            <button onClick = {() => window.open(album.youtubeLink, "_blank", "noopener,noreferrer")} className="w-full h-12 flex items-center pl-2 gap-1 bg-green-600 text-white text-sm font-bold border-none cursor-pointer box-border hover:bg-green-700">
              <FaYoutube />Watch on YouTube
            </button>
          </>
        )}
                </div>
                <div className="w-3/5 h-full flex flex-col justify-center items-start box-border">
                {editingAlbum?.id === album.id ? (
          <input
            type="text"
            value={editingAlbum?.title}
            onChange={(e) => handleLinkChange("title",e.target.value)}
            className="text-2xl font-bold text-green-600 w-full mb-2"
          />
        ) : (
                    <div className="text-2xl font-bold text-green-600 w-full mb-2">{album.title}</div>
        )}
{editingAlbum?.id === album.id ? (
      editingAlbum?.songs.map((song, index) => (
        <input
          key={index}
          type="text"
          value={song} // Bind to editingAlbum.songs[index]
          onChange={(e) => handleSongChange(index, e.target.value)} // Update editingAlbum.songs
          className="text-green-600 w-full m-0 p-1 box-border"
        />
      ))
    ) : (
      album.songs.map((song, index) => (
        <p key={index} className="text-green-600 w-full m-0 p-1 box-border">
          {song}
        </p>
      ))
    )}

        {editingAlbum?.id === album.id && (
          <button
            onClick={handleAddSong}
            className="absolute bottom-0 right-0 p-2 bg-green-600 text-white rounded-full shadow-md hover:bg-green-700"
            title="Add a new song"
          >
            <IoMdAdd size={20} />
          </button>
        )}
        {editingAlbum?.id === album.id ? (
          <div className="flex gap-2 mt-2">
            <button onClick={handleSave} className="w-full h-8 flex items-center justify-center gap-1 bg-white text-green-600 text-lg font-bold cursor-pointer border border-green-600 box-border hover:bg-green-700 hover:text-white">
              Save
            </button>
            <button onClick={handleCancel} className="w-full h-8 flex items-center justify-center gap-1 bg-white text-green-600 text-lg font-bold cursor-pointer border border-green-600 box-border hover:bg-green-700 hover:text-white">
              Cancel
            </button>
          </div>
        ) : (
          <button className="w-full max-w-full h-8 flex items-center justify-center gap-1 bg-white text-green-600 text-lg font-bold cursor-pointer border border-green-600 box-border mt-2 hover:bg-green-700 hover:text-white">
            <FaYoutube />Play the song
          </button>
        )}
          </div>
            </div>   
                       ))}

            </div>

            <button className="w-36 h-8 flex self-end items-center justify-center bg-white mt-8 mr-16 text-green-600 text-sm font-semibold cursor-pointer border border-green-600 shadow-md hover:bg-green-700 hover:text-white">See More Albums</button>
            
            <div>
      <div className="text-2xl font-bold text-green-600 w-full mb-2 pl-2 pb-2">
        Single Release
      </div>

      <div className="w-full h-auto flex flex-wrap justify-start items-center gap-8 max-w-full box-border">
        {Songs.map((song) => (
          <div
            key={song.id} // Use a unique key for each song
            className="relative w-72 h-72 flex flex-col gap-2 shadow-md bg-white"
          >
            {/* Update and Delete Icons */}
            <div className="absolute top-[1rem] left-[94%] transform -translate-x-1/2 w-8 h-fit gap-5 bg-black bg-opacity-10 rounded-full font-extrabold text-green-700 flex flex-col justify-around pt-5 pb-5 items-center z-10">
              <MdOutlineUpdate onClick = {() => handleSingleUpdate(song.id)} className="cursor-pointer" title="Update this Song" />
              <MdDeleteOutline onClick={() => RemoveSong(song.id)} className="cursor-pointer" title="Delete this Song" />
            </div>

            {/* Song Image */}
            {editingSong?.id === song.id ? (
              <>
              <input type="file" accept="image/*" onChange={handleImageChange} className="mb-4 ml-[75px]" />
              <div
              className="w-full h-4/5 bg-white bg-cover bg-center box-border"
              style={{ backgroundImage: `url("${imagePreview}")` }} // Use dynamic image URL
            ></div>
            </>
            ):(
            <div
              className="w-full h-4/5 bg-white bg-cover bg-center box-border"
              style={{ backgroundImage: `url("${baseURL}public/${song.img}")` }} // Use dynamic image URL
            ></div>
            )}


            {/* Song Title */}
            <div className="w-full h-auto flex flex-col pl-5 gap-1 box-border">
              {editingSong?.id === song.id ? (
                <input
                  type="text" 
                  value={editingSong?.title || ""}
                  onChange={(e) => handleSingleChange("title",e.target.value)}
                  className="text-2xl font-bold text-green-600 w-full mb-2"
                />
              ):(
                <p className="text-green-600 text-lg m-0 p-1 box-border">
                {song.title} 
              </p> 
              )}
            </div>

            {/* Play Button */}
            {
              editingSong?.id === song.id ? (
                <>
                <input
                  type="text"
                  value={editingSong?.youtubeLink || ""}
                  onChange={(e) => handleSingleChange("youtubeLink",e.target.value)}
                  className="w-full h-12 p-2 border border-green-600"
                  placeholder="YouTube Link"
                />
                <div className="w-full flex gap-2 mt-2">
                  <button onClick={handleSingleSave} className="w-full h-8 flex items-center justify-center gap-1 bg-white text-green-600 text-lg font-bold cursor-pointer border border-green-600 box-border hover:bg-green-700 hover:text-white">
                    Save
                  </button>
                  <button onClick={handleCancel} className="w-full h-8 flex items-center justify-center gap-1 bg-white text-green-600 text-lg font-bold cursor-pointer border border-green-600 box-border hover:bg-green-700 hover:text-white">
                    Cancel
                  </button>
                </div>
                </>
              ):(
            <button onClick={() => window.open(song.youtubeLink, "_blank", "noopener,noreferrer")} className="w-full max-w-full h-8 flex items-center justify-center gap-1 bg-white text-green-600 text-lg font-bold cursor-pointer border border-green-600 box-border mt-2 hover:bg-green-700 hover:text-white">
              <FaYoutube /> Play the song
            </button>                
              )
            }

          </div>
        ))}
      </div>
    </div>
            <button className="w-36 h-8 flex self-end items-center justify-center bg-white mt-8 mr-16 text-green-600 text-sm font-semibold cursor-pointer border border-green-600 shadow-md hover:bg-green-700 hover:text-white">See More Songs</button>
        </div>
    );
};

export default Albums;


//   <div className="w-full flex flex-col sm:flex-row justify-end gap-2 sm:gap-4">
//     <button 
//       onClick={() => openPopup('song')}
//       className="w-full sm:w-32 h-8 flex items-center justify-center gap-1 bg-white text-green-600 text-sm font-bold cursor-pointer border border-green-600 hover:bg-green-700 hover:text-white transition-colors"
//     >
//       <IoMdAdd />Add song
//     </button>
//     <button 
//       onClick={() => openPopup('album')}
//       className="w-full sm:w-32 h-8 flex items-center justify-center gap-1 bg-white text-green-600 text-sm font-bold cursor-pointer border border-green-600 hover:bg-green-700 hover:text-white transition-colors"
//     >
//       <IoMdAdd />Add Album
//     </button>
//     {isOpen && <PopupForm closePopup={closePopup} onSubmit={handleSubmit} formType={formType} />}
//   </div>

//   <div className="text-2xl font-bold text-green-600 w-full mb-2 pb-2">Albums</div>
//   <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//     {Albums?.map((album) => (
//       <div key={album.id} className="relative w-full h-auto p-4 sm:p-5 flex flex-col md:flex-row gap-4 shadow-md">
//         <div className="w-full md:w-1/2 min-h-[20rem] sm:min-h-[25rem] flex flex-col items-center gap-2">
//         </div>

//         <div className="w-full md:w-1/2 h-full flex flex-col justify-center items-start">
          
//           <div className="w-full flex flex-col sm:flex-row gap-2 mt-4">
//             <button className="w-full sm:w-auto px-4 h-8 flex items-center justify-center gap-1 bg-white text-green-600 text-base font-bold cursor-pointer border border-green-600 hover:bg-green-700 hover:text-white">
//               <FaYoutube />Play
//             </button>
//           </div>
//         </div>
//       </div>
//     ))}
//   </div>

//   <button className="w-full sm:w-36 h-8 self-end mt-8 bg-white text-green-600 text-sm font-semibold cursor-pointer border border-green-600 shadow-md hover:bg-green-700 hover:text-white">
//     See More Albums
//   </button>

//   <div className="text-2xl font-bold text-green-600 w-full mb-2 pb-2">Single Release</div>
//   <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//     {Songs.map((song) => (
//       <div key={song.id} className="relative w-full aspect-square flex flex-col gap-2 shadow-md bg-white p-4">
        
//         <button className="w-full h-8 flex items-center justify-center gap-1 bg-white text-green-600 text-base font-bold cursor-pointer border border-green-600 hover:bg-green-700 hover:text-white">
//           <FaYoutube /> Play
//         </button>
//       </div>
//     ))}
//   </div>

//   <button className="w-full sm:w-36 h-8 self-end mt-8 bg-white text-green-600 text-sm font-semibold cursor-pointer border border-green-600 shadow-md hover:bg-green-700 hover:text-white">
//     See More Songs
//   </button>
// </div> */}

// // module.exports = {
// //   theme: {
// //     screens: {
// //       'sm': '640px',
// //       'md': '768px',
// //       'lg': '1024px',
// //       'xl': '1280px',
// //     },
// //     extend: {
// //       aspectRatio: {
// //         'square': '1 / 1',
// //       },
// //     }
// //   }
// // }