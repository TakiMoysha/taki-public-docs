// @ts-check
import { rehypeHeadingIds } from '@astrojs/markdown-remark';
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://takimoysha.github.io",
  base: "/",
  markdown: {
    rehypePlugins: [
      rehypeHeadingIds,

    ]
  },
});
