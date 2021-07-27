import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet, FlatList } from "react-native";
import BaseScene from "./base/BaseScene";
import NativeAndroid from "./NativeAndroid";

const TAG = "MainPage";

/**
 * 首页
 */
export default class MainPage extends BaseScene {
    /**
     * 构造函数
     *
     * @param props 属性
     */
    constructor(props) {
        super(props);
        this.state = {
            mainPageData: [
                {
                    id: 1,
                    name: "张三"
                },
                {
                    id: 2,
                    name: "李四"
                },
                {
                    id: 3,
                    name: "王五"
                },
                {
                    id: 4,
                    name: "馬六"
                }
            ]
        }
    }

    render() {
        return(
            <View style={{flex: 1}}>
                {super.navigationBar()}
                <View style={[styles.containerStyle, {flex: 1}]}>
                    <Text>
                        以下是列表区域
                    </Text>
                    <FlatList
                        keyExtractor={(item, index) => index}
                        style={{ flex: 1, marginHorizontal: 12}}
                        horizontal={true}
                        key={this.state.mainPageData?.id+"123"}
                        data={this.state.mainPageData}
                        renderItem={({ item, index, separators }) => this.mainItem(item, index)}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
            </View>
        );
    }

    mainItem(item, index) {
        return(
            <View style={{flex: 1}}>
                <TouchableOpacity
                    style={styles.flatlistItemStyle}
                    onPress={() => {
                        this.onPressItem(item)
                    }}>
                    <Text>
                        {item.name}
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }

    onPressItem(item) {
        switch(item.id) {
            case 1:
                console.log(TAG, "id="+item.id + "/name =" + item.name);
                break;
            case 2:
                console.log(TAG, "id="+item.id + "/name =" + item.name);
                break
            case 3:
                console.log(TAG, "id="+item.id + "/name =" + item.name);
                break
            case 4:
                console.log(TAG, "id="+item.id + "/name =" + item.name);
                break
            default:
                console.log(TAG, "id="+item.id + "/name =" + item.name);
                break;
        }
    }

    /**
     * 重写父类的返回按钮
     */
    onPressBack() {
        console.log("MainPage", "返回按钮 onPressBack");
        
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        backgroundColor: "#ff0"
    },
    flatlistItemStyle: {
        width: 100,
        height: 200,
        marginStart: 10,
        backgroundColor: "#D6D6D6",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center"
    }
});