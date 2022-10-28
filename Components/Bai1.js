import { View, Text, Animated, Button } from "react-native";
import React, { useEffect, useRef } from "react";

export default function Bai1() {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    fadeIn();
  }, []);
  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View className="w-[300px] h-[200px] p-2 border ">
      <Text>Bài 1</Text>
      <View className="m-auto">
        <Animated.View style={{ opacity: fadeAnim }}>
          <Text className={`text-center`}>
            Welcome to Animation React Native
          </Text>
        </Animated.View>
      </View>
    </View>
  );
}
