import React from "react";
import { createRoot } from "react-dom/client";
import ContentApp from "./ContentApp";

const appContainer = document.createElement("div");

export const contentId = "briefcat-extension-root";

export const sidebarWidth = 600;

export function setContent() {
  appContainer.id = contentId;

  appContainer.style.position = "fixed";

  appContainer.style.top = "0px";

  appContainer.style.right = "0px";

  appContainer.style.zIndex = "1000";
}

export function setOpenedSidebar() {
  const mainWidth = window.innerWidth - sidebarWidth;
  document.documentElement.style.maxWidth = `${mainWidth >= 768 ? mainWidth : window.innerWidth}px`;
}

export function unsetOpenedSidebar() {
  document.documentElement.style.maxWidth = `${window.innerWidth}px`;
}

function renderSidebar() {
  chrome.storage.local.get(["isOpen"], (result) => {
    if (result.isOpen) {
      setOpenedSidebar();
    } else {
      unsetOpenedSidebar();
    }
  });
}

setContent();

renderSidebar();

window.addEventListener("resize", renderSidebar);

document.body.appendChild(appContainer);

const root = createRoot(appContainer);
root.render(<ContentApp />);
