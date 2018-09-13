import {Platform} from 'react-primitives';

let fonts;

if (Platform.OS === 'web') {
  fonts = {
    MERRIWEATHER: "Merriweather-Light",
    CIRCULAR: "CircularStd",
    SORAY: "SoRay"
  }
} else {
  fonts = {
    MERRIWEATHER: "Merriweather-Light",
    CIRCULAR: 'CircularStd-Book',
    SORAY: 'SoRay-ExtraBold'
  }
}

export {fonts}
