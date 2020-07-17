import React, { useEffect } from 'react'
import { View, ScrollView, Text, Image, Button } from 'react-native'

import { Images } from '../theme';

//import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';
import { Notifications } from 'expo';

// Styles
import styles from '../styles/FindUsScreenStyles';

const notifications = () => {

    useEffect(() => {
      Permissions.getAsync(Permissions.NOTIFICATIONS)
      .then((statusObj) => {
        if (statusObj.status !== 'granted') {
          return Permissions.askAsync(Permissions.NOTIFICATIONS);
        }
        return statusObj;
      })
      .then((statusObj) => {
        if (statusObj.status !== 'granted') {
          return;
        }
      })
    }, []);

    const triggerNotification = () => {
      Notifications.scheduleNotificationAsync({
        content: {
          title: 'My first local notification',
          body: 'Notification we are sending',
        },
        trigger: {
          seconds: 10,
        },
      });
    };

    return (
      <View style={styles.mainContainer}>
        <Image source={Images.background} style={styles.backgroundImage} resizeMode='stretch' />
        <Button title="Trigger Notification" onPress={triggerNotification} />
        
      </View>
    )
  }


  notifications.navigationOptions = {
    headerTitle: 'Notifications'
}

export default notifications;