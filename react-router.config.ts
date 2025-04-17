import type { Config } from "@react-router/dev/config";
import { copyFile } from "node:fs/promises";
import path from "node:path";

export default {
  // Config options...
  basename: import.meta.env.PROD ? "/react-router-template" : "/",
  async buildEnd(args) {
    if (!args.viteConfig.isProduction) return;
    const out = args.viteConfig.build.outDir;
    await copyFile(path.join(out, "index.html"), path.join(out, "404.html"));
  },
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: false,
} satisfies Config;
