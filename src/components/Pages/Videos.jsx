import React from "react";

const Videos = () => {
  return (
    <>
      <div className=" w-[100%] h-[100%] flex flex-col items-center pt-5 overflow-auto space-y-4">
        <div class=" w-[700px] h=[500px] shadow-md p-4 rounded-md">
          <div class="w-full h-full border border-gray-300">
            <video class="w-full h-full object-cover" controls>
              <source
                src="https://youtu.be/lrjOlEi-bAM?si=Lqi0Akn_onVvr0XG"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div class=" w-[700px] h=[500px] shadow-md p-4 rounded-md">
          <div class="w-full h-full border border-gray-300">
            <video class="w-full h-full object-cover" controls>
              <source
                src="https://youtu.be/lrjOlEi-bAM?si=Lqi0Akn_onVvr0XG"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div class=" w-[700px] h=[500px] shadow-md p-4 rounded-md">
          <div class="w-full h-full border border-gray-300">
            <video class="w-full h-full object-cover" controls>
              <source
                src="https://youtu.be/lrjOlEi-bAM?si=Lqi0Akn_onVvr0XG"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </>
  );
};

export default Videos;
