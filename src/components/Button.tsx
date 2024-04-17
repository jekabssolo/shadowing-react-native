/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'

type ButtonProps = {
  text: string
  onPress: TouchableOpacityProps['onPress']
}

const Button: React.FC<ButtonProps> = ({ text, onPress }) => (
  <TouchableOpacity
    style={{
      backgroundColor: '#EE806C',
      borderRadius: 100,
      paddingVertical: 20,
      paddingHorizontal: 15,
      marginHorizontal: 20,
      alignItems: 'center',
    }}
    onPress={onPress}>
    <Text style={{ color: 'white', fontSize: 16 }}>{text}</Text>
  </TouchableOpacity>
)

export default Button
