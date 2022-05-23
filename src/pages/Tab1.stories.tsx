import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import Tab1 from './Tab1'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Tab1',
  component: Tab1
} as ComponentMeta<typeof Tab1>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Tab1> = (args) => <Tab1 {...args} />

export const Default = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {}
