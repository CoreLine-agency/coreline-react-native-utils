## Usages

### ExpoFontProvider
Example usage:
```tsx
import { ExpoFontProvider } from 'coreline-react-native-utils';
 
// somewhere in the root of your tsx file
// note that it HAS TO be the root of a file so that fonts can be picked up by the bundler
const fonts = {
  KarlaRegular: require('../../assets/fonts/Karla-Regular.ttf'),
  KarlaBold: require('../../assets/fonts/Karla-Bold.ttf'),
  Arial: require('../../assets/fonts/Arial.ttf'),
};

....
....

// somewhere in the render of your Application component
<ExpoFontProvider fonts={fonts}>
 <ApplicationComponent>
  <SomethingElse>
   ....
  </SomethingElse>
 </ApplicationComponent>
</ExpoFontProvider>
```
