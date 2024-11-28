import React, { useState } from 'react';
import {
    isEditingState,
    titleState,
    contentState,
    companyInfoState,
    cardInfoState,
    cardTitleState,
  } from '../state/state';
  
 const Information = () => {
    const [isEditing, setIsEditing] = useRecoilState(isEditingState);
    const [title, setTitle] = useRecoilState(titleState);
    const [content, setContent] = useRecoilState(contentState);
    const [companyInfo, setCompanyInfo] = useRecoilState(companyInfoState);
    const [CardInfo, setCardInfo] = useRecoilState(cardInfoState);
    const [CardTitle, setCardTitle] = useRecoilState(cardTitleState);
  
    const handleDivClick = () => {
        setIsEditing(true);
    };

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleContentChange = (e) => {
        setContent(e.target.value);
    };

    const handleCardInfoChange = (e) => {
        setCardInfo(e.target.value);
    };

    const handleCompanyInfoChange = (e) => {
        setCompanyInfo(e.target.value);
    };
    const handleSave = () => {
        setIsEditing(false);
    };

    return (
        <div className="ml-[15rem] bg-white-100 min-h-screen ">
            <div className="flex flex-col justify-between gap-10% items-center">

    <div className="flex justify-center items-center gap-[10%] w-full h-screen">
   <div className="flex flex-col items-center justify-end gap-1 w-[400px] h-[55vh] font-sans" onClick={handleDivClick}>
            {isEditing ? (
                <>
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
                    <button onClick={handleSave} className="mt-2 p-2 bg-blue-500 text-white">
                        Save
                    </button>
                </>
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
            <div className="w-[30%] h-auto m-0 mx-1 bg-white" onClick={handleDivClick}>
            { isEditing?(
                <>
                <textarea 
                value={CardTitle}
                onChange={(e) => setCardTitle(e.target.value)}
                className="border p-2 w-full">
                </textarea>
                <textarea 
                value={CardInfo}
                onChange={handleCardInfoChange}
                className="border p-2 w-full h-full">
                </textarea>
                
                <button onClick={handleSave} className="mt-2 p-2 bg-blue-500 text-white">
                        Save
                    </button>
                
                </>):(
                    <><div className="text-lg font-bold text-green-900 m-2 border-b border-green-900">
                    {CardTitle}
                </div>
                <div className="text-lg text-green-900 p-2">
                    {CardInfo}
                </div></>)}
            </div>
            <div className="w-[30%] h-auto m-0 mx-1 bg-white" onClick={handleDivClick}>
            { isEditing?(
                <>
                <textarea 
                value={CardTitle}
                onChange={(e) => setCardTitle(e.target.value)}
                className="border p-2 w-full">
                </textarea>
                <textarea 
                value={CardInfo}
                onChange={handleCardInfoChange}
                className="border p-2 w-full h-full">
                </textarea>
                
                <button onClick={handleSave} className="mt-2 p-2 bg-blue-500 text-white">
                        Save
                    </button>
                
                </>):(
                    <><div className="text-lg font-bold text-green-900 m-2 border-b border-green-900">
                    {CardTitle}
                </div>
                <div className="text-lg text-green-900 p-2">
                    {CardInfo}
                </div></>)}
            </div>
            <div className="w-[30%] h-auto m-0 mx-1 bg-white" onClick={handleDivClick}>
            { isEditing?(
                <>
                <textarea 
                value={CardTitle}
                onChange={(e) => setCardTitle(e.target.value)}
                className="border p-2 w-full">
                </textarea>
                <textarea 
                value={CardInfo}
                onChange={handleCardInfoChange}
                className="border p-2 w-full h-full">
                </textarea>
                
                <button onClick={handleSave} className="mt-2 p-2 bg-blue-500 text-white">
                        Save
                    </button>
                
                </>):(
                    <><div className="text-lg font-bold text-green-900 m-2 border-b border-green-900">
                    {CardTitle}
                </div>
                <div className="text-lg text-green-900 p-2">
                    {CardInfo}
                </div></>)}
            </div>
        </div>

        <div className="mt-32 w-full flex justify-center items-center gap-[10%] h-auto">
      <div className="w-2/5 h-[500px] bg-white bg-cover bg-center"></div>
      <div className="w-2/5 p-2 flex flex-col items-center justify-center text-green-900 font-sans h-[500px]" onClick={handleDivClick}>
        <h2>About</h2>
        {isEditing? 
        <>
        <textarea
        value={companyInfo}
        onChange={handleCompanyInfoChange}
        className="border p-2 w-full h-full"
        >
            
        </textarea>
        <button onClick={handleSave} className="mt-2 p-2 bg-blue-500 text-white">
          Save
        </button>
        </>
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
