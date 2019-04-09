import { addParameters, addDecorator, configure } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { themes } from "@storybook/theming";

const req = require.context("../stories", true, /.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addParameters({
  options: {
    name: "Leap Kit",
    showPanel: false,
    isToolshown: false,
    theme: themes.normal
  }
});

addDecorator(
  withInfo({
    header: false,
    source: true,
    inline: true,
    propTables: [],
    /**
     * Overrides styles of addon. The object should follow this shape:
     * https://github.com/storybooks/storybook/blob/master/addons/info/src/components/Story.js#L19.
     * This prop can also accept a function which has the default stylesheet passed as an argument
     */
    styles: {}
  })
);

configure(loadStories, module);
