import React, { useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize2 } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function VideoCard({ video, index = 0 }) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);
  const [started, setStarted] = useState(false);

  const handlePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
      setStarted(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  const handleFullscreen = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.requestFullscreen) v.requestFullscreen();
  };

  return (
    <ScrollReveal delay={index * 0.05}>
      <div className="group overflow-hidden rounded-2xl border border-border bg-white shadow-sm hover:shadow-xl transition-shadow duration-300">
        <div className="relative aspect-video bg-navy overflow-hidden">
          <video
            ref={videoRef}
            src={video.src}
            poster={video.poster}
            preload="metadata"
            playsInline
            controls={false}
            className="absolute inset-0 h-full w-full object-cover"
            onClick={handlePlay}
          />
          {!started && (
            <button
              onClick={handlePlay}
              className="absolute inset-0 flex items-center justify-center bg-navy/30 hover:bg-navy/40 transition-colors"
              aria-label={`Video "${video.title}" abspielen`}
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent text-white shadow-lg group-hover:scale-110 transition-transform">
                <Play className="h-7 w-7 ml-1" fill="currentColor" />
              </span>
            </button>
          )}
          {started && (
            <div className="absolute bottom-0 inset-x-0 p-3 flex items-center justify-between bg-gradient-to-t from-navy/80 to-transparent">
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePlay}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/30 transition-colors"
                  aria-label={playing ? "Pause" : "Abspielen"}
                >
                  {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                </button>
                <button
                  onClick={toggleMute}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/30 transition-colors"
                  aria-label={muted ? "Ton an" : "Ton aus"}
                >
                  {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                </button>
              </div>
              <button
                onClick={handleFullscreen}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/30 transition-colors"
                aria-label="Vollbild"
              >
                <Maximize2 className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>
        <div className="p-5">
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              {video.category}
            </span>
            <span className="text-xs text-muted-foreground">{video.year}</span>
          </div>
          <h3 className="font-heading text-lg font-bold text-primary leading-tight">
            {video.title}
          </h3>
          <p className="mt-2 text-sm text-foreground/70 leading-relaxed">
            {video.description}
          </p>
        </div>
      </div>
    </ScrollReveal>
  );
}