import React from "react";
import { BeakerIcon } from "@heroicons/react/20/solid";

export default function Navbar() {
  return (
    //<div className="flex-wrap items-center justify-between py-4 md:py-4 px-10 text-lg text-gray-700 bg-white">
    // <div className="flex justify-around py-4 md:py-4 px-10 text-lg text-gray-700 bg-white">

    <div>
      <div className="flex justify-between py-4 md:py-4 px-10 text-lg text-gray-700 bg-white">
        {/* <div className="flex flex-none"> */}
        <div className="flex">
          {/* <ul class="nav-links" className="justify-center">
            <div class="nav-items">
              <li>
                <a href="#">test</a>
                <div class="active-nav"></div>
              </li>
            </div>
            <div class="nav-items">
              <li>
                <a href="#">Projects</a>
                <div class="active-nav"></div>
              </li>
            </div>
            <div class="nav-items">
              <li>
                <a href="#">Contact</a>
                <div class="active-nav"></div>
              </li>
            </div>
          </ul> */}
          <BeakerIcon className="h-12 w-12" />
          <h4 className="text-4xl">DEVELOPEDBYE</h4>
        </div>
        <div className="flex gap-4">
          <div>
            <a href="#">test</a>
          </div>

          <div>
            <a href="#">projects</a>
          </div>
          <div>
            <a href="#">contact</a>
          </div>
        </div>

        <div className="">
          <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 inline-flex rounded right-8">
            <svg
              class="fill-current w-4 h-4 mr-2 mt-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
            </svg>
            <span>Download</span>
          </button>
        </div>
      </div>
    </div>
  );
}
