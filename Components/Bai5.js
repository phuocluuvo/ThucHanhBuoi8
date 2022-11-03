import { View, Text, Animated, Button, Image } from "react-native";
import React, { useRef } from "react";

export default function Bai5() {
  const toLeft = useRef(new Animated.Value(0)).current;
  const toRight = useRef(new Animated.Value(0)).current;

  const fadeIn = useRef(new Animated.Value(0)).current;
  const toMove = useRef(new Animated.Value(0)).current;

  const anim3 = Animated.sequence([
    Animated.timing(fadeIn, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: false,
    }),
    Animated.timing(toMove, {
      toValue: 90,
      duration: 1000,
      useNativeDriver: false,
    }),
    Animated.timing(fadeIn, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: false,
    }),
  ]);
  const anim = Animated.parallel([
    Animated.timing(toLeft, {
      toValue: 150,
      duration: 1000,
      useNativeDriver: false,
    }),
    Animated.timing(toRight, {
      toValue: 150,
      duration: 1000,
      useNativeDriver: false,
    }),
    anim3,
  ]);

  return (
    <View className="w-[300px] h-fit p-2 border my-2">
      <Text>Bài 5</Text>
      <View></View>
      <View className="relative  h-[200px]">
        <Animated.View
          style={{ position: "absolute", left: toLeft, top: toLeft }}
        >
          <View className="w-10 h-10 bg-red-600"></View>
        </Animated.View>
        <Animated.View
          style={{ position: "absolute", right: toRight, top: toLeft }}
        >
          <View className="w-10 h-10 bg-green-600"></View>
        </Animated.View>
        <Animated.View
          style={{
            position: "absolute",
            opacity: fadeIn,
            top: toMove,
            left: 120,
          }}
        >
          <View className="w-10 h-10 bg-blue-600"></View>
        </Animated.View>
      </View>
      <Button
        title="Start"
        onPress={() => {
          anim.start();
        }}
      ></Button>
      <Button
        title="Restart"
        onPress={() => {
          anim.reset();
        }}
      ></Button>
    </View>
  );
}
