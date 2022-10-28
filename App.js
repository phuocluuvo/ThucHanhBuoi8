import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Bai1 from "./Components/Bai1";
import Bai2 from "./Components/Bai2";
import Bai3 from "./Components/Bai3";
import Bai4 from "./Components/Bai4";

export default function App() {
  return (
    <View className="flex-1 m-auto mt-20">
      <StatusBar />
      <Text className="text-xl text-center font-bold">Animations</Text>
      <ScrollView className="w-full">
        <Bai1 />
        <Bai2 />
        <Bai3 />
        <Bai4 />
      </ScrollView>
    </View>
  );
}
