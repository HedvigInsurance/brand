import { Platform } from 'react-primitives';

const nativeFonts = {
  MERRIWEATHER: "Merriweather-Light",
  CIRCULAR: 'CircularStd-Book',
  SORAY: 'SoRay-ExtraBold'
}

const webFonts = {
  MERRIWEATHER: "Merriweather-Light",
  CIRCULAR: "CircularStd",
  SORAY: "SoRay"
}

const fonts = Platform.select({
  web: webFonts,
  android: nativeFonts,
  ios: nativeFonts
})

export { fonts }
