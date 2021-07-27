import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import NativeAndroid from "../NativeAndroid";

export default class BaseScene extends React.Component {
    constructor(props){
        super(props);
    }

    navigationBar() {
        return(
            <View style={{ flexDirection: "row", paddingVertical: 8, alignItems: "center" }}>
                <TouchableOpacity
                    onPress={() => {
                        console.log("app","返回按钮");
                        // NativeAndroid.startActivity("com.myrndemo.ui.SecondActivity", "from App.js");
                        this.onPressBack();
                }}>
                <Image
                    style={{ height: 20, width: 40}}
                    resizeMode="center"
                    source={require("../../../js/res/back.png")}/>
                </TouchableOpacity>
                <Text style={{ fontSize: 16, fontWeight: "bold"}}>
                    我是首页
                </Text>
        </View>
        );
    }

    onPressBack() {
        
    }
}