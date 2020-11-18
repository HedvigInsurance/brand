import React from 'react'
import { colorsV3 } from '../../..'
import { HedvigSymbol } from './HedvigSymbol'

export default {
  component: HedvigSymbol,
  title: 'Brand/Logotypes/Hedvig Symbol',
}

export const Default: React.FC = () => {
  return <HedvigSymbol color={colorsV3.gray900} />
}
