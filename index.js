/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import i18n from './src/assets/i18n/i18n';

AppRegistry.registerComponent(appName, () => App);
