import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import { Icon } from "@rneui/base";
import { useNavigation } from "@react-navigation/native";
import { selectTravelTimeInformation } from "../store/navSlice";
import { useSelector } from "react-redux";

const data = [
  {
    id: "Uber-x-123",
    title: "Uber X",
    multiplier: 1,
    image: "https://links.papareact.com/3pn",
  },
  {
    id: "Uber-xl-456",
    title: "Uber XL",
    multiplier: 1.2,
    image: "https://links.papareact.com/5w8",
  },
  {
    id: "Uber-LUX-789",
    title: "Uber LUX",
    multiplier: 1.75,
    image: "https://links.papareact.com/7pf",
  },
];

const UBER_RATE = 7.5;

const RideOptionsCard = () => {
  const [select, setSelect] = useState(null);
  const navigation = useNavigation();
  const travelTimeInformation = useSelector(selectTravelTimeInformation);

  let style = "bg-black py-3 m-3";
  if (!select) {
    style = "bg-gray-300 py-3 m-3";
  }
  return (
    <SafeAreaView className="bg-white flex-grow">
      <View>
        <Text className="text-center py-5 text-xl">
          Відстань - {travelTimeInformation?.distance?.text}
        </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("NavigateCard")}
          className="absolute top-3 left-5 p-3 rounded-full"
        >
          <Icon name="chevron-left" type="fontawesome" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item: { id, image, multiplier, title }, item }) => (
          <TouchableOpacity
            onPress={() => setSelect(item)}
            style={[styles.flat, id === select?.id && styles.selected]}
            // className="flex-row items-center justify-between px-10"
          >
            <Image style={styles.icon} source={{ uri: image }} />
            <View className="-ml-6">
              <Text className="text-xl font-semibold">{title}</Text>
              <Text>
                Тривалість поїздки: {travelTimeInformation?.duration?.text}
              </Text>
            </View>
            <Text className="text-xl">
              {new Intl.NumberFormat("ua-ua", {
                style: "currency",
                currency: "UAH",
              }).format(
                (travelTimeInformation?.duration?.value *
                  UBER_RATE *
                  multiplier) /
                  100
              )}
            </Text>
          </TouchableOpacity>
        )}
      />

      <View className="mt-auto border-t border-gray-200">
        <TouchableOpacity disabled={!select} className={style}>
          <Text className="text-center text-white text-xl">
            Оберіть {select?.title}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RideOptionsCard;

const styles = StyleSheet.create({
  icon: {
    height: 100,
    width: 100,
    resizeMode: "contain",
  },
  flat: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },

  selected: {
    backgroundColor: "#e5e7eb",
  },
});
