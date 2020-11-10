# Hedvig Brand
Everything brand related 💅

## Javascript
```
yarn add @hedviginsurance/brand
```

### Colors
```javascript
  import { colors } from "@hedviginsurance/brand"

  // see colors.ts for available colors

  colors.GREEN // etc
```

### Fonts
```javascript
  import { fonts } from '@hedviginsurance/brand'

  fonts.SORAY
````

## Publishing this package

This package is automatically published by CI (Codefresh) whenever a version is tagged in git. To publish a new version:
 1. While on the `master` branch, use `yarn version` to pin your new version number and create a git tag for it
 2. Use `git push origin master && git push origin --tags` to push the new tag to the server
 3. Go into Codefresh, find the build, wait for the checks to pass and approve the publishing step once prompted
 4. Wait for it... ... ... Done ✅
