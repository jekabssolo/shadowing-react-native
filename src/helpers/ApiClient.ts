import { ImageSourcePropType } from 'react-native'

import RestApi from './RestApi'

export type DogImage = {
  id: string
  url: string
}

export type DogBreed = {
  id: string
  name: string
  image: DogImage
}

export enum PetType {
  Dog,
  Cat,
}

export type PetData = {
  type: PetType
  name: string
  ageMonths: number
  breed: string
  image: ImageSourcePropType
  weight: number
  feature: string
  description: string
}

function getBreeds(numberOfBreeds: Number): Promise<[DogBreed]> {
  return RestApi.getApiRequest(`breeds?limit=10`)
}

function getImages(): Promise<[DogImage]> {
  return RestApi.getApiRequest(`images/search?limit=6`)
}

function getPets(): PetData[] {
  return [
    {
      type: PetType.Dog,
      name: 'Gary',
      ageMonths: 36,
      breed: 'Yorkshire Terrier',
      image: require('../assets/dogs/gary.jpeg'),
      weight: 17,
      feature: 'Friendly',
      description: 'Gary is a very friendly dog',
    },
    {
      type: PetType.Dog,
      name: 'Peach',
      ageMonths: 30,
      breed: 'Half-breed',
      image: require('../assets/dogs/peach.jpeg'),
      weight: 20,
      feature: 'Active',
      description:
        'Peach loves to exercise a lot and is very friendly, especially with children.',
    },
    {
      type: PetType.Cat,
      name: 'Mittens',
      ageMonths: 8,
      breed: 'Siamese',
      image: require('../assets/cats/mittens.jpeg'),
      weight: 10,
      feature: 'Playful',
      description: 'Mittens is a playful and energetic cat.',
    },
    {
      type: PetType.Cat,
      name: 'Whiskers',
      ageMonths: 12,
      breed: 'Maine Coon',
      image: require('../assets/cats/whiskers.jpeg'),
      weight: 15,
      feature: 'Fluffy',
      description: 'Whiskers is a fluffy and friendly cat.',
    },
    {
      type: PetType.Dog,
      name: 'Whitney',
      ageMonths: 2,
      breed: 'Brittish Longhair',
      image: require('../assets/dogs/whitney.jpeg'),
      weight: 7,
      feature: 'Can drive',
      description:
        'Whitney has a character that is not for everyone but she will be your best friend if you are patient and kind.',
    },
    {
      type: PetType.Cat,
      name: 'Luna',
      ageMonths: 6,
      breed: 'Persian',
      image: require('../assets/cats/luna.jpeg'),
      weight: 8,
      feature: 'Calm',
      description: 'Luna is a calm and elegant cat.',
    },
    {
      type: PetType.Dog,
      name: 'Buggy',
      ageMonths: 4,
      breed: 'Jack Russel Terrier',
      image: require('../assets/dogs/buggy.jpeg'),
      weight: 25,
      feature: 'Hungry all the time',
      description:
        'Buggy will be your best friend if you play with him and feed him.',
    },
    {
      type: PetType.Dog,
      name: 'Willy',
      ageMonths: 12,
      breed: 'Samoyed',
      image: require('../assets/dogs/willy.png'),
      weight: 23,
      feature: 'Knows the commands',
      description:
        "The kindest Samoyed we've ever met. Likes to play with balls, is friends with other animals. Despite the white color, he loves rain and puddles.",
    },
    {
      type: PetType.Cat,
      name: 'Simba',
      ageMonths: 10,
      breed: 'Bengal',
      image: require('../assets/cats/simba.jpeg'),
      weight: 12,
      feature: 'Adventurous',
      description: 'Simba is an adventurous and curious cat.',
    },
    {
      type: PetType.Cat,
      name: 'Oliver',
      ageMonths: 4,
      breed: 'Scottish Fold',
      image: require('../assets/cats/oliver.jpeg'),
      weight: 6,
      feature: 'Playful',
      description: 'Oliver is a playful and mischievous cat.',
    },
    {
      type: PetType.Cat,
      name: 'Coco',
      ageMonths: 35,
      breed: 'Ragdoll',
      image: require('../assets/cats/coco.jpeg'),
      weight: 11,
      feature: 'Gentle',
      description: 'Coco is a gentle and affectionate cat.',
    },
    {
      type: PetType.Dog,
      name: 'Kiwi',
      ageMonths: 10,
      breed: 'Golden Retriever',
      image: require('../assets/dogs/kiwi.jpeg'),
      weight: 25,
      feature: 'Goodest boy',
      description:
        'Kiwi is the goodest boy who likes to play fetch and cuddle.',
    },
  ]
}

export default { getBreeds, getImages, getPets }
