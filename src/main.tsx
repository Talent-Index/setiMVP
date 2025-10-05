import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import sdk from '@farcaster/frame-sdk';

const initFarcaster = async () => {
  // Only run inside Farcaster (Warpcast iframe)
  if (window.self !== window.top) {
    try {
      console.log('[MAIN] Initializing Farcaster SDK...');

      const context = await sdk.context;
      console.log('[MAIN] Context:', context);

      // Dismiss splash screen
      sdk.actions.ready();
      console.log('[MAIN] ✅ ready() called');
    } catch (error) {
      console.error('[MAIN] SDK Error:', error);
    }
  }
};

// Initialize Farcaster before rendering
initFarcaster();

createRoot(document.getElementById("root")!).render(<App />);
