import { CodeTabs } from "D:/xyh/my-docs/node_modules/.pnpm/@vuepress+plugin-markdown-t_6d652e0da06ea03fc2cb85f3bed6f94f/node_modules/@vuepress/plugin-markdown-tab/dist/client/components/CodeTabs.js";
import { Tabs } from "D:/xyh/my-docs/node_modules/.pnpm/@vuepress+plugin-markdown-t_6d652e0da06ea03fc2cb85f3bed6f94f/node_modules/@vuepress/plugin-markdown-tab/dist/client/components/Tabs.js";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
