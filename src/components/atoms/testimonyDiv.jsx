import { useRecoilValue } from "recoil";
import { useTestimonies } from "../hooks/useTestimonies.js";
import { testimoniesState } from "../state/state";

const TestimonyDiv = () => {
      const {isLoading, error} = useTestimonies();
      const testimonies = useRecoilValue(testimoniesState);
    
      if (isLoading) return <div>Loading...</div>
      if (error) return <div>Error: {error.message}</div>;
    
      console.log("------->",testimonies);
      const handleVerify = () => {
        updateTestimony.mutate({ id, data: { isVerified: true } });
      };
      const handleRemove = () => {
        removeTestimony.mutate({id});
      };
      
    return(
        <>
 {
  testimonies.map((testimony) => (
    <div className="w-[95%] shadow min-h-32 mx-auto box-border p-1" key={testimony.id}>
    <div className="w-full text-green-800 font-bold px-6 ">
        {testimony.email}
    </div>
    <hr />
    <div className="w-full min-h-24 p-3 box-border italic text-green-800">
    {testimony.testimony}
   </div>
    <div className="w-full h-auto flex text-left justify-end">
        <div className="w-fit h-auto flex gap-2 text-left px-2 pb-3">
        <button onClick = {handleVerify} className="w-36 max-w-full h-8 flex items-center justify-center gap-1 bg-white text-green-600 text-sm font-semibold cursor-pointer border border-green-600 box-border mt-2 hover:bg-green-700 hover:text-white">Verify this Testimony</button>
        <button onClick = {handleRemove} className="w-36 max-w-full h-8 flex items-center justify-center gap-1 bg-white text-green-600 text-sm font-semibold cursor-pointer border border-green-600 box-border mt-2 hover:bg-red-700 hover:text-white">Delete this Testimony</button>

        </div>
        </div>
  </div>  
  ))
}       

      
      </>


    );
}

export default TestimonyDiv;