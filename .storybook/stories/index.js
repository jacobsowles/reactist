import './components/styles/story.less'

import React from 'react';
import { storiesOf } from '@storybook/react';

import ReactistStory from './reactist/ReactistStory'
import ButtonStory from './components/ButtonStory'
import ModalStory from './components/ModalStory'

ReactistStory()
ButtonStory()
ModalStory()