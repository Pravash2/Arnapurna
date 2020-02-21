import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import MainTabNavigator from "./MainTabNavigator";
import WelcomeScreen from "../components/Screen";
import SelectCity from "../screens/SelectCity";
import LoginScreen from "../screens/Auth/Login";
import SignUpScreen from "../screens/Auth/SignUp";
import ForgotPasswordScreen from "../screens/Auth/ForgotPassword";
import OTPScreen from "../screens/OTPscreen";
import SelectProfileSceeen from "../screens/Auth/SelectProfile";

const AuthStack = createStackNavigator(
  {
    Landing: {
      screen: WelcomeScreen
    },
    SelectCity: {
      screen: SelectCity
    },
    MainScreen: {
      screen: MainTabNavigator
    },
    Login: {
      screen: LoginScreen
    },
    SignUp: {
      screen: SignUpScreen
    },
    SelectProfile: {
      screen: SelectProfileSceeen
    },
    ForgotPassword: {
      screen: ForgotPasswordScreen
    },
    OTP: {
      screen: OTPScreen
    }
  },
  {
    headerMode: "none",
    navigationOptions: {
      headerVisible: false
    }
  }
);

export default createAppContainer(
  createSwitchNavigator({
    Auth: {
      screen: AuthStack
    },
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Main: MainTabNavigator
  })
);
