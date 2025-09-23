import { createClient } from "@sanity/client";

export const sanity = createClient({
  projectId: "sa4tll0k", 
  dataset: "production",
  apiVersion: "2025-09-21", 
  useCdn: true, 
});
