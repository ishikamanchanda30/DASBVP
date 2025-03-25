import React from "react";

const RotatingCircle = () => {
  const spinAnimation = {
    animation: "spin 5s linear infinite",
  };

  const keyframes = `
    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  `;

  return (
    <div className="">
      <div>
        <div className="flex flex-col gap-10 items-end">
          <div className="relative w-24 h-24 flex items-center justify-center">
             
            <svg
              viewBox="0 0 100 100"
              className="w-full h-full"
              style={spinAnimation}
            >
              <defs>
                <style>{keyframes}</style>
              </defs>
              <path
                id="circlePath"
                d="M50,15 a35,35 0 1,1 -0.1,0"
                fill="none"
                stroke="none"
              />
              <text className="text-xs fill-white">
                <textPath
                  href="#circlePath"
                  startOffset="0%"
                  className="tracking-widest uppercase"
                >
                  GET IN TOUCH - GET IN TOUCH -
                </textPath>
              </text>
            </svg>

            <div className="absolute flex">
              <div className="w-3 h-3 rounded-full bg-white mr-1"></div>
              <div className="w-3 h-3 rounded-full bg-white ml-1"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RotatingCircle;
