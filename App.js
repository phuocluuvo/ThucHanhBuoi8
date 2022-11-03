import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Bai1 from "./Components/Bai1";
import Bai2 from "./Components/Bai2";
import Bai3 from "./Components/Bai3";
import Bai4 from "./Components/Bai4";
import Bai5 from "./Components/Bai5";
import Bai6 from "./Components/Bai6";
import Bai7 from "./Components/Bai7";

export default function App() {
  return (
    <View className="flex-1 m-auto mt-16">
      <StatusBar />
      <Text className="text-xl text-center font-bold">Animations</Text>
      <ScrollView className="w-full">
        <Bai1 />
        <Bai2 />
        <Bai3 />
        <Bai4 />
        <Bai5 />
        <Bai6 />
        <Bai7 />
      </ScrollView>
    </View>
  );
}
