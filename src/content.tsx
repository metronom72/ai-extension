import React from "react";
import { createRoot } from "react-dom/client";
import ContentApp from "./ContentApp";

const appContainer = document.createElement("div");
appContainer.id = "briefcat-extension-root";

appContainer.style.position = "fixed";

appContainer.style.top = "00px";

appContainer.style.right = "00px";

appContainer.style.zIndex = "999999999";

document.body.appendChild(appContainer);

const root = createRoot(appContainer);
root.render(<ContentApp />);
