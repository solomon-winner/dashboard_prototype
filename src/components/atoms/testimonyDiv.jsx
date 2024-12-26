const TestimonyDiv = () => {
    return(

        <div className="w-[95%] shadow min-h-32 mx-auto box-border p-1">
        <div className="w-full text-green-800 font-bold px-6 ">
            Solomon Yalew
        </div>
        <hr />
        <div className="w-full min-h-24 p-3 box-border italic text-green-800">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium exercitationem obcaecati quae officia rem! Autem, voluptatum nemo repellendus alias asperiores nobis sapiente impedit illo, incidunt qui maiores, praesentium deserunt a.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque neque dignissimos dolor sunt veritatis optio itaque quaerat tempore molestias laboriosam laudantium earum ex, eaque impedit ducimus? Accusamus maxime sapiente repudiandae!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error consequatur repellendus nisi expedita in cupiditate, recusandae libero dolor reprehenderit, delectus eligendi labore eveniet quia modi. Facilis repellat ea est architecto.
        </div>
        <div className="w-full h-auto flex text-left justify-end">
            <div className="w-fit h-auto flex gap-2 text-left px-2 pb-3">
            <button className="w-36 max-w-full h-8 flex items-center justify-center gap-1 bg-white text-green-600 text-sm font-semibold cursor-pointer border border-green-600 box-border mt-2 hover:bg-green-700 hover:text-white">Verify this Testimony</button>
            <button className="w-36 max-w-full h-8 flex items-center justify-center gap-1 bg-white text-green-600 text-sm font-semibold cursor-pointer border border-green-600 box-border mt-2 hover:bg-red-700 hover:text-white">Delete this Testimony</button>

            </div>
            </div>
      </div>

    );
}

export default TestimonyDiv;