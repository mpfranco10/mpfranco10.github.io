import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Support from "./Support.tsx";

createRoot(document.getElementById("root")!).render(
  <Support>
    <App />
  </Support>
);
