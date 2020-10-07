/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/index';
import {name as appName} from './app.json';
import Amplify, { Storage } from 'aws-amplify';
import awsconfig from './src/aws-exports';

Amplify.configure(awsconfig);
AppRegistry.registerComponent(appName, () => App);
