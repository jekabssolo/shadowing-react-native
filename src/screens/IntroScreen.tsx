/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import { Text, SafeAreaView, ImageBackground } from 'react-native'

import Button from '../components/Button'

const IntroScreen: React.FC<{ setIsIntroCompleted: () => void }> = ({
  setIsIntroCompleted,
}) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={require('../assets/introDog.png')}
        style={{ flex: 1, justifyContent: 'flex-end', paddingVertical: 50 }}>
        <Text
          style={{
            fontSize: 32,
            fontWeight: '600',
            color: 'white',
            paddingHorizontal: 15,
            marginBottom: 50,
            textAlign: 'center',
          }}>
          Happiness is closer than you think
        </Text>
        <Button text="Get started" onPress={setIsIntroCompleted} />
      </ImageBackground>
    </SafeAreaView>
  )
}

export default IntroScreen
