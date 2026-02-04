"use client";

import posthog from "posthog-js";
import { PostHogProvider as PHProvider } from "posthog-js/react";

// PostHog is initialized in instrumentation-client.js
// This provider gives access to PostHog hooks throughout the app
export function PostHogProvider({ children }) {
  return <PHProvider client={posthog}>{children}</PHProvider>;
}
