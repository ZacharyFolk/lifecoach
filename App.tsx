import React from 'react';

import ScreenNavigator from './app/components/ScreenNavigator';
import {NativeBaseProvider} from 'native-base';

function App(): JSX.Element {
  return (
    <NativeBaseProvider>
      <ScreenNavigator />
    </NativeBaseProvider>
  );
}

export default App;
