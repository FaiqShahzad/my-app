import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const RequestPage = () => {
  return (
    <div className="h-[60%] bg-[#f1f5f9] px-[12vw] py-[8vh]">
      <div className="flex flex-col items-center justify-between ">
        <div className="relative">
          <svg className="absolute left-[99%] top-[-2%] hidden h-16 w-16 fill-[#CBD5E1] text-white lg:flex">
            <path d="M4.532 30.45C15.785 23.25 24.457 12.204 29.766.199c.034-.074-.246-.247-.3-.186-4.227 5.033-9.298 9.282-14.372 13.162C10 17.07 4.919 20.61.21 24.639c-1.173 1.005 2.889 6.733 4.322 5.81M18.96 42.198c12.145-4.05 24.12-8.556 36.631-12.365.076-.024.025-.349-.055-.347-6.542.087-13.277.083-19.982.827-6.69.74-13.349 2.24-19.373 5.197-1.53.75 1.252 7.196 2.778 6.688"></path>
          </svg>

          <h1 className="py-4 text-center font-[PlayfairDisplay] text-4xl font-bold text-black lg:text-5xl">
            Say goodbye to long queues, big <br />
            updates, and <span className="text-[#10B981]">confusion</span>.
          </h1>
        </div>

        <p className="text-center text-xl leading-relaxed text-[#64748b]">
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt
          <br />
          mollit anim id est laborum — semper quis lectus nulla at volutpat diam
          ut
          <br />
          venenatis.
        </p>

        <div className="mt-6 flex flex-row items-center space-x-4">
          <button className="group h-12 w-44 items-center justify-between rounded-sm bg-[#2174EA] text-white transition duration-300 hover:bg-[#1D4ED8]">
            Request Demo{" "}
            <FontAwesomeIcon
              icon={faArrowRight}
              className="text-[#90C2FC] transition-transform duration-300 ease-in-out group-hover:translate-x-2"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RequestPage;
