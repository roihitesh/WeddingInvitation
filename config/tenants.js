import { weddingData as demoWedding } from "./weddings/demo-wedding.js";
import { weddingData as sampleWedding } from "./weddings/sample-sharma-verma.js";

export const tenants = {
  "demo-wedding": demoWedding,
  "sample-sharma-verma": sampleWedding,
};

export const themePresets = {
  "royal-maroon-gold": () => import("./templates/royal-maroon-gold.js"),
  "emerald-temple": () => import("./templates/emerald-temple.js"),
  "terracotta-lotus": () => import("./templates/terracotta-lotus.js"),
  "botanical-garden": () => import("./templates/botanical-garden.js"),
};
