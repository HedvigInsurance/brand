import React from 'react'
import { Global } from '@emotion/core'
import { globalStylesStorybook } from '../src/GlobalStyles'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

export const decorators = [
  (story) => (
    <>
      <Global styles={globalStylesStorybook} />
      {story()}
    </>
  )
];
