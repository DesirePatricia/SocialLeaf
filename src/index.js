

import { Navigation } from "react-native-navigation";

import HomeScreen from "./scenes/Home";
import NewPostScreen from "./scenes/NewPost";

Navigation.registerComponent('Home', () => HomeScreen);
Navigation.registerComponent('NewPost', () => NewPostScreen);
Navigation.setDefaultOptions({
  statusBar: {
      visibile:false,  
  },
  topBar:{
    visible: false,
  }

});

Navigation.events().registerAppLaunchedListener(() => {

  Navigation.setRoot({
    root: {
      stack: {
        // create a stack navigation
        id: "stackMain",
        children: [
          {
            component: {
              name: "Home",
              }
            }
        ]
      }
    }
  });
});
