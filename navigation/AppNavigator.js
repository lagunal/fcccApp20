import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LaunchScreen from '../screens/LaunchScreen';
import HomeScreen from '../screens/HomeScreen';
import AboutUsScreen from '../screens/AboutUsScreen';

const MainNavigator = createStackNavigator({
    LaunchSCreen: LaunchScreen,
    HomeScreen: HomeScreen,
    AboutUsScreen: AboutUsScreen
});

export default createAppContainer(MainNavigator);





