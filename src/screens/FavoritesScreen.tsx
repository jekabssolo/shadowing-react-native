/* eslint-disable react-native/no-inline-styles */
import React, { useCallback, useEffect, useState } from 'react'
import {
  Dimensions,
  FlatList,
  Image,
  ListRenderItem,
  SafeAreaView,
  View,
} from 'react-native'

import Button from '../components/Button'
import ApiClient, { DogImage } from '../helpers/ApiClient'

const windowWidth = Dimensions.get('window').width
const imageSize = (windowWidth - 30) / 2 - 20 - 10

const ImageCard: ListRenderItem<DogImage> = ({ item }) => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        borderRadius: 16,
        padding: 10,
        marginRight: 10,
      }}>
      <Image
        source={{ uri: item.url }}
        style={{ width: imageSize, height: imageSize, borderRadius: 16 }}
      />
    </View>
  )
}

const Divider = () => <View style={{ height: 15 }} />

export default (): JSX.Element => {
  const [images, setImages] = useState<DogImage[]>([])

  const loadNewImages = useCallback(() => {
    ApiClient.getImages().then(setImages)
  }, [])

  useEffect(() => {
    loadNewImages()
  }, [loadNewImages])

  return (
    <SafeAreaView style={{ flex: 1, paddingTop: 30 }}>
      <FlatList
        data={images}
        style={{ flex: 1 }}
        numColumns={2}
        renderItem={ImageCard}
        contentContainerStyle={{
          paddingLeft: 20,
          paddingRight: 10,
          paddingBottom: 10,
        }}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={Divider}
      />
      <View style={{ marginTop: 'auto', marginBottom: 20 }}>
        <Button text="Ielādēt citus" onPress={() => {}} />
      </View>
    </SafeAreaView>
  )
}
