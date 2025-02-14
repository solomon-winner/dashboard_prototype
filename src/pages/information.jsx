import React from 'react';
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
import { useUpdateGeneralInfo,  } from '../hooks/useGeneralInfo';
import { useUpdateBannerCard } from '../hooks/useBannerCards.js';

 const Information = () => {
    const [isBannerInfoEditing, setIsBannerInfoEditing] = useRecoilState(isEditingBannerInfoState);
    const [editingCardId, setEditingCardId] = useRecoilState(editingCardIdState);
    const [isEditingCompanyInfo, setIsEditingCompanyInfo] = useRecoilState(isEditingCompanyInfoState);
    const [title, setTitle] = useRecoilState(titleState);
    const [content, setContent] = useRecoilState(contentState);
    const [companyInfo, setCompanyInfo] = useRecoilState(companyInfoState);
    const [CardInfo, setCardInfo] = useRecoilState(cardInfoState);
    const updateGeneralInfo = useUpdateGeneralInfo();
    const updateBannerCard = useUpdateBannerCard();

    const handleBannerDivClick = () => {
        setIsBannerInfoEditing(true);
        setEditingCardId(null);
        setIsEditingCompanyInfo(false);
    };
    const handleCardInfoClick = (_id) => {
        setEditingCardId(_id);
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

    const handleCardInfoChange = (_id, field, value) => {
        setCardInfo((prevCards) =>
            prevCards.map((card) =>
                card._id === _id ? { ...card, [field]: value } : card
            )
        );
    };

    const handleCompanyInfoChange = (e) => {
        setCompanyInfo(e.target.value);
    };

    const handleSubmit = (e) => {
      e.preventDefault();
        const formData = {
            bannerTitle: title,
            bannerInfo: content,
            aboutInfo: companyInfo
        }
      console.log("Form_data:",formData)
      updateGeneralInfo.mutate(formData);
      setIsBannerInfoEditing(false);
      setEditingCardId(null);
      setIsEditingCompanyInfo(false);
    }

    const handleCardInfoSave = () => {
        if (!editingCardId) return; 
        
        const updatedCard = CardInfo.find(card => card._id === editingCardId);
        
        if (updatedCard) {
            console.log("Updated Card:", updatedCard);
        }
        
        updateBannerCard.mutate(updatedCard);
        setEditingCardId(null);
        console.log(updatedCard);
    };

    return (
        <div className="ml-[15rem] bg-white-100 min-h-screen ">
            <div className="flex flex-col justify-between gap-10% items-center">

   <div className="flex justify-center items-center gap-[10%] w-full h-screen">
   <div className="flex flex-col items-center justify-end gap-1 w-[400px] h-[55vh] font-sans" onClick={handleBannerDivClick}>
            {isBannerInfoEditing ? (
                <form onSubmit={handleSubmit} >
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
                    <button type = "submit" className="mt-2 p-2 bg-blue-500 text-white">
                        Save
                    </button>
                </form>
                
            ) : (
                <>
                    <h3>{title}</h3>
                    <p>{content}</p>
                </>
            )}
        </div>

          <div
        className="w-[500px] h-[80vh] bg-cover bg-center border-b-[15px] border-[#185601] rounded-b-[60%]">

      </div>
    </div>

    </div>

    <div className="w-full h-auto flex justify-center max-w-full box-border">
            {CardInfo.map((card) => (
                    <div key={card._id} className="w-[30%] h-auto m-0 mx-1 bg-white" onClick={() => handleCardInfoClick(card._id)}>
                    {editingCardId === card._id ? (
                        <form onSubmit={(e) => { e.preventDefault(); handleCardInfoSave(); }} className="w-full h-full">
                            <textarea
                                value={card.title}
                                onChange={(e) => handleCardInfoChange(card._id, "title", e.target.value)}
                                className="border p-2 w-full"
                            ></textarea>

                            <textarea
                                value={card.description}
                                onChange={(e) => handleCardInfoChange(card._id, "description", e.target.value)}
                                className="border p-2 w-full h-full"
                            ></textarea>
                            <button type="submit" className="mt-2 p-2 bg-blue-500 text-white">
                                Save
                            </button>
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

        <div className="mt-32 w-full flex justify-center items-center gap-[10%] h-auto">
      <div className="w-2/5 h-[500px] bg-white bg-cover bg-center"></div>
      <div className="w-2/5 p-2 flex flex-col items-center justify-center text-green-900 font-sans h-[500px]" onClick={handleAboutInfoClick}>
        <h2>About</h2>
        {isEditingCompanyInfo?
        <form onSubmit={handleSubmit} className='w-full h-full'>
        <textarea
        value={companyInfo}
        onChange={handleCompanyInfoChange}
        className="border p-2 w-full h-full"
        >
            
        </textarea>
        <button type='submit' className="mt-2 p-2 bg-blue-500 text-white">
          Save
        </button>
        </form>
        :
        <p>
            {companyInfo}
        </p>
        }
      </div>
    </div>
 </div>   
  )
 }

 export default Information;