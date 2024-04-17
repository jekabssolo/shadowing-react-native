/* eslint-disable react-native/no-inline-styles */
import React, { useMemo, useState } from 'react'
import {
  Dimensions,
  FlatList,
  Image,
  ImageSourcePropType,
  ListRenderItem,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

import PetCardModal from '../components/PetCardModal'
import SvgIcon from '../components/SvgIcon'
import ApiClient, { PetData } from '../helpers/ApiClient'

const FilterImageAll = require('../assets/filter_all.png')
const FilterImageCat = require('../assets/filter_cat.png')
const FilterImageDog = require('../assets/filter_dog.png')

enum FilterType {
  All,
  Dog,
  Cat,
}

const FilterItem: React.FC<{
  text: string
  image: ImageSourcePropType
  isSelected: Boolean
  onPress: () => void
}> = ({ text, image, isSelected, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: isSelected ? '#EE806C' : 'white',
        borderWidth: 1,
        borderRadius: 100,
        paddingLeft: 10,
        paddingRight: 20,
        paddingVertical: 10,
        marginRight: 10,
      }}
      onPress={onPress}>
      <Image
        source={image}
        style={{ height: 32, width: 32, borderRadius: 100 }}
      />
      <View style={{ width: 20 }} />
      <Text
        style={{
          color: '#2B2B2E99',
          fontSize: 16,
          fontWeight: '600',
        }}>
        {text}
      </Text>
    </TouchableOpacity>
  )
}

const Divider = () => <View style={{ height: 15 }} />

const windowWidth = Dimensions.get('window').width
const imageSize = (windowWidth - 30) / 2 - 10

export default (): JSX.Element => {
  const [filter, setFilter] = useState<FilterType>(FilterType.All)
  const [selectedPet, setSelectedPet] = useState<PetData>()

  const allPets = useMemo(() => ApiClient.getPets(), [])

  const renderPetCard: ListRenderItem<PetData> = ({ item }) => {
    return (
      <TouchableOpacity
        style={{
          backgroundColor: 'white',
          borderRadius: 16,
          marginRight: 10,
        }}
        onPress={() => setSelectedPet(item)}>
        <Image
          source={item.image}
          style={{
            width: imageSize,
            height: 0.8 * imageSize,
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingHorizontal: 10,
            paddingTop: 10,
          }}>
          <Text
            style={{
              color: '#2B2B2E',
              fontSize: 16,
              fontWeight: '600',
            }}>
            {item.name}
          </Text>
          <Text
            style={{
              color: '#2B2B2EB3',
              fontSize: 13,
              fontWeight: '500',
            }}>
            {item.ageMonths} months
          </Text>
        </View>
        <Text
          style={{
            color: '#2B2B2EB3',
            fontSize: 12,
            fontWeight: '400',
            paddingHorizontal: 10,
            paddingBottom: 20,
          }}>
          {item.feature}
        </Text>
      </TouchableOpacity>
    )
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <PetCardModal
        pet={selectedPet}
        onClose={() => setSelectedPet(undefined)}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 30,
          paddingVertical: 20,
        }}>
        <Image
          source={require('../assets/logo.png')}
          style={{ height: 35, width: 50 }}
        />
        <SvgIcon name="bell" />
      </View>
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 20,
          paddingBottom: 20,
        }}>
        <FilterItem
          text="All"
          image={FilterImageAll}
          isSelected={filter === FilterType.All}
          onPress={() => setFilter(FilterType.All)}
        />
        <FilterItem
          text="Dog"
          image={FilterImageCat}
          isSelected={filter === FilterType.Dog}
          onPress={() => setFilter(FilterType.Dog)}
        />
        <FilterItem
          text="Kaķi"
          image={FilterImageDog}
          isSelected={filter === FilterType.Cat}
          onPress={() => setFilter(FilterType.Cat)}
        />
      </View>
      <FlatList
        data={allPets}
        scrollEnabled={false}
        style={{ flex: 1 }}
        numColumns={2}
        renderItem={renderPetCard}
        contentContainerStyle={{
          paddingLeft: 20,
          paddingRight: 10,
          paddingVertical: 20,
        }}
        ItemSeparatorComponent={Divider}
      />
    </SafeAreaView>
  )
}
