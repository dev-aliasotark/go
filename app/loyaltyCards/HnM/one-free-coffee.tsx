import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

const stampsData = [
  {
    id: 1,
    stamps: 3, // Change this number to test different scenarios
  },
];

export default function Index() {
  return (
    <ScrollView>
      <View className="w-full p-4">
        {stampsData.map((card) => {
          const totalBoxes = 10;
          const filledBoxes = card.stamps;
          const emptyBoxes = totalBoxes - filledBoxes;
          
          return (
            <View key={card.id} className="flex flex-row flex-wrap border-b-2 border-gray-200 pb-2 mb-2 w-full">
              {/* Render filled stamp boxes */}
              {Array.from({ length: filledBoxes }).map((_, index) => (
                <View key={index} className="w-1/3 p-2">
                  <Image
                    className="w-full h-auto"
                    source={require('../../../assets/images/stamp.png')}
                  />
                </View>
              ))}
              {/* Render empty boxes with numbers */}
              {Array.from({ length: emptyBoxes }).map((_, index) => (
                <View key={filledBoxes + index} className="w-1/3 p-2 flex items-center justify-center border border-solid border-gray-600">
                  <Text className="text-lg font-bold">{filledBoxes + index + 1}</Text>
                </View>
              ))}
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}
