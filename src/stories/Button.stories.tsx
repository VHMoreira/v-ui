import React from 'react';
import { Story, Meta } from '@storybook/react';

import Button from "../components/Button";
import ButtonProps from "../types/Button";

export default {
  title: 'Button',
  component: Button,
  args: {
    text: 'Button',
    color: 'principal',
    outlined: false,
    disabled: false,
    fullWidth: false
  }
} as Meta<typeof Button>;

export const Template: Story<ButtonProps> = (args) => <Button  {...args}/>;
