import React from "react";

const Footer = () => {
  return (
    <div className="container mx-auto bg-[#06091a] ">
      <div className="flex justify-center items-center">
        <img src="/src/assets/logo-footer.png" alt="" />
      </div>
      <div className="flex justify-between items-center gap-6 px-40 py-10 ">
        <div className="flex flex-col justify-between items-start gap-4 p-5 ">
          <p className="text-[#ffffff] text-[14px]">About Us</p>
          <p className="text-[#ffffff] text-[10px]">
            We are a passionate team dedicated <br /> to providing the best
            services <br /> to our customers.
          </p>
        </div>
        <div className="flex flex-col justify-between items-start gap-4 p-5 ">
          <p className="text-[#ffffff] text-[14px]">Quick Links</p>
          <ul className="text-[#ffffff] text-[10px]">
            <li>Home</li>
            <li>Fixture</li>

            <li>Teams</li>
            <li>Schedules</li>
          </ul>
        </div>
        <div className="flex flex-col justify-between items-start gap-4 p-5 ">
          <p className="text-[#ffffff] text-[14px]">Subscribe</p>
          <p className="text-[#ffffff] text-[14px]">
            Subscribe to our newsletter for the <br /> latest updates.
          </p>
          <div>
            <input
              className="border border-[#e7fe29] text-amber-50 bg-[#06091a] ounded-r-none rounded-l-xl px-4 py-1.5 placeholder:text-[#ffffff] placeholder:text-[10px]"
              type="email"
              placeholder="Enter your email"
            />
            <button className="btn btn-soft text-[#000000] border border-[#e7fe29] rounded-r-xl rounded-l-none bg-[#e7fe29] text-[16px] py-3.5 px-5 font-bold">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
