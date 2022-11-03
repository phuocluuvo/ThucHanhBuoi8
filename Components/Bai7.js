import { View, Text, Animated, Button, Easing } from "react-native";
import React, { useRef, useState } from "react";

export default function Bai7() {
  const toSpin = useRef(new Animated.Value(0)).current;

  const anim = Animated.loop(
    Animated.sequence([
      Animated.timing(toSpin, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: false,
      }),
    ])
  );
  const spining = () => {
    anim.start();
  };

  const [toggle, setToggle] = useState(true);
  return (
    <View className="w-[300px] h-[200px] p-2 relative border my-2">
      <Text>Bài 7</Text>
      <View className="flex-1 relative m-auto justify-center items-center">
        <Animated.Image
          className="w-28 h-28"
          source={{
            uri: "https://comprehensivenaturalmedicine.com/wp-content/uploads/2013/03/5elements.png",
          }}
          style={{
            transform: [
              {
                rotate: toSpin.interpolate({
                  inputRange: [0, 1],
                  outputRange: ["0deg", "360deg"],
                }),
              },
            ],
          }}
        />
      </View>
      {toggle ? (
        <Button
          title="start"
          color={"green"}
          onPress={() => {
            spining();
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
