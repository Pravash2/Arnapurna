import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";

import TabBarIcon from "../components/TabBarIcon";
import HomeScreen from "../screens/HomeScreen";
import LinksScreen from "../screens/AllPost";
import SettingsScreen from "../screens/SettingsScreen";

import Disease_Detection_Screen from "../screens/Disease_Detection_Screen";
import DiseaseScreen from "../screens/DiseaseScreen";
import FindDisease from "../screens/FindDisease";
import SelectPlantScreen from "../screens/SelectPlant";
import InstantSolutionScreen from "../screens/InstantSolutionScreen";
import PostQueryScreen from "../screens/PostQuery";
import AllPostScreen from "../screens/AllPost";
import SinglePostScreen from "../screens/SinglePost";
import yield_predictionscreen from "../screens/yield_prediction";
import District_SelectionScreen from "../screens/District_Selection";
import Crop_Selection_Screen from "../screens/Crop_Selection";
import UploadInputScreen from "../screens/InputUpload";
import QrCodeScreen from "../screens/Nutrition_Recomendation/QrCode";
import SelectZoneScreen from "../screens/Nutrition_Recomendation/SelectZone";
import Weed_DetectionScreen from "../screens/Weed_Detection/CameraScreen";
import Weed_UploadScreen from "../screens/Weed_Detection/DiseaseScreen";
import Weed_FindScreen from "../screens/crop_prediction/FindDisease";
import SeedLing_DetectionScreen from "../screens/Seedling_Identification/CameraScreen";
import SeedLing_UploadScreen from "../screens/Seedling_Identification/DiseaseScreen";
import SeedLing_FindScreen from "../screens/Seedling_Identification/FindDisease";
import Hidden_DetectionScreen from "../screens/hiddenWeedIdentification/CameraScreen";
import Hidden_UploadScreen from "../screens/hiddenWeedIdentification/DiseaseScreen";
import Hidden_FindScreen from "../screens/hiddenWeedIdentification/FindDisease";
import Crop_FindScreen from "../screens/crop_prediction/FindDisease";
import Nutrition_Screen from "../screens/Nutrition_Recomendation/QrCode";
import Nutrition_Camera_Screen from "../screens/Nutrition_Recomendation/CameraScreen";
import Nutrition_Disease_Screen from "../screens/Nutrition_Recomendation/DiseaseScreen";
import Nutrition_Find_Screen from "../screens/Nutrition_Recomendation/FindDisease";

const config = {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: "#f4511e"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold"
    }
  }
};

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Disease_Detection: { screen: Disease_Detection_Screen },
    Disease: { screen: DiseaseScreen },
    FindDisease: { screen: FindDisease },
    SelectPlant: { screen: SelectPlantScreen },
    InstantSolution: { screen: InstantSolutionScreen },
    PostQuery: { screen: PostQueryScreen },
    AllPost: { screen: AllPostScreen },
    SinglePost: { screen: SinglePostScreen },
    Yield_Prediction: { screen: yield_predictionscreen },
    District_Selection: { screen: District_SelectionScreen },
    Crop_Selection: { screen: Crop_Selection_Screen },
    UploadInput: { screen: UploadInputScreen },
    QrCode: { screen: QrCodeScreen },
    SelectZone: { screen: SelectZoneScreen },
    Weed_Detection: { screen: Weed_DetectionScreen },
    Weed_Upload: { screen: Weed_UploadScreen },
    Weed_Find: { screen: Weed_FindScreen },
    SeedLing_Detection: { screen: SeedLing_DetectionScreen },
    SeedLing_Upload: { screen: SeedLing_UploadScreen },
    SeedLing_Find: { screen: SeedLing_FindScreen },
    Hidden_Detection: { screen: Hidden_DetectionScreen },
    Hidden_Upload: { screen: Hidden_UploadScreen },
    Hidden_Find: { screen: Hidden_FindScreen },
    Crop_Find: { screen: Crop_FindScreen },
    Nutrition: { screen: Nutrition_Screen },
    Nutrition_Camera: { screen: Nutrition_Camera_Screen },
    Nutrition_Disease: { screen: Nutrition_Disease_Screen },
    Nutrition_Find: { screen: Nutrition_Find_Screen }
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: "Home",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios"
          ? `ios-information-circle${focused ? "" : "-outline"}`
          : "md-home"
      }
    />
  )
};

HomeStack.path = "";

const LinksStack = createStackNavigator(
  {
    Links: LinksScreen
  },
  config
);

LinksStack.navigationOptions = {
  tabBarLabel: "Cummunity",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-link" : "md-people"}
    />
  )
};

LinksStack.path = "";

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen
  },
  config
);

SettingsStack.navigationOptions = {
  tabBarLabel: "Profile",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === "ios" ? "ios-options" : "md-person"}
    />
  )
};

SettingsStack.path = "";

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  LinksStack,
  SettingsStack
});

tabNavigator.path = "";

export default tabNavigator;
