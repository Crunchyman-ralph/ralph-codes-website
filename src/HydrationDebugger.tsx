import { useEffect } from "react";

export default function HydrationDebugger() {
  useEffect(() => {
    const root = document.getElementById("root");
    if (root) {
      console.log("Server-rendered markup:", root.innerHTML);
    }
  }, []);

  return null;
}
