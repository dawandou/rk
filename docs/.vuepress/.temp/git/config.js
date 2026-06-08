import { GitContributors } from "D:/xyh/my-docs/node_modules/.pnpm/@vuepress+plugin-git@2.0.0-_0d18c7e8209ecdd4a3bf55c9736dedb0/node_modules/@vuepress/plugin-git/dist/client/components/GitContributors.js";
import { GitChangelog } from "D:/xyh/my-docs/node_modules/.pnpm/@vuepress+plugin-git@2.0.0-_0d18c7e8209ecdd4a3bf55c9736dedb0/node_modules/@vuepress/plugin-git/dist/client/components/GitChangelog.js";

export default {
  enhance: ({ app }) => {
    app.component("GitContributors", GitContributors);
    app.component("GitChangelog", GitChangelog);
  },
};
