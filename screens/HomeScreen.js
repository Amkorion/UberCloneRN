import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import NavOptions from "../components/NavOptions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from "react-redux";
import { setOrigin, setDestination } from "../store/navSlice";
import NavFavorites from "../components/NavFavorites";

const HomeScreen = () => {
  const dispatch = useDispatch();
  return (
    <SafeAreaView className="bg-white h-full">
      <View className="p-5">
        <Image
          style={{ width: 100, height: 100, resizeMode: "contain" }}
          source={{ uri: "https://links.papareact.com/gzs" }}
        />
        <GooglePlacesAutocomplete
          styles={{ container: { flex: 0 }, textInput: { fontSize: 18 } }}
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
          returnKeyType={"search"}
          placeholder="Звідки?"
          minLength={2}
          enablePoweredByContainer={false}
          onPress={(data, details = null) => {
            dispatch(
              setOrigin({
                location: details.geometry.location,
                description: data.description,
              })
            );

            dispatch(setDestination(null));
          }}
          fetchDetails={true}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: "uk",
          }}
        />
        <NavOptions />
        <NavFavorites />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
