import React from 'react'
import { colorsV3 } from '../../..'
import { HedvigSymbol } from './HedvigSymbol'

export default {
  component: HedvigSymbol,
  title: 'Brand/Logotypes/Hedvig Symbol',
}

export const Black = () => {
  return <HedvigSymbol color={colorsV3.gray900} />
}

Black.parameters = {
  backgrounds: { default: 'gray100' },
}

export const White = () => {
  return <HedvigSymbol color={colorsV3.gray100} />
}

White.parameters = {
  backgrounds: { default: 'gray900' },
}
