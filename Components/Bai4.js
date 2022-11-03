import { View, Text, Animated, Button, Image } from "react-native";
import React, { useRef } from "react";

export default function Bai4() {
  const toLeft = useRef(new Animated.Value(0)).current;
  const fadeIn = useRef(new Animated.Value(0)).current;

  const anim = () => {
    Animated.timing(fadeIn, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: false,
    }).start();
    Animated.timing(toLeft, {
      toValue: 200,
      duration: 3000,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View className="w-[300px] h-fit p-2 relative border my-2">
      <Text>Bài 4</Text>
      <Animated.View style={{ opacity: fadeIn }}>
        <Image className="m-auto" source={require("../assets/mark.jpg")} />
      </Animated.View>
      <Animated.View style={{ marginLeft: toLeft }}>
        <Text className="text-xl">Nà ní :v</Text>
      </Animated.View>

      <Button title="Start" onPress={anim}></Button>
    </View>
  );
}
