import React from 'react'
import { colorsV3 } from '../../..'
import { HedvigLogo } from './HedvigLogo'

export default {
  component: HedvigLogo,
  title: 'Brand/Logotypes/Hedvig Logotype',
}

export const Default: React.FC = () => {
  return <HedvigLogo color={colorsV3.gray900} />
}
