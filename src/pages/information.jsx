import React, { useState } from 'react';

 const Information = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [title, setTitle] = useState('Psalms 95: 1-6');
    const [content, setContent] = useState('"... Sing joyful songs to the LORD! Praise the mighty rock where we are safe. Come to worship him with thankful hearts and songs of praise. the LORD is the greatest God, king over all other gods..."');
    const [companyInfo, setCompanyInfo] = useState('Our company is dedicated to providing the best service possible to our customers. We strive to provide the best quality products and services to our customers. Our team is dedicated to providing the best customer service possible. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum, molestias? Beatae repudiandae harum saepe voluptatibus illum. Expedita sit consequatur sapiente dolorum culpa, nam atque unde soluta officiis vitae similique enim! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus aliquid, laboriosam ipsum hic voluptatum molestias ipsa molestiae iusto corporis quas magni necessitatibus atque odit cum repellendus itaque explicabo ullam. Autem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Non neque fuga impedit ullam, dolore molestiae reiciendis facere ab omnis, qui fugiat, voluptatibus explicabo exercitationem! Mollitia architecto dignissimos nulla laboriosam quia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum facere architecto, nostrum dicta voluptas animi, impedit sunt reiciendis natus fugiat possimus excepturi sed eveniet ratione consequatur consequuntur similique? Cupiditate, ducimus?');
    const [CardInfo, setCardInfo] = useState('Become a partner in sharing the gospel through music. Whether through prayer, financial support, or simply sharing the message, you can help spread the transformative power of worship to people around the world.');
    const [CardTitle, setCardTitle] = useState('Join the Mission of Spreading God\'s Love');

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
