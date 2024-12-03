import React, { useState } from 'react';
import { Play, Pause } from 'lucide-react';

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = (videoElement: HTMLVideoElement) => {
    if (isPlaying) {
      videoElement.pause();
    } else {
      videoElement.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            The Intersection of Law and Technology
          </h2>
          
          <div className="relative aspect-video bg-gray-800 rounded-xl overflow-hidden">
            <video
              className="w-full h-full object-cover"
              src="/src/components/final.mp4"
              onClick={(e) => togglePlay(e.target as HTMLVideoElement)}
              playsInline
            >
              Your browser does not support the video tag.
            </video>
            {!isPlaying && (
              <div className="absolute inset-0 flex items-center justify-center cursor-pointer"
                   onClick={(e) => {
                     const video = e.currentTarget.previousElementSibling as HTMLVideoElement;
                     togglePlay(video);
                   }}>
                <button className="bg-white/20 hover:bg-white/30 transition-colors p-6 rounded-full">
                  <Play size={48} className="text-white" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;