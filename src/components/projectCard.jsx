import { useEffect, useRef, useState } from "react";
import { RiArrowLeftSFill } from "react-icons/ri";
import { RiArrowRightSFill } from "react-icons/ri";

const CardCarousel = ({ children }) => {
  const scrollRef = useRef(null);
  const cardRefs = useRef([]);
  const [scales, setScales] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const hasCentered = useRef(false);

  const items = Array.isArray(children) ? children : [children];
  const middleIndex = Math.floor((items.length - 1) / 2);

  const updateScales = () => {
    const container = scrollRef.current;
    if (!container) return;

    const containerCenter = container.scrollLeft + container.offsetWidth / 2;

    let closestIndex = 0;
    let closestDistance = Infinity;

    const next = cardRefs.current.map((card, i) => {
      if (!card) return { scale: 0.8, opacity: 0.5 };
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const distance = Math.abs(containerCenter - cardCenter);
      const maxDistance = container.offsetWidth / 2 + card.offsetWidth / 2;
      const ratio = Math.min(distance / maxDistance, 1);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = i;
      }

      const scale = 1 - ratio * 0.25;
      const opacity = 1 - ratio * 0.5;
      return { scale, opacity };
    });

    setScales(next);
    setCurrentIndex(closestIndex);
  };

  const scrollToIndex = (i, behavior = "smooth") => {
    const card = cardRefs.current[i];
    if (card) {
      card.scrollIntoView({
        behavior,
        inline: "center",
        block: "nearest",
      });
    }
  };

  useEffect(() => {
    if (!hasCentered.current && cardRefs.current[middleIndex]) {
      scrollToIndex(middleIndex, "auto");
      setCurrentIndex(middleIndex);
      hasCentered.current = true;
    }
    updateScales();

    const container = scrollRef.current;
    if (!container) return;

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateScales();
          ticking = false;
        });
        ticking = true;
      }
    };

    container.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateScales);
    return () => {
      container.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateScales);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items.length]);

  const goPrev = () => {
    if (currentIndex > 0) scrollToIndex(currentIndex - 1);
  };

  const goNext = () => {
    if (currentIndex < items.length - 1) scrollToIndex(currentIndex + 1);
  };

  return (
    <div className="relative w-full">
      <button
        type="button"
        onClick={goPrev}
        disabled={currentIndex === 0}
        aria-label="Previous project"
        className="absolute left-2 top-1/2 -translate-y-1/2 z-200 w-10 h-10 rounded-full bg-white hover:bg-white text-black flex items-center justify-center disabled:opacity-80 disabled:cursor-not-allowed transition-colors"
      >
        <RiArrowLeftSFill />
      </button>

      <button
        type="button"
        onClick={goNext}
        disabled={currentIndex === items.length - 1}
        aria-label="Next project"
        className="absolute right-2 top-1/2 -translate-y-1/2 z-200 w-10 h-10 rounded-full bg-white hover:bg-white text-black flex items-center justify-center disabled:opacity-80 disabled:cursor-not-allowed transition-colors"
      >
        <RiArrowRightSFill />
      </button>

      <div
        ref={scrollRef}
        className="flex items-center gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth py-12 px-[calc(50%-42.5vw)] sm:px-[calc(50%-160px)] no-scrollbar"
        style={{ scrollbarWidth: "none" }}
      >
        {items.map((child, i) => {
          const { scale = 0.85, opacity = 0.6 } = scales[i] || {};
          return (
            <div
              key={i}
              ref={(el) => (cardRefs.current[i] = el)}
              className="snap-center shrink-0 w-[85vw] sm:w-[320px] transition-transform duration-200 ease-out"
              style={{
                transform: `scale(${scale})`,
                opacity,
                zIndex: Math.round(scale * 100),
              }}
              onClick={() => scrollToIndex(i)}
            >
              {child}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CardCarousel;
