import React from 'react'
import { PlaceholderComponent } from './placeholder-component'

export default {
  title: 'PlaceholderComponent',
  component: PlaceholderComponent,
}

export const DefaultPlaceholderComponent: React.FC = (args) => {
  return <PlaceholderComponent {...args} />
}
