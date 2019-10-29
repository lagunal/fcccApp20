import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

//import LaunchScreen from '../screens/LaunchScreen';
import HomeScreen from '../screens/HomeScreen';
import AboutUsScreen from '../screens/AboutUsScreen';
import FindUsScreen from '../screens/FindUsScreen';
import CalendarScreen from '../screens/CalendarScreen';
import GalleryScreen from '../screens/GalleryScreen';
import GalleryDetailsScreen from '../screens/GalleryDetailsScreen';

import { Colors } from '../theme';
import { Platform } from '@unimodules/core';

const MainNavigator = createStackNavigator({
    // LaunchSCreen: { 
    //     screen: LaunchScreen,
    //     navigationOptions: () => ({
    //         headerStyle: {
    //             backgroundColor: Colors.transparent,
    //         },
    //         headerTransparent: 'true'
    //       }),
    // },
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
              backgroundColor: Colors.darkblue,
            },
            headerTintColor: Colors.snow,
            // headerTitleStyle: {
            //   fontWeight: 'bold',
            // },
          },
    }


);

const TabScreenConfig = {
    Home: { screen: MainNavigator, navigationOptions: { 
        tabBarIcon: (tabInfo) => { return <Ionicons name='ios-home' size={25} color={tabInfo.tintColor} /> }
    }},
    Events: { screen: FindUsScreen, navigationOptions: { 
        tabBarIcon: (tabInfo) => { return <Ionicons name='ios-calendar' size={25} color={tabInfo.tintColor} /> }
    }},
    Ofrendar: { screen: FindUsScreen, navigationOptions: { 
        tabBarIcon: (tabInfo) => { return <Ionicons name='ios-heart' size={25} color={tabInfo.tintColor} /> }
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
                backgroundColor: Colors.darkblue,
            },
        }
    });


export default createAppContainer(TabNavigator);





