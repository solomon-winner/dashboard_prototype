import React from 'react';
import { useUpdateTestimony, useRemoveTestimony } from '../../hooks/useTestimonies.js';

const TestimonyDiv = ({ id, email, testimony }) => {
  const updateTestimony = useUpdateTestimony();
  const removeTestimony = useRemoveTestimony();

  const handleVerify = () => {
    updateTestimony.mutate({ id, data: { isVerified: true } });
  };

  const handleRemove = () => {
    removeTestimony.mutate(id);
  };

  return (
    <div className="w-[95%] shadow min-h-32 mx-auto box-border p-1">
      <div className="w-full text-green-800 font-bold px-6 ">
        {email}
      </div>
      <hr />
      <div className="w-full min-h-24 p-3 box-border italic text-green-800">
        {testimony}
      </div>
      <div className="w-full h-auto flex text-left justify-end">
        <div className="w-fit h-auto flex gap-2 text-left px-2 pb-3">
          <button
            className="w-36 max-w-full h-8 flex items-center justify-center gap-1 bg-white text-green-600 text-sm font-semibold cursor-pointer border border-green-600 box-border mt-2 hover:bg-green-700 hover:text-white"
            onClick={handleVerify}
          >
            Verify this Testimony
          </button>
          <button
            className="w-36 max-w-full h-8 flex items-center justify-center gap-1 bg-white text-green-600 text-sm font-semibold cursor-pointer border border-green-600 box-border mt-2 hover:bg-red-700 hover:text-white"
            onClick={handleRemove}
          >
            Delete this Testimony
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonyDiv;