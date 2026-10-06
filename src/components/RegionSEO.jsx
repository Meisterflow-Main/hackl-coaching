import { useEffect } from "react";

export default function RegionSEO({ title, description, h1 }) {
  useEffect(() => {
    if (title) document.title = title;
    if (description) {
      let meta = document.querySelector('meta[name="description"]');
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("name", "description");
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", description);
    }
    return () => {
      document.title = "Leo Hackl Coaching – Psychologische Beratung Thalwil | Ängste, Phobien, Verhaltensmuster";
    };
  }, [title, description, h1]);

  return null;
}