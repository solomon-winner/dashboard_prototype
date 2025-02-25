import React, { useRef, useState } from 'react';
import {
    isEditingCompanyInfoState,
    titleState,
    contentState,
    companyInfoState,
    cardInfoState,
    isEditingBannerInfoState,
    editingCardIdState,
} from '../state/state';
import { useRecoilState } from 'recoil';
import { useUpdateGeneralInfo } from '../hooks/useGeneralInfo';
import { useBannerCards, useUpdateBannerCard } from '../hooks/useBannerCards.js';

const Information = () => {
    const [isBannerInfoEditing, setIsBannerInfoEditing] = useRecoilState(isEditingBannerInfoState);
    const [editingCardId, setEditingCardId] = useRecoilState(editingCardIdState);
    const [isEditingCompanyInfo, setIsEditingCompanyInfo] = useRecoilState(isEditingCompanyInfoState);
    const [title, setTitle] = useRecoilState(titleState);
    const [content, setContent] = useRecoilState(contentState);
    const [companyInfo, setCompanyInfo] = useRecoilState(companyInfoState);
    const [CardInfo, setCardInfo] = useRecoilState(cardInfoState);
    const [imageFile1, setImageFile1] = useState(null); 
    const [imagePreview1, setImagePreview1] = useState(null); 
    const [imageFile2, setImageFile2] = useState(null); 
    const [imagePreview2, setImagePreview2] = useState(null); 
    const [showSaveButton1, setShowSaveButton1] = useState(false); 
    const [showSaveButton2, setShowSaveButton2] = useState(false); 
    const fileInputRef1 = useRef(null); 
    const fileInputRef2 = useRef(null); 
    const updateGeneralInfo = useUpdateGeneralInfo();
    const updateBannerCard = useUpdateBannerCard();
    const { isLoading, error } = useBannerCards();

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    const handleImageChange1 = (event) => {
        const file = event.target.files[0];
        if (file) {
            setImageFile1(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview1(reader.result);
            };
            reader.readAsDataURL(file);
            setShowSaveButton1(true); 
        }
    };

    const handleImageChange2 = (event) => {
        const file = event.target.files[0];
        if (file) {
            setImageFile2(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview2(reader.result);
            };
            reader.readAsDataURL(file);
            setShowSaveButton2(true); 
        }
    };

    const handleDivClick1 = () => {
        fileInputRef1.current.click();
    };

    const handleDivClick2 = () => {
        fileInputRef2.current.click();
    };

    const handleBannerDivClick = () => {
        setIsBannerInfoEditing(true);
        setEditingCardId(null);
        setIsEditingCompanyInfo(false);
    };

    const handleCardInfoClick = (id) => {
        setEditingCardId(id);
        setIsBannerInfoEditing(false);
        setIsEditingCompanyInfo(false);
    };

    const handleAboutInfoClick = () => {
        setIsEditingCompanyInfo(true);
        setIsBannerInfoEditing(false);
        setEditingCardId(null);
    };

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleContentChange = (e) => {
        setContent(e.target.value);
    };

    const handleCardInfoChange = (id, field, value) => {
        setCardInfo((prevCards) =>
            prevCards.map((card) =>
                card.id === id ? { ...card, [field]: value } : card
            )
        );
    };

    const handleCompanyInfoChange = (e) => {
        setCompanyInfo(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("handleSubmit")
        const formData = new FormData();
        formData.append('bannerTitle', title);
        formData.append('bannerInfo', content);
        formData.append('aboutInfo', companyInfo);
        if (imageFile1) {
            formData.append('bannerPic', imageFile1);

        }
        if (imageFile2) {
            formData.append('aboutPic', imageFile2);

        }

        updateGeneralInfo.mutate(formData);
        setIsBannerInfoEditing(false);
        setEditingCardId(null);
        setIsEditingCompanyInfo(false);
        setShowSaveButton1(false);
        setShowSaveButton2(false);
    };

    const handleCardInfoSave = () => {
        if (!editingCardId) return;

        const updatedCard = CardInfo.find(card => card.id === editingCardId);

        updateBannerCard.mutate({ id: editingCardId, data: updatedCard });
        setEditingCardId(null);
        console.log(updatedCard);
    };
    const handleCancel =() => {
        setIsBannerInfoEditing(false);
        setEditingCardId(null);
        setIsEditingCompanyInfo(false);
        setShowSaveButton1(false);
        setShowSaveButton2(false);
    }

    return (
        <div className="ml-[15rem] bg-white-100 min-h-screen ">
            <div className="flex flex-col justify-between gap-10% items-center">
                <div className="flex justify-center items-center gap-[10%] w-full h-screen">
                    <div className="flex flex-col items-center justify-end gap-1 w-[400px] h-[55vh] font-sans" onClick={handleBannerDivClick}>
                        {isBannerInfoEditing ? (
                            <form onSubmit={handleSubmit}>
                                <input
                                    type="text"
                                    value={title}
                                    onChange={handleTitleChange}
                                    className="border p-2 w-full"
                                />
                                <textarea
                                    value={content}
                                    onChange={handleContentChange}
                                    className="border p-2 w-full h-full"
                                />
                                <div className='flex items-center gap-[1px]'>
                                <button type="submit" className="w-full h-8 flex items-center justify-center gap-1 bg-white text-green-600 text-lg font-bold cursor-pointer border border-green-600 box-border hover:bg-green-700 hover:text-white">
                                    Save
                                </button>
                                <button onClick={handleCancel} className="w-full h-8 flex items-center justify-center gap-1 bg-white text-green-600 text-lg font-bold cursor-pointer border border-green-600 box-border hover:bg-green-700 hover:text-white">
                                     Cancel
                                </button>                                    
                                </div>

                            </form>
                        ) : (
                            <>
                                <h3>{title}</h3>
                                <p>{content}</p>
                            </>
                        )}
                    </div>

                    {/* First Image Div */}
                    <div className="flex flex-col items-center gap-4">
                        <div
                            className="w-[500px] h-[80vh] bg-cover bg-center border-b-[15px] border-[#185601] rounded-b-[60%] cursor-pointer"
                            style={{ backgroundImage: imagePreview1 ? `url(${imagePreview1})` : 'none' }}
                            onClick={handleDivClick1}
                        >
                            {!imagePreview1 && (
                                <span className="text-white text-lg flex items-center justify-center h-full">
                                    Click to upload an image
                                </span>
                            )}
                        </div>
                        {showSaveButton1 && (
                            <button
                                onClick={handleSubmit}
                                className="mt-2 p-2 bg-blue-500 text-white"
                            >
                                Save Image
                            </button>
                        )}
                        <input
                            type="file"
                            ref={fileInputRef1}
                            onChange={handleImageChange1}
                            className="hidden"
                            accept="image/*"
                        />
                    </div>
                </div>
            </div>

            <div className="w-full h-auto flex justify-center max-w-full box-border">
                {CardInfo.map((card) => (
                    <div key={card.id} className="w-[30%] h-auto m-0 mx-1 bg-white" onClick={() => handleCardInfoClick(card.id)}>
                        {editingCardId === card.id ? (
                            <form onSubmit={(e) => { e.preventDefault(); handleCardInfoSave(); }} className="w-full h-[80%]">
                                <textarea
                                    value={card.title}
                                    onChange={(e) => handleCardInfoChange(card.id, "title", e.target.value)}
                                    className="border p-2 w-full"
                                ></textarea>

                                <textarea
                                    value={card.description}
                                    onChange={(e) => handleCardInfoChange(card.id, "description", e.target.value)}
                                    className="border p-2 w-full h-full"
                                ></textarea>
                                <div className='flex items-center gap-[1px]'>
                                <button type="submit" className="w-full h-8 flex items-center justify-center gap-1 bg-white text-green-600 text-lg font-bold cursor-pointer border border-green-600 box-border hover:bg-green-700 hover:text-white">
                                    Save
                                </button>
                                <button onClick={handleCancel} className="w-full h-8 flex items-center justify-center gap-1 bg-white text-green-600 text-lg font-bold cursor-pointer border border-green-600 box-border hover:bg-green-700 hover:text-white">
                                     Cancel
                                </button>                                    
                                </div>
                            </form>
                        ) : (
                            <>
                                <div className="text-lg font-bold text-green-900 m-2 border-b border-green-900">
                                    {card.title}
                                </div>
                                <div className="text-lg text-green-900 p-2">
                                    {card.description}
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>

            <div className="mt-32 w-full flex justify-between gap-[5%] items-center h-auto">
    {/* Second Image Div */}
    <div className="flex flex-col items-center w-3/5">
        <div
            className="w-full h-[500px] bg-cover bg-center cursor-pointer"
            style={{ backgroundImage: imagePreview2 ? `url(${imagePreview2})` : 'none' }}
            onClick={handleDivClick2}
        >
            {!imagePreview2 && (
                <span className="text-white text-lg border-[1px] border-[#185601] flex items-center justify-center h-full">
                    Click to upload an image
                </span>
            )}
        </div>
        {showSaveButton2 && (
            <button
                onClick={handleSubmit}
                className="mt-2 p-2 bg-blue-500 text-white"
            >
                Save Image 
            </button>
        )}
        <input
            type="file"
            ref={fileInputRef2}
            onChange={handleImageChange2}
            className="hidden"
            accept="image/*"
        />
    </div>

    <div className="w-2/5 p-2 flex flex-col items-center justify-center text-green-900 font-sans h-[500px]" onClick={handleAboutInfoClick}>
        <h2>About</h2>
        {isEditingCompanyInfo ?
            <form onSubmit={handleSubmit} className='w-full h-full'>
                <textarea
                    value={companyInfo}
                    onChange={handleCompanyInfoChange}
                    className="border p-2 w-full h-full"
                ></textarea>
                                <div className='flex items-center gap-[1px]'>
                                <button type="submit" className="w-full h-8 flex items-center justify-center gap-1 bg-white text-green-600 text-lg font-bold cursor-pointer border border-green-600 box-border hover:bg-green-700 hover:text-white">
                                    Save
                                </button>
                                <button onClick={handleCancel} className="w-full h-8 flex items-center justify-center gap-1 bg-white text-green-600 text-lg font-bold cursor-pointer border border-green-600 box-border hover:bg-green-700 hover:text-white">
                                     Cancel
                                </button>                                    
                                </div>
            </form>
            :
            <p>
                {companyInfo}
            </p>
        }
    </div>
</div>
</div>
    );
};

export default Information;