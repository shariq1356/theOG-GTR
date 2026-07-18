"use client";

import Image from "next/image";
import {
  forwardRef,
  useEffect,
  useId,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type VideoStageProps = {
  src: string;
  poster: string;
  description: string;
  className?: string;
  videoClassName?: string;
  /** Hero loads immediately (metadata) instead of waiting for intersection. */
  eager?: boolean;
  /** Seek here once loaded, to skip an unwanted opening beat (e.g. a title-card cut). */
  startAt?: number;
};

/**
 * A muted, playsInline video that lazy-assigns its source on intersection,
 * pauses off-screen, exposes a visible pause/play control, and falls back to
 * a static poster image entirely under prefers-reduced-motion. The DOM
 * <video> element is exposed via ref so parent sections can drive
 * currentTime from a ScrollTrigger for scroll-scrubbing.
 */
const VideoStage = forwardRef<HTMLVideoElement, VideoStageProps>(
  function VideoStage(
    { src, poster, description, className, videoClassName, eager = false, startAt },
    forwardedRef
  ) {
    const reducedMotion = useReducedMotion();
    const wrapperRef = useRef<HTMLDivElement | null>(null);
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const userPaused = useRef(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [assigned, setAssigned] = useState(eager);
    const descId = useId();

    useImperativeHandle(forwardedRef, () => videoRef.current as HTMLVideoElement);

    useEffect(() => {
      if (reducedMotion) return;
      const wrapper = wrapperRef.current;
      const video = videoRef.current;
      if (!wrapper || !video) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setAssigned(true);
              if (!userPaused.current) {
                video.play().catch(() => {});
              }
            } else {
              video.pause();
            }
          });
        },
        { rootMargin: "250px 0px" }
      );
      observer.observe(wrapper);
      return () => observer.disconnect();
    }, [reducedMotion]);

    useEffect(() => {
      const video = videoRef.current;
      if (!video || reducedMotion) return;
      const onPlay = () => setIsPlaying(true);
      const onPause = () => setIsPlaying(false);
      video.addEventListener("play", onPlay);
      video.addEventListener("pause", onPause);
      return () => {
        video.removeEventListener("play", onPlay);
        video.removeEventListener("pause", onPause);
      };
    }, [reducedMotion]);

    if (reducedMotion) {
      return (
        <div ref={wrapperRef} className={className}>
          <Image
            src={poster}
            alt={description}
            fill
            sizes="100vw"
            className={videoClassName}
            priority={eager}
          />
        </div>
      );
    }

    const toggle = () => {
      const video = videoRef.current;
      if (!video) return;
      if (video.paused) {
        userPaused.current = false;
        video.play().catch(() => {});
      } else {
        userPaused.current = true;
        video.pause();
      }
    };

    return (
      <div ref={wrapperRef} className={className}>
        <video
          ref={videoRef}
          className={videoClassName}
          muted
          playsInline
          loop={false}
          preload={eager ? "metadata" : "none"}
          poster={poster}
          aria-describedby={descId}
          src={assigned ? src : undefined}
          onLoadedData={(event) => {
            const target = event.currentTarget;
            if (startAt && target.currentTime < startAt) target.currentTime = startAt;
            if (eager) target.play().catch(() => {});
          }}
        />
        <p id={descId} className="sr-only">
          {description}
        </p>
        <button
          type="button"
          className="media-control"
          aria-pressed={isPlaying}
          onClick={toggle}
        >
          {isPlaying ? "Pause motion" : "Play motion"}
        </button>
      </div>
    );
  }
);

export default VideoStage;
