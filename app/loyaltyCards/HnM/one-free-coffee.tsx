import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

const stampsData = [
  {
    id: 1,
    stamps: 4, // Change this number to test different scenarios
  },
];

export default function Index() {
  return (
    <ScrollView>
      <View className="w-full p-4">
        {stampsData.map((card) => {
          const totalBoxes = 9;
          const filledBoxes = card.stamps;
          const emptyBoxes = totalBoxes - filledBoxes;
          
          return (
            <View key={card.id} className="flex flex-row flex-wrap content-start justify-around gap-y-8 w-full">
              {/* Render filled stamp boxes */}
              {Array.from({ length: filledBoxes }).map((_, index) => (
                <View key={index} className="p-8 w-5/12 h-auto border border-solid border-gray-300">
                  <Image
                    className="w-auto h-auto m-auto"
                    source={require('../../../assets/images/stamp.png')}
                  />
                </View>
              ))}
              {/* Render empty boxes with numbers */}
              {Array.from({ length: emptyBoxes }).map((_, index) => (
                <View key={filledBoxes + index} className="flex items-center p-8 w-5/12 h-auto border border-solid border-gray-300">
                  <Text className="text-8xl font-bold text-gray-400 mx-auto my-0">{filledBoxes + index + 1}</Text>
                </View>
              ))}

                <View className="flex items-center content-center p-8 w-5/12 h-auto border border-solid border-gray-300">
                  <Text className="h-auto text-4xl font-bold text-lime-500 m-auto uppercase">Free</Text>
                </View>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}
