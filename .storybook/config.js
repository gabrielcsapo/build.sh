import { configure } from '@storybook/react';

import '../src/style.css';

function loadStories() {
  // automatically import all story ts files that end with *.stories.js
  const req = require.context('../stories', true, /\.stories\.js/);

  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
