import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
import styles from "!sass-loader!../projects/pattern-lib/src/scss/index.scss";

const storybookStyles = document.createElement("style");
storybookStyles.innerHTML = styles;
document.body.appendChild(storybookStyles);

setCompodocJson(docJson);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: { inlineStories: true },
};
