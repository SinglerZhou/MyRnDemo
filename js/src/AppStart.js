
import React, { Component } from "react";
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import BaseScene from "./base/BaseScene";
import MainPage from "./MainPage";
import App from "../../App";

const Stack = createStackNavigator();
class AppStart extends BaseScene {
    render(){
        return(
            <NavigationContainer>
                <Stack.Navigator initialRouteName="MainPage">
                    <Stack.Screen name="MainPage" component={MainPage}/>
                    <Stack.Screen name="App" component={App}/>
                </Stack.Navigator>
            </NavigationContainer>
        );
    }

}

export default AppStart;