import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import LaunchScreen from '../screens/LaunchScreen';
import HomeScreen from '../screens/HomeScreen';

const MainNavigator = createStackNavigator({
    LaunchSCreen: LaunchScreen,
    HomeScreen: HomeScreen
});

export default createAppContainer(MainNavigator);





