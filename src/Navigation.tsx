/* eslint-disable react/no-unstable-nested-components */
import React, { useState } from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'

import SvgIcon from './components/SvgIcon'
import BreedsScreen from './screens/BreedsScreen'
import FavoritesScreen from './screens/FavoritesScreen'
import HomeScreen from './screens/HomeScreen'
import IntroScreen from './screens/IntroScreen'

export type MainStackParamsType = {
  Intro?: never
}

export default (): JSX.Element => {
  const Tab = createBottomTabNavigator()
  const [isIntroCompleted, setIsIntroCompleted] = useState(false)

  if (!isIntroCompleted) {
    return <IntroScreen setIsIntroCompleted={() => setIsIntroCompleted(true)} />
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={() => ({
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: 'green',
          tabBarInactiveTintColor: '#ACACAC',
          tabBarStyle: {
            borderTopLeftRadius: 32,
            borderTopRightRadius: 32,
          },
        })}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon(props) {
              return <SvgIcon name="home" color={props.color} />
            },
          }}
        />
        <Tab.Screen
          name="Favorites"
          component={FavoritesScreen}
          options={{
            tabBarIcon(props) {
              return <SvgIcon name="favorite" color={props.color} />
            },
          }}
        />
        <Tab.Screen
          name="Breeds"
          component={BreedsScreen}
          options={{
            tabBarIcon(props) {
              return <SvgIcon name="chat" color={props.color} />
            },
          }}
          listeners={{
            tabPress: e => {
              e.preventDefault()
            },
          }}
        />
        <Tab.Screen
          name="Profile"
          component={BreedsScreen}
          options={{
            tabBarIcon(props) {
              return <SvgIcon name="profile" color={props.color} />
            },
          }}
          listeners={{
            tabPress: e => {
              setIsIntroCompleted(false)
              e.preventDefault()
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
