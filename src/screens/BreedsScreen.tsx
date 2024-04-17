/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useState } from 'react'
import {
  FlatList,
  Image,
  ListRenderItem,
  SafeAreaView,
  Text,
  View,
} from 'react-native'

import ApiClient, { DogBreed } from '../helpers/ApiClient'

const BreedCard: ListRenderItem<DogBreed> = ({ item }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fa7864',
        borderRadius: 10,
        padding: 10,
      }}>
      <Image
        source={{ uri: item.image.url }}
        style={{ width: 60, height: 60 }}
      />
      <View style={{ width: 10 }} />
      <Text style={{ fontSize: 20, color: '#FBF5F4' }}>{item.name}</Text>
    </View>
  )
}

const Divider = () => <View style={{ height: 15 }} />

export default (): JSX.Element => {
  const [breeds, setBreeds] = useState<DogBreed[]>([])

  useEffect(() => {
    ApiClient.getBreeds(10).then(setBreeds)
  }, [])

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <Text
        style={{
          color: '#fa7864',
          fontSize: 30,
          fontWeight: 'bold',
          paddingLeft: 20,
          paddingBottom: 10,
        }}>
        Suņu šķirnes
      </Text>
      <FlatList
        data={breeds}
        style={{ flex: 1 }}
        renderItem={BreedCard}
        contentContainerStyle={{ paddingHorizontal: 20 }}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={Divider}
      />
    </SafeAreaView>
  )
}
