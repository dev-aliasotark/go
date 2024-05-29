import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { Link } from 'expo-router';

const loyaltyCards = [
  {
    id: 1,
    name: 'Starbucks Coffee',
    url:'./starbucks-loyalty-card',
    location: 'Los Angeles',
    loyaltyCards: 4,
    imageUrl: require('../assets/images/flat-white.jpg'),
  },
  {
    id: 2,
    name: 'Dunkin Donuts',
    url:'./krispy-kreme-loyalty-card',
    location: 'Scottsdale Centre',
    loyaltyCards: 2,
    imageUrl: require('../assets/images/krispy-kreme.jpg'),
  },
  {
    id: 3,
    name: 'H&M',
    url:'./hm-loyalty-card-index',
    location: 'Heartland Town Centre',
    loyaltyCards: 3,
    imageUrl: require('../assets/images/flat-white.jpg'),
  },
  {
    id: 4,
    name: 'Mango',
    url:'./mango-loyalty-card',
    location: 'Pacific Mall',
    loyaltyCards: 2,
    imageUrl: require('../assets/images/krispy-kreme.jpg'),
  },

];


export default function Index() {
  return (
    <ScrollView>
      {loyaltyCards.map((card) => (
        <Link key={card.id} href={`/loyaltyCards/${card.url}`}>
          <View className="flex flex-row items-center justify-between w-screen p-5 border-b border-zinc-200">
            <View className="flex flex-row items-center gap-4"> 
              <Image
                className="w-24 h-24"
                source={card.imageUrl}
              />
              <View>
                <Text className="color-zinc-700 text-xl font-medium">{card.name}</Text>
                <Text className="color-zinc-700 text-lg font-light">{card.location}</Text>          
                <Text className="color-orange-400 text-lg font-light">{card.loyaltyCards} loyalty cards</Text>   
              </View>
            </View>
            <Image
              className="w-5 h-5"
              source={require('../assets/images/caret-right.png')}
            />
          </View>
        </Link>
      ))}
    </ScrollView>
  );
}
