import React from 'react';
import { PolarArea } from '../src';
import { data } from './PolarArea.data';

export default {
  title: 'Components/PolarArea',
  component: PolarArea,
  parameters: {
    layout: 'centered',
  },
  args: {
    width: 500,
    height: 400,
  },
};

export const Default = args => <PolarArea {...args} />;

Default.args = {
  data,
};
