import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "motion/react";
import ZoomableImage from "./ZoomableImage";

interface FeatureImageSliderProps {
  images: string[];
  alt: string;
  autoPlayInterval?: number;
}

/** Normalize `images` array or legacy single `image` string into a slide list. */
export function normalizeFeatureImages(
  images?: string[],
  image?: string
): string[] {
  if (images?.length) return images.filter(Boolean);
  if (image) return [image];
  return [];
}

export default function FeatureImageSlider({
  images,
  alt,
  autoPlayInterval = 3000,
}: FeatureImageSliderProps) {
  const slides = images.filter(Boolean);
  const hasMultiple = slides.length > 1;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timerKey, setTimerKey] = useState(0);

  const goTo = useCallback(
    (index: number) => {
      if (!slides.length) return;
      setCurrentIndex(((index % slides.length) + slides.length) % slides.length);
      setTimerKey((k) => k + 1);
    },
    [slides.length]
  );

  useEffect(() => {
    setCurrentIndex(0);
    setTimerKey(0);
  }, [slides.join("|")]);

  useEffect(() => {
    if (!hasMultiple) return;
    const id = window.setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, autoPlayInterval);
    return () => window.clearInterval(id);
  }, [hasMultiple, slides.length, autoPlayInterval, timerKey]);

  if (!slides.length) return null;

  const currentSrc = slides[currentIndex] ?? slides[0];

  return (
    <div className="relative h-full w-full overflow-hidden bg-white">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={`${currentSrc}-${currentIndex}`}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 flex h-full w-full items-center justify-center"
        >
          <ZoomableImage
            src={currentSrc}
            alt={`${alt}${hasMultiple ? ` (${currentIndex + 1} of ${slides.length})` : ""}`}
            className="h-full w-full max-w-full object-contain"
            wrapperClassName="flex h-full w-full items-center justify-center"
            loading="lazy"
            width="600"
            height="375"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </AnimatePresence>

      {hasMultiple && (
        <motion.div
          className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                goTo(i);
              }}
              aria-label={`View image ${i + 1} of ${slides.length}`}
              aria-current={i === currentIndex ? "true" : undefined}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === currentIndex
                  ? "w-6 bg-white shadow-md ring-1 ring-black/10"
                  : "w-2 bg-white/50 hover:bg-white/90"
              }`}
            />
          ))}
        </motion.div>
      )}
    </div>
  );
}
