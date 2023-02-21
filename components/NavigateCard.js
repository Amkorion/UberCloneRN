import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination } from "../store/navSlice";
import { useNavigation } from "@react-navigation/native";
import NavFavorites from "./NavFavorites";
import { Icon } from "@rneui/themed";

const NavigateCard = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  return (
    <SafeAreaView className="bg-white flex-1">
      <Text className="text-center py-5 text-xl">Привіт, Друже</Text>
      <View className="border-t border-gray-200 flex-shrink">
        <View>
          <GooglePlacesAutocomplete
            styles={toInputBoxStyles}
            placeholder="Куди?"
            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={400}
            fetchDetails={true}
            enablePoweredByContainer={false}
            query={{
              key: GOOGLE_MAPS_APIKEY,
              language: "uk",
            }}
            returnKeyType={"search"}
            minLength={2}
            onPress={(data, details = null) => {
              dispatch(
                setDestination({
                  location: details.geometry.location,
                  description: data.description,
                })
              );
              navigation.navigate("RideOptionsCard");
            }}
          />
        </View>
        <NavFavorites />
      </View>
      <View className="flex-row justify-evenly bg-white py-2 mt-auto border-t border-gray-100">
        <TouchableOpacity
          onPress={() => navigation.navigate("RideOptionsCard")}
          className="flex flex-row justify-between bg-black w-24 px-4 py-3 rounded-full"
        >
          <Icon name="car" type="font-awesome" color="white" size={16} />
          <Text className="text-white text-center"> Поїхати</Text>
        </TouchableOpacity>
        <TouchableOpacity className=" flex flex-row justify-between w-24 px-4 py-3 rounded-full">
          <Icon
            name="fast-food-outline"
            type="ionicon"
            color="black"
            size={16}
          />
          <Text className="text-black text-center">Поїсти</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default NavigateCard;

const toInputBoxStyles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingTop: 20,
    flex: 0,
  },
  textInput: {
    borderRadius: 0,
    fontSize: 18,
    backgroundColor: "#DDDDDF",
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
  },
});
