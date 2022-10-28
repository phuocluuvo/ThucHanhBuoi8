import { View, Text, Animated, Button } from "react-native";
import React, { useEffect, useRef } from "react";

export default function Bai2() {
  const toBot = useRef(new Animated.Value(0)).current;

  const topToBot = () => {
    Animated.timing(toBot, {
      toValue: 100,
      duration: 2000,
      useNativeDriver: false,
    }).start();
  };
  return (
    <View className="w-[300px] h-[200px] p-2 border my-2">
      <Text>Bài 2</Text>
      <View className="flex-1 relative mx-auto">
        <Animated.View style={{ position: "absolute", top: toBot }}>
          <Text className={`text-center text-5xl`}>✈️</Text>
        </Animated.View>
      </View>
      <Button title="start" onPress={topToBot}></Button>
    </View>
  );
}
