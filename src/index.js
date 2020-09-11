

import { Navigation } from "react-native-navigation";

import HomeScreen from "./scenes/Home";
import NewPostScreen from "./scenes/NewPost";
import SelectedPictureScreen from "./scenes/SelectedPicture";

Navigation.registerComponent('Home', () => HomeScreen);
Navigation.registerComponent('NewPost', () => NewPostScreen);
Navigation.registerComponent('SelectedPicture', () => SelectedPictureScreen);
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
