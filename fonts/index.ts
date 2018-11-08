import { Fonts } from "./types";

const fonts: Fonts = {
  MERRIWEATHER: 'Merriweather',
  CIRCULAR: 'CircularStd',
  SORAY: 'SoRay'
}


interface Flavor {
  flavorName: string
  weight: number
  style: string
}

const fontFlavours: { [fontName: string]: Flavor[] } = {
  SoRay: [{ flavorName: 'ExtraBold', weight: 800, style: 'normal' }],
  CircularStd: [
    { flavorName: 'Bold', weight: 600, style: 'normal' },
    { flavorName: 'BoldItalic', weight: 600, style: 'italic' },
    { flavorName: 'Book', weight: 400, style: 'normal' },
    { flavorName: 'BookItalic', weight: 400, style: 'italic' },
  ],
  Merriweather: [
    { flavorName: 'Light', weight: 300, style: 'normal' },
    { flavorName: 'LightItalic', weight: 300, style: 'italic' },
    { flavorName: 'Regular', weight: 400, style: 'normal' },
    { flavorName: 'RegularItalic', weight: 400, style: 'italic' },
    { flavorName: 'BoldItalic', weight: 600, style: 'italic' },
    { flavorName: 'Bold', weight: 600, style: 'normal' },
  ],
}

const getCdnFontFace = () => Object.keys(fontFlavours).map((fontName) =>
  fontFlavours[fontName].map(
    (flavour) => `
  @font-face {
    font-family: "${fontName}";
    font-style: ${flavour.style};
    font-weight: ${flavour.weight};
    src:
      url("https://cdn.hedvig.com/identity/fonts/${fontName}-${flavour.flavorName}.woff2") format("woff2"),
      url("https://cdn.hedvig.com/identity/fonts/${fontName}-${flavour.flavorName}.woff") format("woff")
    ;
  }
`,
  )
  .join('\n'),
)
.join('\n')

export { fonts, getCdnFontFace }
