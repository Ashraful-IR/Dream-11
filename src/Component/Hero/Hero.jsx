import React from "react";

const Hero = () => {
  return (
    <div className='bg-[url("/src/assets/bg-shadow.png")] bg-cover bg-center w-full h-full flex items-center justify-center bg-[#131313] flex-col gap-10 p-10 rounded-2xl'>
      <div className="container mx-auto flex flex-col items-center justify-center text-center">
        <img src="/src/assets/banner-main.png" alt="" />
      </div>
      <div className="space-y-4">
        <p className="text-[#ffffff] font-bold text-[40px] text-center">
          Assemble Your Ultimate Dream 11 Cricket Team
        </p>
        <p className="text-[#ffffffb3] font-medium text-[24px] text-center">
          Beyond Boundaries Beyond Limits
        </p>
      </div>
      <div className="border border-[#e7fe29] bg-[#ffffff0d] rounded-2xl px-6 py-3">
        <button className="btn btn-soft text-[#000000] border border-[#e7fe29] rounded-xl bg-[#e7fe29] text-[16px] py-3.5 px-5 font-bold">
          Claim Free Credit
        </button>
      </div>
    </div>
  );
};

export default Hero;
