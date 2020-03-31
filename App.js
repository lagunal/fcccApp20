import React, { useState , useEffect} from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';


import MainNavigator from './navigation/AppNavigator';
//import LaunchScreen from './screens/LaunchScreen';

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })
}

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  // useEffect(() => {
  //  // get expo push token
  //   const token = await Expo.Notifications.getExpoPushTokenAsync();
  //   fetch('https://exp.host/--/api/v2/push/send', {       
  //           method: 'POST', 
  //           headers: {
  //                 Accept: 'application/json',  
  //                 'Content-Type': 'application/json', 
  //                 'accept-encoding': 'gzip, deflate',   
  //                 'host': 'exp.host'      
  //             }, 
  //           body: JSON.stringify({                 
  //                 to: token,                        
  //                 title: 'New Notification',                  
  //                 body: 'The notification worked!',             
  //                 priority: "high",            
  //                 sound:"default",              
  //                 channelId:"default",   
  //                     }),        
  //         }).then((response) => response.json())   
  //                 .then((responseJson) => {  })
  //                         .catch((error) => { console.log(error) });
  // })

  if (!fontLoaded) {
    return(
      <AppLoading 
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
      />
    )
  }

  return <MainNavigator />;
  //return <LaunchScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
