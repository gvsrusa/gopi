/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;

// Enables OpenNext Cloudflare bindings during `next dev`.
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
initOpenNextCloudflareForDev();
