import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Lenis from "lenis";

import App from "./App.jsx";
import "./index.css";

/*
  Initialize Lenis once for the entire application.

  Lenis handles the scrolling behavior while the
  existing React components continue to work normally.
*/

const lenis = new Lenis({
  duration: 0.9,
  smoothWheel: true,
  wheelMultiplier: 0.95,
  touchMultiplier: 1,
  autoRaf: true,
});

/*
  Respect users who prefer reduced motion.

  This prevents adding smooth animation for users
  who have disabled motion at the OS/browser level.
*/
if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  lenis.destroy();
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
