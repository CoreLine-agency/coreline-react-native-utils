import { useEffect, useState } from 'react';
import * as Font from 'expo-font';

export interface IExpoFontProviderProps {
  children: any;
  fonts: object;
}

const ExpoFontProvider = (props: IExpoFontProviderProps) => {
  const { children, fonts } = props;
  const [isReadyFont, setReadyFont] = useState(false);

  useEffect(() => {
    (async () => {
      await Font.loadAsync(fonts);
      setReadyFont(true)
    })()
  });

  if (!isReadyFont) {
    return null
  }

  return children;
}
