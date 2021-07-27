/**
 * @format
 */
import 'react-native-gesture-handler'
import {AppRegistry} from 'react-native';
// import App from './App';
import MainPage from "./js/src/MainPage";
import AppStart from "./js/src/AppStart";
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => AppStart);
