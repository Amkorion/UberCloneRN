import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Map from "../components/Map";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavigateCard from "../components/NavigateCard";
import RideOptionsCard from "../components/RideOptionsCard";
import { Icon } from "@rneui/base";
import { useNavigation } from "@react-navigation/native";

const MapScreen = () => {
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        className="absolute top-16 bg-gray-100 left-8 z-50 rounded-full shadow-lg p-3"
      >
        <Icon name="menu" />
      </TouchableOpacity>
      <View className="h-1/2">
        <Map />
      </View>
      <View className="h-1/2">
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="NavigateCard" component={NavigateCard} />
          <Stack.Screen name="RideOptionsCard" component={RideOptionsCard} />
        </Stack.Navigator>
      </View>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({});
