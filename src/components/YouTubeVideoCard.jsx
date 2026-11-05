import React, { useState } from "react";
import { Play } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

/**
 * Videokarte für YouTube-Videos: zeigt ein Klick-Vorschaubild und lädt den
 * Player erst beim Abspielen (schnellere Seite, kein Fremd-Tracking vorab).
 */
export default function YouTubeVideoCard({ video, index = 0 }) {
  const [started, setStarted] = useState(false);
  const thumbnail = `https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`;

  return (
    <ScrollReveal delay={index * 0.05}>
      <div className="group overflow-hidden rounded-2xl border border-border bg-white shadow-sm hover:shadow-xl transition-shadow duration-300">
        <div className="relative aspect-video bg-navy overflow-hidden">
          {started ? (
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&rel=0`}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
            />
          ) : (
            <button
              onClick={() => setStarted(true)}
              className="absolute inset-0 h-full w-full"
              aria-label={`Video "${video.title}" abspielen`}
            >
              <img
                src={thumbnail}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
              <span className="absolute inset-0 bg-navy/30 group-hover:bg-navy/40 transition-colors" />
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent text-white shadow-lg group-hover:scale-110 transition-transform">
                  <Play className="h-7 w-7 ml-1" fill="currentColor" />
                </span>
              </span>
            </button>
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