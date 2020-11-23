import React from 'react'
import { colorsV3 } from '../../..'
import { HedvigLogo } from './HedvigLogo'

export default {
  component: HedvigLogo,
  title: 'Brand/Logotypes/Hedvig Logotype',
}

export const Black = () => {
  return <HedvigLogo color={colorsV3.gray900} />
}

Black.parameters = {
  backgrounds: { default: 'gray100' },
}

export const White = () => {
  return <HedvigLogo color={colorsV3.gray100} />
}

White.parameters = {
  backgrounds: { default: 'gray900' },
}
