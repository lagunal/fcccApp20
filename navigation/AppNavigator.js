import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import LaunchScreen from '../screens/LaunchScreen';
import HomeScreen from '../screens/HomeScreen';
import AboutUsScreen from '../screens/AboutUsScreen';
import FindUsScreen from '../screens/FindUsScreen';
import CalendarScreen from '../screens/CalendarScreen';
import GalleryScreen from '../screens/GalleryScreen';
import GalleryDetailsScreen from '../screens/GalleryDetailsScreen';
import EventsScreen from '../screens/EventsScreen';
import MessagesScreen from '../screens/MessagesScreen';
import MessagesDetailScreen from '../screens/MessagesDetailsScreen';

import { Colors } from '../theme';

const MainNavigator = createStackNavigator({
    LaunchSCreen: { 
        screen: LaunchScreen,
        navigationOptions: () => ({
            headerStyle: {
                backgroundColor: Colors.transparent,
            },
            headerTransparent: 'true',
          }),
    },
    HomeScreen: HomeScreen,
    AboutUsScreen: AboutUsScreen,
    FindUsScreen: FindUsScreen,
    CalendarScreen: CalendarScreen,
    GalleryScreen: GalleryScreen,
    GalleryDetailsScreen: GalleryDetailsScreen
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
              backgroundColor: Colors.blue,
            },
            headerTintColor: Colors.snow,
            // headerTitleStyle: {
            //   fontWeight: 'bold',
            // },
          },
    }


);

MainNavigator.navigationOptions = ({ navigation }) => {
    let tabBarVisible = false;
    if (navigation.state.index > 0) {
      tabBarVisible = true;
    }
  
    return {
      tabBarVisible,
    };
};

const EventsNavigator = createStackNavigator({
    EventsScreen: EventsScreen,
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: Colors.blue,
            },
            headerTintColor: Colors.snow,
        },
    }
)

const MessagesNavigator = createStackNavigator({
    MessagesScreen: MessagesScreen,
    MessagesDetailScreen: MessagesDetailScreen
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: Colors.blue,
            },
            headerTintColor: Colors.snow,
        },
    }
)

const TabScreenConfig = {
    Home: { screen: MainNavigator, navigationOptions: { 
        tabBarIcon: (tabInfo) => { return <Ionicons name='ios-home' size={25} color={tabInfo.tintColor} /> }
    }},
    Events: { screen: EventsNavigator, navigationOptions: { 
        tabBarIcon: (tabInfo) => { return <Ionicons name='ios-calendar' size={25} color={tabInfo.tintColor} /> }
    }},
    Mensajes: { screen: MessagesNavigator, navigationOptions: { 
        tabBarIcon: (tabInfo) => { return <Ionicons name='ios-mic' size={25} color={tabInfo.tintColor} /> }
    }}
};

const TabNavigator = 
    Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(TabScreenConfig, {
        activeColor: Colors.snow,
        shifting: true
    })
    : createBottomTabNavigator(TabScreenConfig, {
        tabBarOptions: {
            activeTintColor: Colors.snow,
            style: {
                backgroundColor: Colors.blue,
            },
        }
    });


export default createAppContainer(TabNavigator);





