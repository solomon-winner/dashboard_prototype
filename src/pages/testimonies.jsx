import { useRecoilValue } from "recoil";
import { useTestimonies } from "../hooks/useTestimonies.js";
import { testimoniesState } from "../state/state";
import TestimonyDiv from "../components/atoms/testimonyDiv.jsx";

const Testimonies = () => {
  const {isLoading, error} = useTestimonies();
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
{
  testimonies.map((testimony) => (
    <li key = {testimony.id}>
      <TestimonyDiv email = {testimony.email} testimony = {testimony.testimony} />

    </li>
  ))
}
    </div>
    )
}

export default Testimonies;