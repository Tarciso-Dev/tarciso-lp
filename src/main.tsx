import "@fontsource/dm-sans/400.css"
import "@fontsource/dm-sans/500.css"
import "@fontsource/dm-sans/600.css"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import "./index.css"
import App from './App.tsx'

const root = document.getElementById("root")!

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>
)

requestAnimationFrame(() => {
  document.dispatchEvent(new Event("render-event"))
})
