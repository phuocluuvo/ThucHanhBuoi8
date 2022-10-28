import { View, Text, Animated, Button } from "react-native";
import React, { useRef, useState } from "react";

export default function Bai3() {
  const toRight = useRef(new Animated.Value(-50)).current;
  const anim = Animated.loop(
    Animated.sequence([
      Animated.timing(toRight, {
        toValue: 0,
        duration: 2000,
        useNativeDriver: false,
      }),
      Animated.timing(toRight, {
        toValue: -50,
        duration: 2000,
        useNativeDriver: false,
      }),
    ])
  );
  const leftToRight = () => {
    anim.start();
  };

  const [toggle, setToggle] = useState(true);
  return (
    <View className="w-[300px] h-[200px] p-2 relative border my-2">
      <Text>Bài 3</Text>
      <View className="flex-1 relative m-auto">
        <Animated.View style={{ position: "absolute", top: 30, left: toRight }}>
          <Text className={`text-center text-5xl`}>⚽</Text>
        </Animated.View>
      </View>
      {toggle ? (
        <Button
          title="start"
          color={"green"}
          onPress={() => {
            leftToRight();
            setToggle(!toggle);
          }}
        ></Button>
      ) : (
        <Button
          title="stop"
          color={"red"}
          onPress={() => {
            anim.stop();
            setToggle(!toggle);
          }}
        ></Button>
      )}
      <Button
        title="restart"
        color={"orange"}
        onPress={() => {
          anim.start();
        }}
      ></Button>
    </View>
  );
}
