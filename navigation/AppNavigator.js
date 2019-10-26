import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LaunchScreen from '../screens/LaunchScreen';
import HomeScreen from '../screens/HomeScreen';
import AboutUsScreen from '../screens/AboutUsScreen';
import FindUsScreen from '../screens/FindUsScreen';
import CalendarScreen from '../screens/CalendarScreen';
import GalleryScreen from '../screens/GalleryScreen';
import GalleryDetailsScreen from '../screens/GalleryDetailsScreen';

import { Colors } from '../theme';

const MainNavigator = createStackNavigator({
    LaunchSCreen: { 
        screen: LaunchScreen,
        navigationOptions: () => ({
            headerStyle: {
                backgroundColor: Colors.transparent,
            },
            headerTransparent: 'true'
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
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          },
    }


);



export default createAppContainer(MainNavigator);





