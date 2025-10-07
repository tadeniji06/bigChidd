import { createClient } from "@sanity/client";

export const sanity = createClient({
  projectId: "plt9i24b", 
  dataset: "production",
  apiVersion: "2025-09-21", 
  useCdn: true, 
});
