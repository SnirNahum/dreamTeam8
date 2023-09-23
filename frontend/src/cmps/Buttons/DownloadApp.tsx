import { useEffect } from "react";

export default function DownloadApp() {
  useEffect(() => {
    const installButton = document.getElementById("installButton");

    if (installButton) {
      installButton.addEventListener("click", () => {
        const deferredPrompt = window.deferredPrompt;

        if (deferredPrompt) {
          deferredPrompt.prompt();

          deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === "accepted") {
              console.log("User accepted the install prompt");
            } else {
              console.log("User dismissed the install prompt");
            }
          });

          // Reset the deferredPrompt
          window.deferredPrompt = null;
        }
      });
    }
  }, []);

  return <button id="installButton">Download App</button>;
}
