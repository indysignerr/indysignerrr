import { RefObject, useEffect, useRef } from "react";

/**
 * Hook optimisé : cache le getBoundingClientRect au lieu de le recalculer
 * à chaque mousemove (ce qui forçait un reflow à chaque pixel de mouvement).
 * Rect recalculé seulement sur resize/scroll.
 */
export const useMousePositionRef = (
  containerRef?: RefObject<HTMLElement | SVGElement | null>
) => {
  const positionRef = useRef({ x: 0, y: 0 });
  const rectRef = useRef<DOMRect | null>(null);

  useEffect(() => {
    const updateRect = () => {
      if (containerRef?.current) {
        rectRef.current = containerRef.current.getBoundingClientRect();
      }
    };
    updateRect();

    const updatePosition = (x: number, y: number) => {
      if (containerRef && rectRef.current) {
        positionRef.current = {
          x: x - rectRef.current.left,
          y: y - rectRef.current.top,
        };
      } else {
        positionRef.current = { x, y };
      }
    };

    const handleMouseMove = (ev: MouseEvent) => {
      updatePosition(ev.clientX, ev.clientY);
    };

    const handleTouchMove = (ev: TouchEvent) => {
      const touch = ev.touches[0];
      if (touch) updatePosition(touch.clientX, touch.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    window.addEventListener("resize", updateRect, { passive: true });
    window.addEventListener("scroll", updateRect, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("resize", updateRect);
      window.removeEventListener("scroll", updateRect);
    };
  }, [containerRef]);

  return positionRef;
};
