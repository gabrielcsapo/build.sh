import { configure } from '@storybook/react';

import '../src/style.css';

function loadStories() {
  require('../stories');
}

configure(loadStories, module);
