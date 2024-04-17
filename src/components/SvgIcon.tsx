import React, { useMemo } from 'react'

import { SvgProps } from 'react-native-svg'

import BackSvg from '../assets/svg/back.svg'
import BellSvg from '../assets/svg/bell.svg'
import ChatSvg from '../assets/svg/chat.svg'
import FavoriteSvg from '../assets/svg/favorite.svg'
import HomeSvg from '../assets/svg/home.svg'
import ProfileSvg from '../assets/svg/profile.svg'

export type SvgName = 'home' | 'favorite' | 'chat' | 'profile' | 'bell' | 'back'

const SvgIcon: React.FC<SvgProps & { name: SvgName }> = ({
  name,
  ...props
}) => {
  const Component = useMemo(() => {
    switch (name) {
      case 'home':
        return HomeSvg
      case 'favorite':
        return FavoriteSvg
      case 'chat':
        return ChatSvg
      case 'profile':
        return ProfileSvg
      case 'bell':
        return BellSvg
      case 'back':
        return BackSvg
    }
  }, [name])

  const defaultColor = useMemo(() => {
    switch (name) {
      default:
        return '#F0F' // For color to work svg needs to contain "currentColor". In that case color is required
    }
  }, [name])

  return <Component color={defaultColor} {...props} />
}

export default SvgIcon
