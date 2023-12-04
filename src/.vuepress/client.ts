// .vuepress/client.ts
import { defineClientConfig } from "@vuepress/client";
import { defineAutoCatalogGetter } from "vuepress-plugin-auto-catalog/client";

export default defineClientConfig({
    setup: () => {
        defineAutoCatalogGetter((meta) =>
            meta.title ? { title: meta.title } : null,
        );
    },
});
