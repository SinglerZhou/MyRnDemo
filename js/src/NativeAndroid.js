import { NativeModules } from "react-native";

export default class NativeAndroid {
    /**
     * 调转Andorid 页面 
     *
     * @param activityName 需要跳转的Android页面名称
     * @param {*} params 携带的参数
     */
    static startActivity(activityName = "", params = "") {
        NativeModules.ReactNativeUtil.startActivityFromJs(activityName, params);
    }
}