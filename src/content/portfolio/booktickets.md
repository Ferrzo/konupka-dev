---
title: Event Ticketing Platform
company: BookTickets
logoId: booktickets-logo.svg
role: Frontend Developer
year: "2020 – 2021"
technologies: ["Angular", "TypeScript", "PWA", "HTML5", "CSS3"]
url: https://www.booktickets.cz
excerpt: Built a Progressive Web App for on-site ticket validation, featuring a semi-synchronised offline mode for reliable operation in low-connectivity environments.
order: 6
logoNeedsBackground: true
---

## Overview

BookTickets is a Czech platform for selling tickets to events. Beyond the online storefront, the platform needed a reliable tool for on-site ticket checking at venue entry gates — including locations where internet connectivity was limited or entirely unavailable.

I was brought in to build this entry gate application as a Progressive Web App.

## My Role

I designed and developed the entire ticket validation application — a mobile-optimised PWA built with Angular, intended to run on devices used by staff at event entry points. A key requirement was that the app had to remain fully functional even without a stable internet connection.

## What I Built

- A Progressive Web App using Angular, optimised for use on mobile devices at venue entry gates.
- A ticket scanning and validation interface for checking attendees into events.
- A semi-synchronised offline system that allowed the app to continue operating without internet access.
- Bidirectional sync logic: whenever the device regained connectivity, the app pulled the latest validated ticket data from the server and uploaded its own locally checked tickets, keeping all devices up to date.
- Conflict-aware data handling to ensure ticket states remained consistent across multiple gate devices working in parallel.

## Challenges & Solutions

The core challenge was designing a system that worked reliably in locations with little to no internet — venues like outdoor festivals, remote event spaces, or areas with poor mobile signal. A fully online-dependent solution would have been impractical and risky.

I solved this with a semi-synchronised offline architecture: the app operated fully from local data and synced with the server whenever a connection was available. This allowed gate staff to keep checking tickets uninterrupted, with the sync process running automatically in the background.

Handling concurrent updates from multiple gate devices required careful thought around data merging to prevent the same ticket from being marked as both valid and invalid across different devices.

## Results

The finished app gave the BookTickets team a robust, field-ready tool for event entry management. The offline-first approach meant gate operations were no longer dependent on venue connectivity, making the platform viable for a much wider range of event types and locations.
