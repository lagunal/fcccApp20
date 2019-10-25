import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LaunchScreen from '../screens/LaunchScreen';
import HomeScreen from '../screens/HomeScreen';
import AboutUsScreen from '../screens/AboutUsScreen';
import FindUsScreen from '../screens/FindUsScreen';
import CalendarScreen from '../screens/CalendarScreen';
import GalleryScreen from '../screens/GalleryScreen';
import GalleryDetailsScreen from '../screens/GalleryDetailsScreen';

const MainNavigator = createStackNavigator({
    LaunchSCreen: LaunchScreen,
    HomeScreen: HomeScreen,
    AboutUsScreen: AboutUsScreen,
    FindUsScreen: FindUsScreen,
    CalendarScreen: CalendarScreen,
    GalleryScreen: GalleryScreen,
    GalleryDetailsScreen: GalleryDetailsScreen
});

export default createAppContainer(MainNavigator);





