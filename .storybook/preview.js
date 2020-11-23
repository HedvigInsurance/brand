import React from 'react'
import { Global } from '@emotion/core'
import { globalStylesStorybook } from '../src/GlobalStyles'
import { colorsV3 } from '../src'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
    default: 'gray100',
    values: [
      { name: 'gray100', value: colorsV3.gray100 },
      { name: 'gray900', value: colorsV3.gray900 },
    ],
  },
}

export const decorators = [
  (story) => (
    <>
      <Global styles={globalStylesStorybook} />
      {story()}
    </>
  )
];
