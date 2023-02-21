import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
// import Icon from "react-native-vector-icons/Entypo";
import { Icon } from "@rneui/base";

const data = [
  {
    id: 1234,
    icon: "home",
    location: "Дім",
    destination: "Київ, Хрещатик, 32",
  },
  {
    id: 4567,
    icon: "briefcase",
    location: "Робота",
    destination: "Київ, Саксаганського, 101",
  },
];

const NavFavorites = () => {
  return (
    <FlatList
      data={data}
      ItemSeparatorComponent={() => (
        <View className="bg-gray-200 h-1" style={{ height: 0.5 }} />
      )}
      keyExtractor={(item) => item.id}
      renderItem={({ item: { icon, location, destination } }) => (
        <TouchableOpacity className="flex-row items-center p-5">
          <Icon
            // className="mr-4 rounded-full bg-gray-300 p-3"
            style={styles.icon}
            name={icon}
            type="ionicon"
            color="white"
            size={18}
          />
          <View>
            <Text className="font-semibold text-lg">{location}</Text>
            <Text className="text-gray-500">{destination}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavFavorites;

const styles = StyleSheet.create({
  icon: {
    margin: 4,
    borderRadius: "100%",
    backgroundColor: "#E0E0E0",
    padding: 5,
  },
});
