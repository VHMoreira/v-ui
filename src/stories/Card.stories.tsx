import React from 'react';
import { Story, Meta } from '@storybook/react';

import Card from "../components/Card";
import CardProps from "../types/Card";

export default {
  title: 'Card',
  component: Card,
  args: {
    title: 'Card',
    elevated: false,
    width: '200px',
    children: 'Card body'
  }
} as Meta<typeof Card>;

export const Template: Story<CardProps> = (args) => <Card  {...args}/>;
