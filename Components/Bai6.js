import { View, Text, Animated, Button } from "react-native";
import React, { useRef, useState } from "react";

export default function Bai6() {
  const toShake = useRef(new Animated.Value(0)).current;

  const anim = Animated.loop(
    Animated.sequence([
      Animated.timing(toShake, {
        toValue: 1,
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
      <Text>Bài 6</Text>
      <View className="flex-1 relative m-auto">
        <Animated.View
          style={{
            transform: [
              {
                rotate: toShake.interpolate({
                  inputRange: [0, 0.5, 1],
                  outputRange: ["-60deg", "60deg", "-60deg"],
                }),
              },
            ],
          }}
        >
          <Text className={`text-center text-5xl`}>🔔</Text>
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
    </View>
  );
}
