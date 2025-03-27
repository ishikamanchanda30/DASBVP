import React from "react";

function Home() {
  return (
    <div className="w-screen h-screen bg-[#0D0D0D] text-white font-kumbh relative overflow-hidden">
      {/* Top Right Line */}
      <div className="absolute top-20 right-12 w-20 h-[2px] bg-white"></div>
      <div className="absolute top-20 right-12 w-[2px] h-2 bg-white translate-x-[calc(100%-2px)]"></div>

      {/* Bottom Left Line */}
      <div className="absolute bottom-20 left-12 w-20 h-[2px] bg-white"></div>
      <div className="absolute bottom-20 left-12 w-[2px] h-2 bg-white"></div>

      {/* Top Left Text */}
      <div className="absolute top-20 left-12 max-w-sm text-xs leading-5">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout.
      </div>

      {/* Bottom Right Text */}
      <div className="absolute bottom-20 right-12 max-w-sm text-xs text-right leading-5">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout.
      </div>

      {/* Stacked CLASS Text */}

      {/* Since 2017 Text */}
      <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 text-center text-sm text-gray-400">
        SINCE 2017
      </div>
    </div>
  );
}

export default Home;
