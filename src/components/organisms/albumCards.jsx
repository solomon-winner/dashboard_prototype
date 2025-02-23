import { useState } from "react";
import { FaSpotify, FaApple, FaAmazon, FaYoutube } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { MdOutlineUpdate, MdDeleteOutline } from "react-icons/md";
import PopupForm from "../molecules/popupform.jsx";
import { useAddSong, useSongs,useUpdateSong  } from "../../hooks/useSongs.js";
import { songsState ,albumsState, editingAlbumState} from "../../state/state.js";
import { useRecoilState } from "recoil";

const Albums = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formType, setFormType] = useState('');
  const addSong = useAddSong();
 // const [Songs, setSongs] = useRecoilState(songsState);
  const [Albums, setAlbums] = useRecoilState(albumsState);
  const  updateSong  = useUpdateSong(); 
const { isLoading: isSongLoading, isError: songError } = useSongs("song");
const { isLoading: isAlbumLoading, isError: albumError, data: albums } = useSongs("album");
const [isEditing, setIsEditing] = useState(false);
const [albumTitle, setAlbumTitle] = useState('Balewletaye (ባለውለታየ)');
const [editingAlbum, setEditingAlbum] = useRecoilState(editingAlbumState);
console.log("Albums",Albums)
const [songs, setSongs] = useState([
  'Wletew Bezabgn',
  'Zariem hyaw new',
  'Abetu endante Manew',
  'Balewletaye Eyesus',
  'Bante Des Ylegnal',
  'Gashaye new ersu',
  'Halieluya',
  'Bemaleda',
  'Lamesgnew',
  'Bietekrstian',
  'Yesus Selamie new',
  'Wletew Bezabgn',
  'Eski Meskelh sr',
]);

const [imageUrl, setImageUrl] = useState('https://via.placeholder.com/300');
const [imageFile, setImageFile] = useState(null);
const [imagePreview, setImagePreview] = useState('https://via.placeholder.com/300'); 
const [links, setLinks] = useState({
  appleMusic: 'https://music.apple.com',
  spotify: 'https://spotify.com',
  amazon: 'https://amazon.com',
  youtube: 'https://youtube.com',
});

const handleUpdate = (id) => {
  const updatedAlbum = Albums.find(album => album.id === id);
  setEditingAlbum(updatedAlbum);
};

const handleSave = () => {
  setEditingAlbum(null);
    console.log("Editing Album:",editingAlbum)
    // Filter out empty songs
    const filteredSongs = editingAlbum.songs.filter((song) => song.trim() !== '');
    //const updatedAlbum = Albums.find(album => album.id === editingAlbum.id);
    console.log("updatedAlbum",editingAlbum)
    // Prepare the data to send to the server
    const data = {
      albumTitle,
      songs: filteredSongs,
      image: imageFile, // Assuming the server can handle File objects
      links,
    };

    updateSong.mutate({ id: editingAlbum.id , data });
    setEditingAlbum(null);
  };


const handleCancel = () => {
  setEditingAlbum(null);
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
  console.log("handleLinkChange",editingAlbum)
};

if (isSongLoading || isAlbumLoading) return <div>Loading...</div>;
if (songError) return <div>Error fetching songs: {songError.message}</div>;
if (albumError) return <div>Error fetching albums: {albumError.message}</div>;
  
const openPopup = (type) => {
    setFormType(type);
    setIsOpen(true);
  };  
//   console.log("---->//==>",Albums.data);
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
    // Update the editingAlbum state immutably
    setEditingAlbum((prevAlbum) => ({
      ...prevAlbum, // Copy all existing properties
      songs: [...prevAlbum.songs, ""], // Add a new empty song to the songs array
    }));
  };


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
                {Albums.map((album) => (
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
            style={{ backgroundImage: `url(${imagePreview})` }}
          >
            <div className="absolute top-[1rem] left-[94%] transform -translate-x-1/2 w-8 h-fit gap-5 bg-black bg-opacity-10 rounded-full font-extrabold text-green-700 flex flex-col justify-around pt-5 pb-5 items-center z-10">
              <IoMdAdd className="cursor-pointer" title="Add a song to this Album" />
              <MdOutlineUpdate className="cursor-pointer" title="Update this Album" onClick={() =>handleUpdate(album.id)} />
              <MdDeleteOutline className="cursor-pointer" title="Delete this Album" />
            </div>
          </div>
        )}
        {editingAlbum?.id === album.id ? (
          <>
            <input
              type="text"
              value={editingAlbum.appleMusicLink}
              onChange={(e) => handleLinkChange('appleMusicLink', e.target.value)}
              className="w-full h-12 p-2 border border-green-600"
              placeholder="Apple Music Link"
            />
            <input
              type="text"
              value={editingAlbum.spotifyLink}
              onChange={(e) => handleLinkChange('spotifyLink', e.target.value)}
              className="w-full h-12 p-2 border border-green-600"
              placeholder="Spotify Link"
            />
            <input
              type="text"
              value={editingAlbum.amazonLink}
              onChange={(e) => handleLinkChange('amazonLink', e.target.value)}
              className="w-full h-12 p-2 border border-green-600"
              placeholder="Amazon Link"
            />
            <input
              type="text"
              value={editingAlbum.youtubeLink}
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
            <button className="w-full h-12 flex items-center pl-2 gap-1 bg-green-600 text-white text-sm font-bold border-none cursor-pointer box-border hover:bg-green-700">
              <FaYoutube />Watch on YouTube
            </button>
          </>
        )}
                </div>
                <div className="w-3/5 h-full flex flex-col justify-center items-start box-border">
                {editingAlbum?.id === album.id ? (
          <input
            type="text"
            value={editingAlbum.title}
            onChange={(e) => setAlbumTitle(e.target.value)}
            className="text-2xl font-bold text-green-600 w-full mb-2"
          />
        ) : (
                    <div className="text-2xl font-bold text-green-600 w-full mb-2">{album.title}</div>
        )}
                    {album.songs.map((song, index) => 
                              editingAlbum?.id === album.id ? (
                                <input
                                  key={index}
                                  type="text"
                                  value={song}
                                  onChange={(e) => handleSongChange(index, e.target.value)}
                                  className="text-green-600 w-full m-0 p-1 box-border"
                                />
                              ) : (
                     <p className="text-green-600 w-full m-0 p-1 box-border">{song}</p>
                              )
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
{/*                     
                    <div className="relative w-[27rem] h-auto p-5 flex gap-2 shadow-md">
      <div className="w-3/5 min-h-[30rem] flex flex-col items-center gap-1 box-border">
        {isEditing ? (
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
            style={{ backgroundImage: `url(${imagePreview})` }}
          >
            <div className="absolute top-[1rem] left-[94%] transform -translate-x-1/2 w-8 h-fit gap-5 bg-black bg-opacity-10 rounded-full font-extrabold text-green-700 flex flex-col justify-around pt-5 pb-5 items-center z-10">
              <IoMdAdd className="cursor-pointer" title="Add a song to this Album" />
              <MdOutlineUpdate className="cursor-pointer" title="Update this Album" onClick={handleUpdate} />
              <MdDeleteOutline className="cursor-pointer" title="Delete this Album" />
            </div>
          </div>
        )}
        {isEditing ? (
          <>
            <input
              type="text"
              value={amazonLink.appleMusic}
              onChange={(e) => handleLinkChange('appleMusic', e.target.value)}
              className="w-full h-12 p-2 border border-green-600"
              placeholder="Apple Music Link"
            />
            <input
              type="text"
              value={links.spotify}
              onChange={(e) => handleLinkChange('spotify', e.target.value)}
              className="w-full h-12 p-2 border border-green-600"
              placeholder="Spotify Link"
            />
            <input
              type="text"
              value={links.amazon}
              onChange={(e) => handleLinkChange('amazon', e.target.value)}
              className="w-full h-12 p-2 border border-green-600"
              placeholder="Amazon Link"
            />
            <input
              type="text"
              value={links.youtube}
              onChange={(e) => handleLinkChange('youtube', e.target.value)}
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
            <button className="w-full h-12 flex items-center pl-2 gap-1 bg-green-600 text-white text-sm font-bold border-none cursor-pointer box-border hover:bg-green-700">
              <FaYoutube />Watch on YouTube
            </button>
          </>
        )}
      </div>
      <div className="w-3/5 h-full flex flex-col justify-center items-start box-border relative">
        {isEditing ? (
          <input
            type="text"
            value={albumTitle}
            onChange={(e) => setAlbumTitle(e.target.value)}
            className="text-2xl font-bold text-green-600 w-full mb-2"
          />
        ) : (
          <div className="text-2xl font-bold text-green-600 w-full mb-2">{albumTitle}</div>
        )}
        {songs.map((song, index) =>
          isEditing ? (
            <input
              key={index}
              type="text"
              value={song}
              onChange={(e) => handleSongChange(index, e.target.value)}
              className="text-green-600 w-full m-0 p-1 box-border"
            />
          ) : (
            <p key={index} className="text-green-600 w-full m-0 p-1 box-border">
              {song}
            </p>
          )
        )}
        {isEditing && (
          <button
            onClick={handleAddSong}
            className="absolute bottom-0 right-0 p-2 bg-green-600 text-white rounded-full shadow-md hover:bg-green-700"
            title="Add a new song"
          >
            <IoMdAdd size={20} />
          </button>
        )}
        {isEditing ? (
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
    </div> */}

                {/* <div className="relative w-[27rem] h-auto p-5 flex gap-2 shadow-md">
                    <div className="w-3/5 min-h-[30rem] flex flex-col items-center gap-1 box-border">
                        <div className="w-full p-2 h-4/5 bg-white bg-cover bg-center shadow-md box-border border border-green-600 flex justify-end" style={{ backgroundImage: "url('../../assets/CEO_no_bg.png')" }}>
                        <div className="absolute top-[1rem] left-[94%] transform -translate-x-1/2 w-8 h-fit gap-5 bg-black bg-opacity-10 rounded-full font-extrabold text-green-700 flex flex-col justify-around pt-5 pb-5 items-center z-10">
                        <IoMdAdd className="cursor-pointer" title="Add a song to this Album"/>
                        <MdOutlineUpdate className="cursor-pointer" title="Update this Album"/>
                        <MdDeleteOutline className="cursor-pointer" title="Delete this Album"/>
                        </div>
                        </div>
                        <button className="w-full h-12 flex items-center pl-2 gap-1 bg-green-600 text-white text-sm font-bold border-none cursor-pointer box-border hover:bg-green-700"><FaApple />Buy on Apple Music</button>
                        <button className="w-full h-12 flex items-center pl-2 gap-1 bg-green-600 text-white text-sm font-bold border-none cursor-pointer box-border hover:bg-green-700"><FaSpotify />Listen on Spotify</button>
                        <button className="w-full h-12 flex items-center pl-2 gap-1 bg-green-600 text-white text-sm font-bold border-none cursor-pointer box-border hover:bg-green-700"><FaAmazon />Buy on Amazon</button>
                        <button className="w-full h-12 flex items-center pl-2 gap-1 bg-green-600 text-white text-sm font-bold border-none cursor-pointer box-border hover:bg-green-700"><FaYoutube />Watch on YouTube</button>
                    </div>
                    <div className="w-3/5 h-full flex flex-col justify-center items-start box-border">
                        <div className="text-2xl font-bold text-green-600 w-full mb-2">Balewletaye (ባለውለታየ)</div>
                        <p className="text-green-600 w-full m-0 p-1 box-border">1. Wletew Bezabgn</p>
                        <p className="text-green-600 w-full m-0 p-1 box-border">2. Zariem hyaw new</p>
                        <p className="text-green-600 w-full m-0 p-1 box-border">3. Abetu endante Manew</p>
                        <p className="text-green-600 w-full m-0 p-1 box-border">4. Balewletaye Eyesus</p>
                        <p className="text-green-600 w-full m-0 p-1 box-border">5. Bante Des Ylegnal</p>
                        <p className="text-green-600 w-full m-0 p-1 box-border">6. Gashaye new ersu</p>
                        <p className="text-green-600 w-full m-0 p-1 box-border">7. Halieluya</p>
                        <p className="text-green-600 w-full m-0 p-1 box-border">8. Bemaleda</p>
                        <p className="text-green-600 w-full m-0 p-1 box-border">9. Lamesgnew</p>
                        <p className="text-green-600 w-full m-0 p-1 box-border">10. Bietekrstian</p>
                        <p className="text-green-600 w-full m-0 p-1 box-border">11. Yesus Selamie new</p>
                        <p className="text-green-600 w-full m-0 p-1 box-border">12. Wletew Bezabgn</p>
                        <p className="text-green-600 w-full m-0 p-1 box-border">13. Eski Meskelh sr</p>
                        <button className="w-full max-w-full h-8 flex items-center justify-center gap-1 bg-white text-green-600 text-lg font-bold cursor-pointer border border-green-600 box-border mt-2 hover:bg-green-700 hover:text-white"><FaYoutube />Play the song</button>
                    </div>
                </div>

                <div className="relative w-[27rem] h-auto p-5 flex gap-2 shadow-md">
                    <div className="w-3/5 min-h-[30rem] flex flex-col items-center gap-1 box-border">
                        <div className="w-full p-2 h-4/5 bg-white bg-cover bg-center shadow-md box-border border border-green-600 flex justify-end" style={{ backgroundImage: "url('../../assets/CEO_no_bg.png')" }}>
                        <div className="absolute top-[1rem] left-[94%] transform -translate-x-1/2 w-8 h-fit gap-5 bg-black bg-opacity-10 rounded-full font-extrabold text-green-700 flex flex-col justify-around pt-5 pb-5 items-center z-10">
                        <IoMdAdd className="cursor-pointer" title="Add a song to this Album"/>
                        <MdOutlineUpdate className="cursor-pointer" title="Update this Album"/>
                        <MdDeleteOutline className="cursor-pointer" title="Delete this Album"/>
                        </div>
                        </div>
                        <button className="w-full h-12 flex items-center pl-2 gap-1 bg-green-600 text-white text-sm font-bold border-none cursor-pointer box-border hover:bg-green-700"><FaApple />Buy on Apple Music</button>
                        <button className="w-full h-12 flex items-center pl-2 gap-1 bg-green-600 text-white text-sm font-bold border-none cursor-pointer box-border hover:bg-green-700"><FaSpotify />Listen on Spotify</button>
                        <button className="w-full h-12 flex items-center pl-2 gap-1 bg-green-600 text-white text-sm font-bold border-none cursor-pointer box-border hover:bg-green-700"><FaAmazon />Buy on Amazon</button>
                        <button className="w-full h-12 flex items-center pl-2 gap-1 bg-green-600 text-white text-sm font-bold border-none cursor-pointer box-border hover:bg-green-700"><FaYoutube />Watch on YouTube</button>
                    </div>
                    <div className="w-3/5 h-full flex flex-col justify-center items-start box-border">
                        <div className="text-2xl font-bold text-green-600 w-full mb-2">Balewletaye (ባለውለታየ)</div>
                        <p className="text-green-600 w-full m-0 p-1 box-border">1. Wletew Bezabgn</p>
                        <p className="text-green-600 w-full m-0 p-1 box-border">2. Zariem hyaw new</p>
                        <p className="text-green-600 w-full m-0 p-1 box-border">3. Abetu endante Manew</p>
                        <p className="text-green-600 w-full m-0 p-1 box-border">4. Balewletaye Eyesus</p>
                        <p className="text-green-600 w-full m-0 p-1 box-border">5. Bante Des Ylegnal</p>
                        <p className="text-green-600 w-full m-0 p-1 box-border">6. Gashaye new ersu</p>
                        <p className="text-green-600 w-full m-0 p-1 box-border">7. Halieluya</p>
                        <p className="text-green-600 w-full m-0 p-1 box-border">8. Bemaleda</p>
                        <p className="text-green-600 w-full m-0 p-1 box-border">9. Lamesgnew</p>
                        <p className="text-green-600 w-full m-0 p-1 box-border">10. Bietekrstian</p>
                        <p className="text-green-600 w-full m-0 p-1 box-border">11. Yesus Selamie new</p>
                        <p className="text-green-600 w-full m-0 p-1 box-border">12. Wletew Bezabgn</p>
                        <p className="text-green-600 w-full m-0 p-1 box-border">13. Eski Meskelh sr</p>
                        <button className="w-full max-w-full h-8 flex items-center justify-center gap-1 bg-white text-green-600 text-lg font-bold cursor-pointer border border-green-600 box-border mt-2 hover:bg-green-700 hover:text-white"><FaYoutube />Play the song</button>
                    </div>
                </div>

                <div className="relative w-[27rem] h-auto p-5 flex gap-2 shadow-md">
                    <div className="w-3/5 min-h-[30rem] flex flex-col items-center gap-1 box-border">
                        <div className="w-full p-2 h-4/5 bg-white bg-cover bg-center shadow-md box-border border border-green-600 flex justify-end" style={{ backgroundImage: "url('../../assets/CEO_no_bg.png')" }}>
                        <div className="absolute top-[1rem] left-[94%] transform -translate-x-1/2 w-8 h-fit gap-5 bg-black bg-opacity-10 rounded-full font-extrabold text-green-700 flex flex-col justify-around pt-5 pb-5 items-center z-10">
                        <IoMdAdd className="cursor-pointer" title="Add a song to this Album"/>
                        <MdOutlineUpdate className="cursor-pointer" title="Update this Album"/>
                        <MdDeleteOutline className="cursor-pointer" title="Delete this Album"/>
                        </div>
                        </div>
                        <button className="w-full h-12 flex items-center pl-2 gap-1 bg-green-600 text-white text-sm font-bold border-none cursor-pointer box-border hover:bg-green-700"><FaApple />Buy on Apple Music</button>
                        <button className="w-full h-12 flex items-center pl-2 gap-1 bg-green-600 text-white text-sm font-bold border-none cursor-pointer box-border hover:bg-green-700"><FaSpotify />Listen on Spotify</button>
                        <button className="w-full h-12 flex items-center pl-2 gap-1 bg-green-600 text-white text-sm font-bold border-none cursor-pointer box-border hover:bg-green-700"><FaAmazon />Buy on Amazon</button>
                        <button className="w-full h-12 flex items-center pl-2 gap-1 bg-green-600 text-white text-sm font-bold border-none cursor-pointer box-border hover:bg-green-700"><FaYoutube />Watch on YouTube</button>
                    </div>
                    <div className="w-3/5 h-full flex flex-col justify-center items-start box-border">
                        <div className="text-2xl font-bold text-green-600 w-full mb-2">Balewletaye (ባለውለታየ)</div>
                        <p className="text-green-600 w-full m-0 p-1 box-border">1. Wletew Bezabgn</p>
                        <p className="text-green-600 w-full m-0 p-1 box-border">2. Zariem hyaw new</p>
                        <p className="text-green-600 w-full m-0 p-1 box-border">3. Abetu endante Manew</p>
                        <p className="text-green-600 w-full m-0 p-1 box-border">4. Balewletaye Eyesus</p>
                        <p className="text-green-600 w-full m-0 p-1 box-border">5. Bante Des Ylegnal</p>
                        <p className="text-green-600 w-full m-0 p-1 box-border">6. Gashaye new ersu</p>
                        <p className="text-green-600 w-full m-0 p-1 box-border">7. Halieluya</p>
                        <p className="text-green-600 w-full m-0 p-1 box-border">8. Bemaleda</p>
                        <p className="text-green-600 w-full m-0 p-1 box-border">9. Lamesgnew</p>
                        <p className="text-green-600 w-full m-0 p-1 box-border">10. Bietekrstian</p>
                        <p className="text-green-600 w-full m-0 p-1 box-border">11. Yesus Selamie new</p>
                        <p className="text-green-600 w-full m-0 p-1 box-border">12. Wletew Bezabgn</p>
                        <p className="text-green-600 w-full m-0 p-1 box-border">13. Eski Meskelh sr</p>
                        <button className="w-full max-w-full h-8 flex items-center justify-center gap-1 bg-white text-green-600 text-lg font-bold cursor-pointer border border-green-600 box-border mt-2 hover:bg-green-700 hover:text-white"><FaYoutube />Play the song</button>
                    </div>
                </div>

                <div className="relative w-[27rem] h-auto p-5 flex gap-2 shadow-md">
                    <div className="w-3/5 min-h-[30rem] flex flex-col items-center gap-1 box-border">
                        <div className="w-full p-2 h-4/5 bg-white bg-cover bg-center shadow-md box-border border border-green-600 flex justify-end" style={{ backgroundImage: "url('../../assets/CEO_no_bg.png')" }}>
                        <div className="absolute top-[1rem] left-[94%] transform -translate-x-1/2 w-8 h-fit gap-5 bg-black bg-opacity-10 rounded-full font-extrabold text-green-700 flex flex-col justify-around pt-5 pb-5 items-center z-10">
                        <IoMdAdd className="cursor-pointer" title="Add a song to this Album"/>
                        <MdOutlineUpdate className="cursor-pointer" title="Update this Album"/>
                        <MdDeleteOutline className="cursor-pointer" title="Delete this Album"/>
                        </div>
                        </div>
                        <button className="w-full h-12 flex items-center pl-2 gap-1 bg-green-600 text-white text-sm font-bold border-none cursor-pointer box-border hover:bg-green-700"><FaApple />Buy on Apple Music</button>
                        <button className="w-full h-12 flex items-center pl-2 gap-1 bg-green-600 text-white text-sm font-bold border-none cursor-pointer box-border hover:bg-green-700"><FaSpotify />Listen on Spotify</button>
                        <button className="w-full h-12 flex items-center pl-2 gap-1 bg-green-600 text-white text-sm font-bold border-none cursor-pointer box-border hover:bg-green-700"><FaAmazon />Buy on Amazon</button>
                        <button className="w-full h-12 flex items-center pl-2 gap-1 bg-green-600 text-white text-sm font-bold border-none cursor-pointer box-border hover:bg-green-700"><FaYoutube />Watch on YouTube</button>
                    </div>
                    <div className="w-3/5 h-full flex flex-col justify-center items-start box-border">
                        <div className="text-2xl font-bold text-green-600 w-full mb-2">Balewletaye (ባለውለታየ)</div>
                        <p className="text-green-600 w-full m-0 p-1 box-border">1. Wletew Bezabgn</p>
                        <p className="text-green-600 w-full m-0 p-1 box-border">2. Zariem hyaw new</p>
                        <p className="text-green-600 w-full m-0 p-1 box-border">3. Abetu endante Manew</p>
                        <p className="text-green-600 w-full m-0 p-1 box-border">4. Balewletaye Eyesus</p>
                        <p className="text-green-600 w-full m-0 p-1 box-border">5. Bante Des Ylegnal</p>
                        <p className="text-green-600 w-full m-0 p-1 box-border">6. Gashaye new ersu</p>
                        <p className="text-green-600 w-full m-0 p-1 box-border">7. Halieluya</p>
                        <p className="text-green-600 w-full m-0 p-1 box-border">8. Bemaleda</p>
                        <p className="text-green-600 w-full m-0 p-1 box-border">9. Lamesgnew</p>
                        <p className="text-green-600 w-full m-0 p-1 box-border">10. Bietekrstian</p>
                        <p className="text-green-600 w-full m-0 p-1 box-border">11. Yesus Selamie new</p>
                        <p className="text-green-600 w-full m-0 p-1 box-border">12. Wletew Bezabgn</p>
                        <p className="text-green-600 w-full m-0 p-1 box-border">13. Eski Meskelh sr</p>
                        <button className="w-full max-w-full h-8 flex items-center justify-center gap-1 bg-white text-green-600 text-lg font-bold cursor-pointer border border-green-600 box-border mt-2 hover:bg-green-700 hover:text-white"><FaYoutube />Play the song</button>
                    </div>
                </div>


                <div className="relative w-[27rem] h-auto p-5 flex gap-2 shadow-md">
                    <div className="w-3/5 min-h-[30rem] flex flex-col items-center gap-1 box-border">
                        <div className="w-full p-2 h-4/5 bg-white bg-cover bg-center shadow-md box-border border border-green-600 flex justify-end" style={{ backgroundImage: "url('../../assets/CEO_no_bg.png')" }}>
                        <div className="absolute top-[1rem] left-[94%] transform -translate-x-1/2 w-8 h-fit gap-5 bg-black bg-opacity-10 rounded-full font-extrabold text-green-700 flex flex-col justify-around pt-5 pb-5 items-center z-10">
                        <IoMdAdd className="cursor-pointer" title="Add a song to this Album"/>
                        <MdOutlineUpdate className="cursor-pointer" title="Update this Album"/>
                        <MdDeleteOutline className="cursor-pointer" title="Delete this Album"/>
                        </div>
                        </div>
                        <button className="w-full h-12 flex items-center pl-2 gap-1 bg-green-600 text-white text-sm font-bold border-none cursor-pointer box-border hover:bg-green-700"><FaApple />Buy on Apple Music</button>
                        <button className="w-full h-12 flex items-center pl-2 gap-1 bg-green-600 text-white text-sm font-bold border-none cursor-pointer box-border hover:bg-green-700"><FaSpotify />Listen on Spotify</button>
                        <button className="w-full h-12 flex items-center pl-2 gap-1 bg-green-600 text-white text-sm font-bold border-none cursor-pointer box-border hover:bg-green-700"><FaAmazon />Buy on Amazon</button>
                        <button className="w-full h-12 flex items-center pl-2 gap-1 bg-green-600 text-white text-sm font-bold border-none cursor-pointer box-border hover:bg-green-700"><FaYoutube />Watch on YouTube</button>
                    </div>
                    <div className="w-3/5 h-full flex flex-col justify-center items-start box-border">
                        <div className="text-2xl font-bold text-green-600 w-full mb-2">Balewletaye (ባለውለታየ)</div>
                        <p className="text-green-600 w-full m-0 p-1 box-border">1. Wletew Bezabgn</p>
                        <p className="text-green-600 w-full m-0 p-1 box-border">2. Zariem hyaw new</p>
                        <p className="text-green-600 w-full m-0 p-1 box-border">3. Abetu endante Manew</p>
                        <p className="text-green-600 w-full m-0 p-1 box-border">4. Balewletaye Eyesus</p>
                        <p className="text-green-600 w-full m-0 p-1 box-border">5. Bante Des Ylegnal</p>
                        <p className="text-green-600 w-full m-0 p-1 box-border">6. Gashaye new ersu</p>
                        <p className="text-green-600 w-full m-0 p-1 box-border">7. Halieluya</p>
                        <p className="text-green-600 w-full m-0 p-1 box-border">8. Bemaleda</p>
                        <p className="text-green-600 w-full m-0 p-1 box-border">9. Lamesgnew</p>
                        <p className="text-green-600 w-full m-0 p-1 box-border">10. Bietekrstian</p>
                        <p className="text-green-600 w-full m-0 p-1 box-border">11. Yesus Selamie new</p>
                        <p className="text-green-600 w-full m-0 p-1 box-border">12. Wletew Bezabgn</p>
                        <p className="text-green-600 w-full m-0 p-1 box-border">13. Eski Meskelh sr</p>
                        <button className="w-full max-w-full h-8 flex items-center justify-center gap-1 bg-white text-green-600 text-lg font-bold cursor-pointer border border-green-600 box-border mt-2 hover:bg-green-700 hover:text-white"><FaYoutube />Play the song</button>
                    </div>
                </div> */}

            </div>

            <button className="w-36 h-8 flex self-end items-center justify-center bg-white mt-8 mr-16 text-green-600 text-sm font-semibold cursor-pointer border border-green-600 shadow-md hover:bg-green-700 hover:text-white">See More Albums</button>
            <div className="text-2xl font-bold text-green-600 w-full mb-2 pl-2 pb-2">Single Release</div>

            <div className="w-full h-auto flex flex-wrap justify-start items-center gap-8 max-w-full box-border">
                <div className="relative w-72 h-72 flex flex-col gap-2 shadow-md bg-white">
                <div className="absolute top-[1rem] left-[94%] transform -translate-x-1/2 w-8 h-fit gap-5 bg-black bg-opacity-10 rounded-full font-extrabold text-green-700 flex flex-col justify-around pt-5 pb-5 items-center z-10">
                        <MdOutlineUpdate className="cursor-pointer" title="Update this Song"/>
                        <MdDeleteOutline className="cursor-pointer" title="Delete this Song"/>
                        </div>
                    <div className="w-full h-4/5 bg-white bg-cover bg-center box-border" style={{ backgroundImage: "url('../../assets/CEO_no_bg.png')" }}></div>
                    <div className="w-full h-auto flex flex-col pl-5 gap-1 box-border">
                        <p className="text-green-600 text-lg m-0 p-1 box-border">Wletew Bezabgn</p>
                    </div>
                    <button className="w-full max-w-full h-8 flex items-center justify-center gap-1 bg-white text-green-600 text-lg font-bold cursor-pointer border border-green-600 box-border mt-2 hover:bg-green-700 hover:text-white"><FaYoutube />Play the song</button>
                </div>

                <div className="relative w-72 h-72 flex flex-col gap-2 shadow-md bg-white">
                <div className="absolute top-[1rem] left-[94%] transform -translate-x-1/2 w-8 h-fit gap-5 bg-black bg-opacity-10 rounded-full font-extrabold text-green-700 flex flex-col justify-around pt-5 pb-5 items-center z-10">
                        <MdOutlineUpdate className="cursor-pointer" title="Update this Song"/>
                        <MdDeleteOutline className="cursor-pointer" title="Delete this Song"/>
                        </div>
                    <div className="w-full h-4/5 bg-white bg-cover bg-center box-border" style={{ backgroundImage: "url('../../assets/CEO_no_bg.png')" }}></div>
                    <div className="w-full h-auto flex flex-col pl-5 gap-1 box-border">
                        <p className="text-green-600 text-lg m-0 p-1 box-border">Wletew Bezabgn</p>
                    </div>
                    <button className="w-full max-w-full h-8 flex items-center justify-center gap-1 bg-white text-green-600 text-lg font-bold cursor-pointer border border-green-600 box-border mt-2 hover:bg-green-700 hover:text-white"><FaYoutube />Play the song</button>
                </div>

                <div className="relative w-72 h-72 flex flex-col gap-2 shadow-md bg-white">
                <div className="absolute top-[1rem] left-[94%] transform -translate-x-1/2 w-8 h-fit gap-5 bg-black bg-opacity-10 rounded-full font-extrabold text-green-700 flex flex-col justify-around pt-5 pb-5 items-center z-10">
                        <MdOutlineUpdate className="cursor-pointer" title="Update this Song"/>
                        <MdDeleteOutline className="cursor-pointer" title="Delete this Song"/>
                        </div>
                    <div className="w-full h-4/5 bg-white bg-cover bg-center box-border" style={{ backgroundImage: "url('../../assets/CEO_no_bg.png')" }}></div>
                    <div className="w-full h-auto flex flex-col pl-5 gap-1 box-border">
                        <p className="text-green-600 text-lg m-0 p-1 box-border">Wletew Bezabgn</p>
                    </div>
                    <button className="w-full max-w-full h-8 flex items-center justify-center gap-1 bg-white text-green-600 text-lg font-bold cursor-pointer border border-green-600 box-border mt-2 hover:bg-green-700 hover:text-white"><FaYoutube />Play the song</button>
                </div>

                <div className="relative w-72 h-72 flex flex-col gap-2 shadow-md bg-white">
                <div className="absolute top-[1rem] left-[94%] transform -translate-x-1/2 w-8 h-fit gap-5 bg-black bg-opacity-10 rounded-full font-extrabold text-green-700 flex flex-col justify-around pt-5 pb-5 items-center z-10">
                        <MdOutlineUpdate className="cursor-pointer" title="Update this Song"/>
                        <MdDeleteOutline className="cursor-pointer" title="Delete this Song"/>
                        </div>
                    <div className="w-full h-4/5 bg-white bg-cover bg-center box-border" style={{ backgroundImage: "url('../../assets/CEO_no_bg.png')" }}></div>
                    <div className="w-full h-auto flex flex-col pl-5 gap-1 box-border">
                        <p className="text-green-600 text-lg m-0 p-1 box-border">Wletew Bezabgn</p>
                    </div>
                    <button className="w-full max-w-full h-8 flex items-center justify-center gap-1 bg-white text-green-600 text-lg font-bold cursor-pointer border border-green-600 box-border mt-2 hover:bg-green-700 hover:text-white"><FaYoutube />Play the song</button>
                </div>

                <div className="relative w-72 h-72 flex flex-col gap-2 shadow-md bg-white">
                <div className="absolute top-[1rem] left-[94%] transform -translate-x-1/2 w-8 h-fit gap-5 bg-black bg-opacity-10 rounded-full font-extrabold text-green-700 flex flex-col justify-around pt-5 pb-5 items-center z-10">
                        <MdOutlineUpdate className="cursor-pointer" title="Update this Song"/>
                        <MdDeleteOutline className="cursor-pointer" title="Delete this Song"/>
                        </div>
                    <div className="w-full h-4/5 bg-white bg-cover bg-center box-border" style={{ backgroundImage: "url('../../assets/CEO_no_bg.png')" }}></div>
                    <div className="w-full h-auto flex flex-col pl-5 gap-1 box-border">
                        <p className="text-green-600 text-lg m-0 p-1 box-border">Wletew Bezabgn</p>
                    </div>
                    <button className="w-full max-w-full h-8 flex items-center justify-center gap-1 bg-white text-green-600 text-lg font-bold cursor-pointer border border-green-600 box-border mt-2 hover:bg-green-700 hover:text-white"><FaYoutube />Play the song</button>
                </div>

                <div className="relative w-72 h-72 flex flex-col gap-2 shadow-md bg-white">
                <div className="absolute top-[1rem] left-[94%] transform -translate-x-1/2 w-8 h-fit gap-5 bg-black bg-opacity-10 rounded-full font-extrabold text-green-700 flex flex-col justify-around pt-5 pb-5 items-center z-10">
                        <MdOutlineUpdate className="cursor-pointer" title="Update this Song"/>
                        <MdDeleteOutline className="cursor-pointer" title="Delete this Song"/>
                        </div>
                    <div className="w-full h-4/5 bg-white bg-cover bg-center box-border" style={{ backgroundImage: "url('../../assets/CEO_no_bg.png')" }}></div>
                    <div className="w-full h-auto flex flex-col pl-5 gap-1 box-border">
                        <p className="text-green-600 text-lg m-0 p-1 box-border">Wletew Bezabgn</p>
                    </div>
                    <button className="w-full max-w-full h-8 flex items-center justify-center gap-1 bg-white text-green-600 text-lg font-bold cursor-pointer border border-green-600 box-border mt-2 hover:bg-green-700 hover:text-white"><FaYoutube />Play the song</button>
                </div>
            </div>
            <button className="w-36 h-8 flex self-end items-center justify-center bg-white mt-8 mr-16 text-green-600 text-sm font-semibold cursor-pointer border border-green-600 shadow-md hover:bg-green-700 hover:text-white">See More Songs</button>
        </div>
    );
};

export default Albums;