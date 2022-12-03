import React from "react";
// import undraw from "./../../public/undraw.svg";

export default function Body() {
  return (
    <div>
      <div className="min-h-screen flex flex-row justify-between">
        <div className="flex-1 w-64">
          <div className="md:py-10 md:px-10 max-w-sm rounded overflow-hidden shadow-lg z-0">
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #photography
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #travel
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #winter
              </span>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0">
          <img
            // classname="place-content-end"
            height="900px"
            width="900px"
            src="/undraw.svg"
            alt="undraw"
          />
        </div>
      </div>
    </div>
  );
}
