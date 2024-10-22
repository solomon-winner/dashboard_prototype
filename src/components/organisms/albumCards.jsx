import { FaSpotify, FaApple, FaAmazon, FaYoutube } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { MdOutlineUpdate, MdDeleteOutline } from "react-icons/md";

const Albums = () => {

    return (
        <div className="w-full h-auto flex flex-col mt-5 text-left">
            <div className="w-full h-auto flex text-left justify-end">
            <div className="w-fit h-auto flex gap-2 text-left ">
            <button className="w-32 max-w-full h-8 flex items-center justify-center gap-1 bg-white text-green-600 text-sm font-bold cursor-pointer border border-green-600 box-border mt-2 hover:bg-green-700 hover:text-white"><IoMdAdd />Add  song</button>
            <button className="w-32 max-w-full h-8 flex items-center justify-center gap-1 bg-white text-green-600 text-sm font-bold cursor-pointer border border-green-600 box-border mt-2 hover:bg-green-700 hover:text-white"><IoMdAdd />Add  Album</button>

            </div>
            </div>
            <div className="text-2xl font-bold text-green-600 w-full mb-2 pl-2 pb-2">Albums</div>
            <div className="w-full h-auto flex flex-wrap justify-start items-center gap-8 max-w-full box-border">
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

            </div>

            <button className="w-36 h-8 flex self-end items-center justify-center bg-white mt-8 mr-16 text-green-600 text-sm font-semibold cursor-pointer border border-green-600 shadow-md hover:bg-green-700 hover:text-white">See More Albums</button>
            <div className="text-2xl font-bold text-green-600 w-full mb-2 pl-2 pb-2">Single Release</div>

            <div className="w-full h-auto flex flex-wrap justify-start items-center gap-8 max-w-full box-border">
                <div className="relative w-72 h-72 flex flex-col gap-2 shadow-md bg-white">
                <div className="absolute top-[1rem] left-[94%] transform -translate-x-1/2 w-8 h-fit gap-5 bg-black bg-opacity-10 rounded-full font-extrabold text-green-700 flex flex-col justify-around pt-5 pb-5 items-center z-10">
                        <MdOutlineUpdate className="cursor-pointer" title="Update this Album"/>
                        <MdDeleteOutline className="cursor-pointer" title="Delete this Album"/>
                        </div>
                    <div className="w-full h-4/5 bg-white bg-cover bg-center box-border" style={{ backgroundImage: "url('../../assets/CEO_no_bg.png')" }}></div>
                    <div className="w-full h-auto flex flex-col pl-5 gap-1 box-border">
                        <p className="text-green-600 text-lg m-0 p-1 box-border">Wletew Bezabgn</p>
                    </div>
                    <button className="w-full max-w-full h-8 flex items-center justify-center gap-1 bg-white text-green-600 text-lg font-bold cursor-pointer border border-green-600 box-border mt-2 hover:bg-green-700 hover:text-white"><FaYoutube />Play the song</button>
                </div>

                <div className="relative w-72 h-72 flex flex-col gap-2 shadow-md bg-white">
                <div className="absolute top-[1rem] left-[94%] transform -translate-x-1/2 w-8 h-fit gap-5 bg-black bg-opacity-10 rounded-full font-extrabold text-green-700 flex flex-col justify-around pt-5 pb-5 items-center z-10">
                        <MdOutlineUpdate className="cursor-pointer" title="Update this Album"/>
                        <MdDeleteOutline className="cursor-pointer" title="Delete this Album"/>
                        </div>
                    <div className="w-full h-4/5 bg-white bg-cover bg-center box-border" style={{ backgroundImage: "url('../../assets/CEO_no_bg.png')" }}></div>
                    <div className="w-full h-auto flex flex-col pl-5 gap-1 box-border">
                        <p className="text-green-600 text-lg m-0 p-1 box-border">Wletew Bezabgn</p>
                    </div>
                    <button className="w-full max-w-full h-8 flex items-center justify-center gap-1 bg-white text-green-600 text-lg font-bold cursor-pointer border border-green-600 box-border mt-2 hover:bg-green-700 hover:text-white"><FaYoutube />Play the song</button>
                </div>

                <div className="relative w-72 h-72 flex flex-col gap-2 shadow-md bg-white">
                <div className="absolute top-[1rem] left-[94%] transform -translate-x-1/2 w-8 h-fit gap-5 bg-black bg-opacity-10 rounded-full font-extrabold text-green-700 flex flex-col justify-around pt-5 pb-5 items-center z-10">
                        <MdOutlineUpdate className="cursor-pointer" title="Update this Album"/>
                        <MdDeleteOutline className="cursor-pointer" title="Delete this Album"/>
                        </div>
                    <div className="w-full h-4/5 bg-white bg-cover bg-center box-border" style={{ backgroundImage: "url('../../assets/CEO_no_bg.png')" }}></div>
                    <div className="w-full h-auto flex flex-col pl-5 gap-1 box-border">
                        <p className="text-green-600 text-lg m-0 p-1 box-border">Wletew Bezabgn</p>
                    </div>
                    <button className="w-full max-w-full h-8 flex items-center justify-center gap-1 bg-white text-green-600 text-lg font-bold cursor-pointer border border-green-600 box-border mt-2 hover:bg-green-700 hover:text-white"><FaYoutube />Play the song</button>
                </div>

                <div className="relative w-72 h-72 flex flex-col gap-2 shadow-md bg-white">
                <div className="absolute top-[1rem] left-[94%] transform -translate-x-1/2 w-8 h-fit gap-5 bg-black bg-opacity-10 rounded-full font-extrabold text-green-700 flex flex-col justify-around pt-5 pb-5 items-center z-10">
                        <MdOutlineUpdate className="cursor-pointer" title="Update this Album"/>
                        <MdDeleteOutline className="cursor-pointer" title="Delete this Album"/>
                        </div>
                    <div className="w-full h-4/5 bg-white bg-cover bg-center box-border" style={{ backgroundImage: "url('../../assets/CEO_no_bg.png')" }}></div>
                    <div className="w-full h-auto flex flex-col pl-5 gap-1 box-border">
                        <p className="text-green-600 text-lg m-0 p-1 box-border">Wletew Bezabgn</p>
                    </div>
                    <button className="w-full max-w-full h-8 flex items-center justify-center gap-1 bg-white text-green-600 text-lg font-bold cursor-pointer border border-green-600 box-border mt-2 hover:bg-green-700 hover:text-white"><FaYoutube />Play the song</button>
                </div>

                <div className="relative w-72 h-72 flex flex-col gap-2 shadow-md bg-white">
                <div className="absolute top-[1rem] left-[94%] transform -translate-x-1/2 w-8 h-fit gap-5 bg-black bg-opacity-10 rounded-full font-extrabold text-green-700 flex flex-col justify-around pt-5 pb-5 items-center z-10">
                        <MdOutlineUpdate className="cursor-pointer" title="Update this Album"/>
                        <MdDeleteOutline className="cursor-pointer" title="Delete this Album"/>
                        </div>
                    <div className="w-full h-4/5 bg-white bg-cover bg-center box-border" style={{ backgroundImage: "url('../../assets/CEO_no_bg.png')" }}></div>
                    <div className="w-full h-auto flex flex-col pl-5 gap-1 box-border">
                        <p className="text-green-600 text-lg m-0 p-1 box-border">Wletew Bezabgn</p>
                    </div>
                    <button className="w-full max-w-full h-8 flex items-center justify-center gap-1 bg-white text-green-600 text-lg font-bold cursor-pointer border border-green-600 box-border mt-2 hover:bg-green-700 hover:text-white"><FaYoutube />Play the song</button>
                </div>

                <div className="relative w-72 h-72 flex flex-col gap-2 shadow-md bg-white">
                <div className="absolute top-[1rem] left-[94%] transform -translate-x-1/2 w-8 h-fit gap-5 bg-black bg-opacity-10 rounded-full font-extrabold text-green-700 flex flex-col justify-around pt-5 pb-5 items-center z-10">
                        <MdOutlineUpdate className="cursor-pointer" title="Update this Album"/>
                        <MdDeleteOutline className="cursor-pointer" title="Delete this Album"/>
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