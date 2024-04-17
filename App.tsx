import React from 'react'

import { SafeAreaProvider } from 'react-native-safe-area-context'

import Navigation from './src/Navigation'

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <Navigation />
    </SafeAreaProvider>
  )
}

export default App
