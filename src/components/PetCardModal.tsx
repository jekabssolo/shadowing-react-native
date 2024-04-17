/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import {
  Dimensions,
  Image,
  Modal,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

import Button from './Button'
import SvgIcon from './SvgIcon'
import { PetData } from '../helpers/ApiClient'

type CardModalProps = {
  pet?: PetData
  onClose: () => void
}

const imageWidth = Dimensions.get('window').width - 40

const PetCardModal: React.FC<CardModalProps> = ({ pet, onClose }) => (
  <Modal visible={!!pet} style={{ flex: 1 }} onRequestClose={onClose}>
    <View style={{ flex: 1, paddingHorizontal: 20, paddingTop: 20 }}>
      <View style={{ paddingBottom: 20 }}>
        <Image
          source={pet?.image}
          style={{ width: imageWidth, height: imageWidth, borderRadius: 32 }}
        />
        <TouchableOpacity style={{ position: 'absolute', left: 24, top: 24 }}>
          <SvgIcon name="back" />
        </TouchableOpacity>
      </View>
      <Text style={{ color: '#2B2B2E', fontSize: 32, fontWeight: '600' }}>
        {pet?.breed} {pet?.name}
      </Text>
      <View style={{ flexDirection: 'row', gap: 10, paddingVertical: 20 }}>
        <View
          style={{
            backgroundColor: '#FFEBCD',
            borderRadius: 30,
            paddingHorizontal: 14,
            paddingVertical: 7,
          }}>
          <Text style={{ color: '#9B8769', fontSize: 13, fontWeight: '500' }}>
            {pet?.ageMonths} years
          </Text>
        </View>
        <View
          style={{
            backgroundColor: '#E0CDFF',
            borderRadius: 30,
            paddingHorizontal: 14,
            paddingVertical: 7,
          }}>
          <Text style={{ color: '#7C699B', fontSize: 13, fontWeight: '500' }}>
            {pet?.feature}
          </Text>
        </View>
        <View
          style={{
            backgroundColor: '#EE806C',
            borderRadius: 30,
            paddingHorizontal: 14,
            paddingVertical: 7,
          }}>
          <Text style={{ color: '#9B6972', fontSize: 13, fontWeight: '500' }}>
            {pet?.weight} kg
          </Text>
        </View>
      </View>
      <Text style={{ color: '#2B2B2EB3', fontSize: 16, fontWeight: '400' }}>
        {pet?.description}
      </Text>
      <View style={{ flex: 1 }} />
      <Button text="I want this pet!" onPress={() => {}} />
      <View style={{ height: 30 }} />
    </View>
  </Modal>
)

export default PetCardModal
