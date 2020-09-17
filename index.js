/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/index';
import {name as appName} from './app.json';
import Amplify, { Storage } from 'aws-amplify';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);
AppRegistry.registerComponent(appName, () => App);
