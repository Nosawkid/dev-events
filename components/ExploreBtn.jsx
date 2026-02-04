"use client";

import Image from "next/image";
import posthog from "posthog-js";

const ExploreBtn = () => {
  const handleClick = () => {
    // Capture explore events CTA click - top of conversion funnel
    posthog.capture("explore_events_clicked", {
      button_location: "hero_section",
    });
  };

  return (
    <button
      id="explore-btn"
      type="button"
      className="mt-7 mx-auto "
      onClick={handleClick}
    >
      <a href="#events">Explore Events</a>
      <Image
        src={"/icons/arrow-down.svg"}
        alt="arrow icon"
        width={24}
        height={24}
      />
    </button>
  );
};

export default ExploreBtn;
