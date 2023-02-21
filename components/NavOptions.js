import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Icon } from "@rneui/base";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectOrigin } from "../store/navSlice";
import NavFavorites from "./NavFavorites";

const data = [
  {
    id: "123",
    title: "Поїхали",
    image: "https://links.papareact.com/3pn",
    screen: "Map",
  },
  {
    id: "345",
    title: "Зголодніли?",
    image: "https://links.papareact.com/28w",
    screen: "EatsScreen",
  },
];

const NavOptions = () => {
  const navigation = useNavigation();
  const origin = useSelector(selectOrigin);
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      horizontal
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate(item.screen)}
          className="p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40"
          disabled={!origin}
        >
          <View style={!origin && styles.unactive}>
            <Image
              style={{ width: 120, height: 120, resizeMode: "contain" }}
              source={{ uri: item.image }}
            />
            <Text className="m-2 text-lg font-semibold">{item.title}</Text>
            <Icon
              style={styles.icon}
              className="p-2 bg-black rounded-full w-10 mt-4"
              type="antdesign"
              name="arrowright"
              color="white"
            />
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;

const styles = StyleSheet.create({
  icon: {
    padding: 2,
    backgroundColor: "black",
    borderRadius: "100%",
    width: 30,
    marginTop: 4,
  },
  unactive: {
    opacity: 0.2,
  },
});
