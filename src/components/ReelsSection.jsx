import React, { useState, useRef } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const REELS = [
  {
    src: "https://media.base44.com/videos/public/6ac4ae046d53c41e9b937a32/acee7bce4_Reel__Anxiety_Release.mp4",
    title: "Ängste auflösen",
    subtitle: "Frei atmen, frei leben",
  },
  {
    src: "https://media.base44.com/videos/public/6ac4ae046d53c41e9b937a32/eb2434476_Reel__Breaking_Patterns.mp4",
    title: "Verhaltensmuster brechen",
    subtitle: "Neue Wege gehen",
  },
  {
    src: "https://media.base44.com/videos/public/6ac4ae046d53c41e9b937a32/fe73e05a6_Reel__Burnout_Recovery.mp4",
    title: "Burnout überwinden",
    subtitle: "Kraft zurückgewinnen",
  },
  {
    src: "https://media.base44.com/videos/public/6ac4ae046d53c41e9b937a32/522867657_Reel__Inner_Peace.mp4",
    title: "Innere Ruhe finden",
    subtitle: "Stille spüren",
  },
];

function ReelCard({ reel, index }) {
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(true);
  const videoRef = useRef(null);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
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

  return (
    <ScrollReveal delay={index * 0.1}>
      <div className="group relative aspect-[9/16] overflow-hidden rounded-2xl border border-border bg-navy shadow-lg">
        <video
          ref={videoRef}
          src={reel.src}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover"
          onClick={togglePlay}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/10 to-transparent pointer-events-none" />

        {/* Controls */}
        <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={toggleMute}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/30 transition-colors"
            aria-label="Stumm"
          >
            {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
          </button>
          <button
            onClick={togglePlay}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white hover:bg-white/30 transition-colors"
            aria-label="Abspielen"
          >
            {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          </button>
        </div>

        {/* Caption */}
        <div className="absolute bottom-0 inset-x-0 p-5">
          <h3 className="font-heading text-lg font-bold text-white leading-tight">{reel.title}</h3>
          <p className="mt-0.5 text-sm text-white/70">{reel.subtitle}</p>
        </div>
      </div>
    </ScrollReveal>
  );
}

export default function ReelsSection() {
  return (
    <section className="bg-secondary/40 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <ScrollReveal>
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Eindrücke</span>
            <h2 className="mt-3 font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight">
              Momente der Veränderung
            </h2>
            <p className="mt-4 text-lg text-foreground/70">
              Vier kurze Eindrücke, die den Weg von Belastung zu innerer Freiheit begleiten.
            </p>
          </div>
        </ScrollReveal>
        <div className="mt-12 grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
          {REELS.map((reel, i) => (
            <ReelCard key={reel.title} reel={reel} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}