import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { Link } from 'expo-router';

const loyaltyCards = [
  {
    id: 1,
    name: 'One free Coffee',
    url:'../loyaltyCards/HnM/one-free-coffee',
    expiry: '9/16/2017',
    loyaltyCards: 4,
    imageUrl: require('../../assets/images/flat-white.jpg'),
  },
  {
    id: 2,
    name: 'Get your Planner',
    url:'./krispy-kreme-loyalty-card',
    expiry: '9/16/2017',
    loyaltyCards: 2,
    imageUrl: require('../../assets/images/krispy-kreme.jpg'),
  },
  {
    id: 3,
    name: 'One free Frapuccino',
    url:'./hm-loyalty-card-index',
    expiry: '9/16/2017',
    loyaltyCards: 3,
    imageUrl: require('../../assets/images/flat-white.jpg'),
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
                <Text className="color-orange-400 text-lg font-light">{card.loyaltyCards} stamps</Text>
                <Text className="color-zinc-700 text-lg font-light">Expires {card.expiry}</Text>             
              </View>
            </View>
            <Image
              className="w-5 h-5"
              source={require('../../assets/images/caret-right.png')}
            />
          </View>
        </Link>
      ))}
    </ScrollView>
  );
}
