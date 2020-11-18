import { css } from '@emotion/core'
import { colorsV3, fonts, getCdnFontFaces } from '.'

export const globalStyles = css`
  ${getCdnFontFaces()}

  * {
    box-sizing: border-box;
  }

  body {
    font-family: ${fonts.FAVORIT}, sans-serif;
    font-size: 16px;
    line-height: 1.5;
    margin: 0;
    padding: 0;
    color: ${colorsV3.gray900};
    background-color: ${colorsV3.gray100};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-kerning: none;
    margin: 0 0 1rem 0;
    font-weight: 600;
    line-height: 1;
  }

  a {
    color: inherit;
    &:hover,
    &:focus {
      color: inherit;
    }
  }

  img {
    max-width: 100%;
  }

  input,
  button {
    font-size: inherit;
  }
`
export const globalStylesStorybook = css`
  ${globalStyles}
  body {
    background-color: transparent;
  }
`
