# PostHog post-wizard report

The wizard has completed a deep integration of your Next.js App Router project. PostHog analytics has been set up using the recommended `instrumentation-client.js` approach for Next.js 15.3+, with a reverse proxy configuration for improved reliability. Event tracking has been added to key user interaction points to track engagement and conversion.

## Configuration Changes

- **`instrumentation-client.js`**: Created PostHog initialization using the recommended approach for Next.js 16.x
- **`next.config.mjs`**: Added reverse proxy rewrites to route PostHog requests through `/ingest/*`
- **`.env.local`**: Configured environment variables for PostHog API key and host
- **`app/providers.jsx`**: Simplified to use PostHog provider for React hooks (initialization moved to instrumentation-client.js)

## Events Implemented

| Event Name | Description | File Path |
|------------|-------------|-----------|
| `explore_events_clicked` | User clicked the Explore Events CTA button - top of conversion funnel | `components/ExploreBtn.jsx` |
| `event_card_clicked` | User clicked on an event card to view details - key engagement metric | `components/EventCard.jsx` |
| `nav_link_clicked` | User clicked a navigation link in the navbar | `components/Navbar.jsx` |

## Event Properties

### explore_events_clicked
- `button_location`: Location of the button (e.g., "hero_section")

### event_card_clicked
- `event_title`: Title of the clicked event
- `event_slug`: URL slug of the event
- `event_location`: Location of the event
- `event_date`: Date of the event
- `event_time`: Time of the event

### nav_link_clicked
- `link_name`: Name of the clicked link (e.g., "Home", "Events", "Create Event")
- `link_location`: Location of the link (e.g., "navbar")

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

### Dashboard
- [Analytics basics](https://us.posthog.com/project/305564/dashboard/1205428) - Main dashboard with all insights

### Insights
- [Explore Events CTA Clicks](https://us.posthog.com/project/305564/insights/vFmsvOvg) - Track CTA engagement over time
- [Event Card Engagement](https://us.posthog.com/project/305564/insights/Lrz1SuMc) - Track event card interactions
- [Navigation Link Clicks](https://us.posthog.com/project/305564/insights/s7uybSDV) - Track navbar usage
- [Explore to Event Card Funnel](https://us.posthog.com/project/305564/insights/wiCf2uob) - Conversion funnel from CTA to event card click
- [All User Engagement Events](https://us.posthog.com/project/305564/insights/XdUEcxyL) - Overview of all tracked events

## Additional Features Enabled

- **Exception Tracking**: Unhandled exceptions are automatically captured via `capture_exceptions: true`
- **Session Replay**: Enabled by default with the modern PostHog defaults
- **Autocapture**: Automatic capture of clicks, inputs, and other interactions
- **Pageviews**: Automatic pageview tracking with `defaults: '2025-11-30'`

### Agent skill

We've left an agent skill folder in your project at `.claude/skills/posthog-nextjs-app-router/`. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.
