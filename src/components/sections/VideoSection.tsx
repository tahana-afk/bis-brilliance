import { useState } from "react";
import { Play } from "lucide-react";
import videoThumb from "@/assets/video-thumbnail.jpg";

const VideoSection = () => {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="bis-section" style={{ backgroundColor: "#1a1a1a" }}>
      <div className="bis-container text-center">
        {/* Label */}
        <p
          style={{ color: "#C8FF00" }}
          className="text-xs uppercase tracking-[0.2em] font-semibold mb-3"
        >
          HEAR HER STORY
        </p>

        {/* Heading */}
        <h2 className="text-white mb-10">Victoria's BIS Media Journey</h2>

        {/* Video Player */}
        <div className="relative mx-auto max-w-3xl rounded-[16px] overflow-hidden shadow-2xl aspect-video">
          {!playing ? (
            <div className="relative cursor-pointer group" onClick={() => setPlaying(true)}>
              <img
                src={videoThumb}
                alt="Video thumbnail"
                loading="lazy"
                width={1280}
                height={720}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-colors">
                <div
                  style={{ backgroundColor: "#C8FF00" }}
                  className="w-20 h-20 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform"
                >
                  <Play size={32} className="text-bis-dark ml-1" fill="#1a1a1a" />
                </div>
              </div>
            </div>
          ) : (
            <iframe
              className="w-full aspect-video"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="Victoria's BIS Media Journey"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
