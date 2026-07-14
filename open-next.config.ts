import { defineCloudflareConfig } from "@opennextjs/cloudflare";

// Static site (no ISR/on-demand revalidation), so no incremental cache
// override / R2 bucket needed. Add one here if SSR/ISR is introduced later.
export default defineCloudflareConfig();
