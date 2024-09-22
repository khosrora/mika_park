"use client";

function MegaVideoSection({ details }) {
  return (
    <div className="p-4">
      <header className="relative flex items-center justify-center h-64 lg:h-screen mb-4 overflow-hidden rounded-md">
        {/* <div class="relative z-30  text-2xl text-white bg-zinc-950 w-full h-full bg-opacity-30 rounded-xl">
      </div> */}
        <video
          controls
          autoPlay
          loop
          poster="/images/123.png"
          className="absolute z-10 w-full h-full max-w-none"
        >
          <source src={details.media.url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </header>
    </div>
  );
}

export default MegaVideoSection;
