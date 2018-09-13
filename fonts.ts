import { Platform } from 'react-primitives';

interface Fonts {
  MERRIWEATHER: string,
  CIRCULAR: string,
  SORAY: string
}

const nativeFonts = {
  MERRIWEATHER: 'Merriweather-Light',
  CIRCULAR: 'CircularStd-Book',
  SORAY: 'SoRay-ExtraBold',
}

const webFonts = {
  MERRIWEATHER: 'Merriweather-Light',
  CIRCULAR: 'CircularStd',
  SORAY: 'SoRay'
}

const fonts: Fonts = Platform.select({
  web: webFonts,
  android: nativeFonts,
  ios: nativeFonts
})

export { fonts }
