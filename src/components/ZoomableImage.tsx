import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";

interface ZoomableImageProps {
  src?: string;
  alt?: string;
  className?: string;
  wrapperClassName?: string;
  zoomable?: boolean;
  [key: string]: unknown;
}

export default function ZoomableImage({
  src,
  alt = "",
  className = "",
  wrapperClassName = "",
  zoomable = true,
  ...imgProps
}: ZoomableImageProps) {
  const [isOpen, setIsOpen] = useState(false);

  const close = useCallback(() => setIsOpen(false), []);
  const open = useCallback(() => {
    if (zoomable && src) setIsOpen(true);
  }, [zoomable, src]);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, close]);

  const lightbox =
    typeof document !== "undefined"
      ? createPortal(
          <AnimatePresence>
            {isOpen && (
              <motion.div
                role="dialog"
                aria-modal="true"
                aria-label={alt ? `Expanded view: ${alt}` : "Expanded image view"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
                onClick={close}
              >
                <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />

                <button
                  type="button"
                  onClick={close}
                  className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
                  aria-label="Close image preview"
                >
                  <X className="h-5 w-5" />
                </button>

                <motion.img
                  src={src}
                  alt={alt}
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="relative z-[1] max-h-[90vh] max-w-[95vw] object-contain select-none"
                  style={{ WebkitTouchCallout: "none", touchAction: "pinch-zoom" }}
                  onClick={(e) => e.stopPropagation()}
                  draggable={false}
                />
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )
      : null;

  return (
    <>
      <button
        type="button"
        onClick={open}
        className={`block h-full w-full cursor-zoom-in border-0 bg-transparent p-0 ${wrapperClassName}`}
        aria-label={alt ? `Zoom image: ${alt}` : "Zoom image"}
      >
        <img
          src={src}
          alt={alt}
          className={`${className} cursor-zoom-in`}
          {...imgProps}
        />
      </button>
      {lightbox}
    </>
  );
}
