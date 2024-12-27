import { useRecoilValue } from "recoil";
import { useTestimonies } from "../hooks/useTestimonies.js";
import { testimoniesState } from "../state/state";

const Testimonies = () => {
  const {data,isLoading, error} = useTestimonies();
  const testimonies = useRecoilValue(testimoniesState);

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>;

  console.log("------->",testimonies);
  
    return (
    <div className="ml-[13rem] bg-white-100 min-h-screen flex flex-col gap-5">
      <div className=" max-w-5xl mx-auto p-6 ">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        <div className="bg-white rounded-lg shadow p-6 transition-transform transform hover:-translate-y-1">
            <div className="text-4xl font-bold text-green-900 my-4" id="subscribersCount">300</div>
            <h2 className="text-base font-semibold text-green-900">Total Testimonies</h2>

          </div>
          <div className="bg-white rounded-lg shadow p-6 transition-transform transform hover:-translate-y-1">
            <div className="text-4xl font-bold text-green-900 my-4" id="testimoiesCount">200</div>
            <h2 className="text-base font-semibold text-green-900">Verified of Testimonies</h2>

          </div>
          <div className="bg-white rounded-lg shadow p-6 transition-transform transform hover:-translate-y-1">
            <div className="text-4xl font-bold text-green-900 my-4" id="testimoiesCount">90%</div>
            <h2 className="text-base font-semibold text-green-900">Percentage of Verified Testimonies</h2>

          </div>
        </div>
      </div>

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
    </div>
    )
}

export default Testimonies;