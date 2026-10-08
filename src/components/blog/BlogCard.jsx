import React from "react";
import { Link } from "react-router-dom";
import { Clock, Calendar, ArrowRight } from "lucide-react";
import { Image } from "@/components/ui/image";

export default function BlogCard({ post, delay = 0 }) {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-muted">
        <Image
          src={post.heroImage}
          alt={post.title}
          fittingType="fill"
          className="h-full w-full transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute top-3 left-3 inline-flex items-center rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white shadow-md">
          {post.categoryName}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-heading text-lg font-bold text-primary leading-snug group-hover:text-accent transition-colors">
          {post.title}
        </h3>
        <p className="mt-2 text-sm text-foreground/70 leading-relaxed flex-1">
          {post.excerpt}
        </p>
        <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Calendar className="h-3.5 w-3.5" />
            {post.dateDisplay}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" />
            {post.readingTime} Min
          </span>
        </div>
        <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent group-hover:gap-2.5 transition-all">
          Artikel lesen <ArrowRight className="h-4 w-4" />
        </div>
      </div>
    </Link>
  );
}