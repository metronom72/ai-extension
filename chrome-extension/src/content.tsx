import React from "react";
import { createRoot } from "react-dom/client";
import ContentApp from "./ContentApp";

const appContainer = document.createElement("div");

export const contentId = "briefcat-extension-root";

function setMaxWidth() {
  const maxWidth = `${window.innerWidth - 600}px`;
  appContainer.id = contentId;

  appContainer.style.position = "fixed";

  appContainer.style.top = "0px";

  appContainer.style.right = "0px";

  appContainer.style.zIndex = "1000";

  document.documentElement.style.maxWidth = maxWidth;
}

setMaxWidth();

window.addEventListener("resize", setMaxWidth);

document.body.appendChild(appContainer);

const root = createRoot(appContainer);
root.render(<ContentApp />);
